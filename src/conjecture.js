"use strict";

import shim from "./shim";
import LocalContext from "./context/local";
import TopLevelAssertion from "./topLevelAssertion";

import { stringFromLabels } from "./topLevelAssertion";
import { nodeQuery, nodesQuery } from "./utilities/query";

const proofNodeQuery = nodeQuery("/conjecture/proof"),
      labelNodesQuery = nodesQuery("/conjecture/label"),
      consequentNodeQuery = nodeQuery("/conjecture/consequent"),
      suppositionNodesQuery = nodesQuery("/conjecture/supposition");

class Conjecture extends TopLevelAssertion {
  verify() {
    let verified = false;

    const conjectureString = this.string; ///

    this.fileContext.trace(`Verifying the '${conjectureString}' conjecture...`);

    const labelsVerifiedWhenDeclared = this.labels.every((label) => {
      const labelVVerifiedWhenDeclared = label.verifyWhenDeclared(this.fileContext);

      if (labelVVerifiedWhenDeclared) {
        return true;
      }
    });

    if (labelsVerifiedWhenDeclared) {
      const localContext = LocalContext.fromFileContext(this.fileContext),
            suppositionsVerified = this.suppositions.every((supposition) => {
              const suppositionVerified = supposition.verify(localContext);

              if (suppositionVerified) {
                return true;
              }
            });

      if (suppositionsVerified) {
        const consequentVerified = this.consequent.verify(localContext);

        if (consequentVerified) {
          if (this.proof !== null) {
            const { Substitutions } = shim,
                  substitutions = Substitutions.fromNothing();

            this.proof.verify(substitutions, this.consequent, localContext);
          }

          const conjecture = this;  ///

          this.fileContext.addConjecture(conjecture);

          verified = true;
        }
      }
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${conjectureString}' conjecture.`);
    }

    return verified;
  }

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Conjecture, json, fileContext); }

  static fromConjectureNode(conjectureNode, fileContext) {
    const { Label, Proof, Supposition, Consequent } = shim,
          proofNode = proofNodeQuery(conjectureNode),
          labelNodes = labelNodesQuery(conjectureNode),
          consequentNode = consequentNodeQuery(conjectureNode),
          suppositionNodes = suppositionNodesQuery(conjectureNode),
          labels = labelNodes.map((labelNode) => {
            const label = Label.fromLabelNode(labelNode, fileContext);

            return label;
          }),
          suppositions = suppositionNodes.map((suppositionNode) => {
            const supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);

            return supposition;
          }),
          consequent = Consequent.fromConsequentNode(consequentNode, fileContext),
          string = stringFromLabels(labels),
          proof = Proof.fromProofNode(proofNode, fileContext),
          conjecture = new Conjecture(fileContext, string, labels, suppositions, consequent, proof);

    return conjecture;
  }
}

Object.assign(shim, {
  Conjecture
});

export default Conjecture;
