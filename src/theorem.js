"use strict";

import shim from "./shim";
import Label from "./label";
import Proof from "./proof";
import Consequent from "./consequent";
import Supposition from "./supposition";
import LocalContext from "./context/local";
import Substitutions from "./substitutions";
import TopLevelAssertion from "./topLevelAssertion";

import { stringFromLabels } from "./topLevelAssertion";
import { nodeQuery, nodesQuery } from "./utilities/query";

const proofNodeQuery = nodeQuery("/theorem/proof"),
      labelNodesQuery = nodesQuery("/theorem/label"),
      consequentNodeQuery = nodeQuery("/theorem/consequent"),
      suppositionNodesQuery = nodesQuery("/theorem/supposition");

class Theorem extends TopLevelAssertion {
  verify() {
    let verified = false;

    const theoremString = this.string;  ///

    this.fileContext.trace(`Verifying the '${theoremString}' theorem...`);

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
          const substitutions = Substitutions.fromNothing(),
                proofVerified = this.proof.verify(substitutions, this.consequent, localContext);

          if (proofVerified) {
            const theorem = this;  ///

            this.fileContext.addTheorem(theorem);

            verified = true;
          }
        }
      }
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${theoremString}' theorem.`);
    }

    return verified;
  }

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Theorem, json, fileContext); }

  static fromTheoremNode(theoremNode, fileContext) {
    const proofNode = proofNodeQuery(theoremNode),
          labelNodes = labelNodesQuery(theoremNode),
          consequentNode = consequentNodeQuery(theoremNode),
          suppositionNodes = suppositionNodesQuery(theoremNode),
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
          theorem = new Theorem(fileContext, string, labels, suppositions, consequent, proof);

    return theorem;
  }
}

Object.assign(shim, {
  Theorem
});

export default Theorem;
