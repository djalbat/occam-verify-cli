"use strict";

import Label from "./label";
import Proof from "./proof";
import Consequent from "./consequent";
import Supposition from "./supposition";
import LocalContext from "./context/local";
import Substitutions from "./substitutions";
import TopLevelAssertion from "./topLevelAssertion";

import { nodeQuery, nodesQuery } from "./utilities/query";
import { labelsStringFromLabels } from "./topLevelAssertion";

const proofNodeQuery = nodeQuery("/conjecture/proof"),
      labelNodesQuery = nodesQuery("/conjecture/label"),
      consequentNodeQuery = nodeQuery("/conjecture/consequent"),
      suppositionNodesQuery = nodesQuery("/conjecture/supposition");

export default class Conjecture extends TopLevelAssertion {
  verify() {
    let verified = false;

    const labelsString = labelsStringFromLabels(this.labels);

    this.fileContext.trace(`Verifying the '${labelsString}' conjecture...`);

    const labelsVerifiedAtTopLevel = this.labels.every((label) => {
      const labelVVerifiedAtTopLevel = label.verifyAtTopLevel(this.fileContext);

      if (labelVVerifiedAtTopLevel) {
        return true;
      }
    });

    if (labelsVerifiedAtTopLevel) {
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
            const substitutions = Substitutions.fromNothing();

            this.proof.verify(substitutions, this.consequent, localContext);
          }

          const conjecture = this;  ///

          this.fileContext.addConjecture(conjecture);

          verified = true;
        }
      }
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${labelsString}' conjecture.`);
    }

    return verified;
  }

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Conjecture, json, fileContext); }

  static fromConjectureNode(conjectureNode, fileContext) {
    const proofNode = proofNodeQuery(conjectureNode),
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
          proof = Proof.fromProofNode(proofNode, fileContext),
          conjecture = new Conjecture(fileContext, labels, suppositions, consequent, proof);

    return conjecture;
  }
}
