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

const proofNodeQuery = nodeQuery("/metaLemma/proof"),
      labelNodesQuery = nodesQuery("/metaLemma/label"),
      consequentNodeQuery = nodeQuery("/metaLemma/consequent"),
      suppositionNodesQuery = nodesQuery("/metaLemma/supposition");

export default class MetaLemma extends TopLevelAssertion {
  verify() {
    let verified = false;

    const labelsString = labelsStringFromLabels(this.labels);

    (labelsString === null) ?
      this.fileContext.trace(`Verifying a meta-emma...`) :
        this.fileContext.trace(`Verifying the '${labelsString}' meta-emma...`);

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
            const metaLemma = this;  ///

            this.fileContext.addLemma(metaLemma);

            verified = true;
          }
        }
      }
    }

    if (verified) {
      (labelsString === null) ?
        this.fileContext.debug(`...verified a meta-emma.`) :
          this.fileContext.debug(`...verified the '${labelsString}' meta-emma.`);
    }

    return verified;
  }

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(MetaLemma, json, fileContext); }

  static fromMetaLemmaNode(metaLemmaNode, fileContext) {
    const proofNode = proofNodeQuery(metaLemmaNode),
          labelNodes = labelNodesQuery(metaLemmaNode),
          consequentNode = consequentNodeQuery(metaLemmaNode),
          suppositionNodes = suppositionNodesQuery(metaLemmaNode),
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
          metaLemma = new MetaLemma(fileContext, labels, suppositions, consequent, proof);

    return metaLemma;
  }
}
