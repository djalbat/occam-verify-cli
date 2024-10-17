"use strict";

import Label from "./label";
import Proof from "./proof";
import Consequent from "./consequent";
import Supposition from "./supposition";
import LocalContext from "./context/local";
import Substitutions from "./substitutions";
import TopLevelAssertion from "./topLevelAssertion";

import { EMPTY_STRING } from "./constants";
import { stringFromLabels } from "./topLevelAssertion";
import { nodeQuery, nodesQuery } from "./utilities/query";

const proofNodeQuery = nodeQuery("/lemma/proof"),
      labelNodesQuery = nodesQuery("/lemma/label"),
      consequentNodeQuery = nodeQuery("/lemma/consequent"),
      suppositionNodesQuery = nodesQuery("/lemma/supposition");

export default class Lemma extends TopLevelAssertion {
  verify() {
    let verified = false;

    const lemmaString = this.string;  ///

    (lemmaString === EMPTY_STRING) ?
      this.fileContext.trace(`Verifying a lemma...`) :
        this.fileContext.trace(`Verifying the '${lemmaString}' lemma...`);

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
            const lemma = this;  ///

            this.fileContext.addLemma(lemma);

            verified = true;
          }
        }
      }
    }

    if (verified) {
      (lemmaString === EMPTY_STRING) ?
        this.fileContext.debug(`...verified a lemma.`) :
          this.fileContext.debug(`...verified the '${lemmaString}' lemma.`);
    }

    return verified;
  }

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Lemma, json, fileContext); }

  static fromLemmaNode(lemmaNode, fileContext) {
    const proofNode = proofNodeQuery(lemmaNode),
          labelNodes = labelNodesQuery(lemmaNode),
          consequentNode = consequentNodeQuery(lemmaNode),
          suppositionNodes = suppositionNodesQuery(lemmaNode),
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
          lemma = new Lemma(fileContext, string, labels, suppositions, consequent, proof);

    return lemma;
  }
}
