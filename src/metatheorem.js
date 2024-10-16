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

const proofNodeQuery = nodeQuery("/metatheorem/proof"),
      labelNodesQuery = nodesQuery("/metatheorem/label"),
      consequentNodeQuery = nodeQuery("/metatheorem/consequent"),
      suppositionNodesQuery = nodesQuery("/metatheorem/supposition");

export default class Metatheorem extends TopLevelAssertion {
  verify() {
    let verified = false;

    const labelsString = labelsStringFromLabels(this.labels);

    this.fileContext.trace(`Verifying the '${labelsString}' metatheorem...`);

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
            const metatheorem = this;  ///

            this.fileContext.addMetatheorem(metatheorem);

            verified = true;
          }
        }
      }
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${labelsString}' metatheorem.`);
    }

    return verified;
  }

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Metatheorem, json, fileContext); }

  static fromMetatheoremNode(metatheoremNode, fileContext) {
    const proofNode = proofNodeQuery(metatheoremNode),
          labelNodes = labelNodesQuery(metatheoremNode),
          consequentNode = consequentNodeQuery(metatheoremNode),
          suppositionNodes = suppositionNodesQuery(metatheoremNode),
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
          metatheorem = new Metatheorem(fileContext, labels, suppositions, consequent, proof);

    return metatheorem;
  }
}
