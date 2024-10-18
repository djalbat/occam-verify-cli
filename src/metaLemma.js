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

const proofNodeQuery = nodeQuery("/metaLemma/proof"),
      labelNodesQuery = nodesQuery("/metaLemma/label"),
      consequentNodeQuery = nodeQuery("/metaLemma/consequent"),
      suppositionNodesQuery = nodesQuery("/metaLemma/supposition");

export default class MetaLemma extends TopLevelAssertion {
  constructor(fileContext, string, labels, suppositions, consequent, proof, substitutions) {
    super(fileContext, string, labels, suppositions, consequent, proof);

    this.substitutions = substitutions;
  }

  getSubstitutions() {
    return this.substitutions;
  }

  verify() {
    let verified = false;

    const metaLemmaString = this.string;  ///

    (metaLemmaString === EMPTY_STRING) ?
      this.fileContext.trace(`Verifying a meta-lemma...`) :
        this.fileContext.trace(`Verifying the '${metaLemmaString}' meta-lemma...`);

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
          const proofVerified = this.proof.verify(this.substitutions, this.consequent, localContext);

          if (proofVerified) {
            const metaLemma = this;  ///

            this.fileContext.addMetaLemma(metaLemma);

            verified = true;
          }
        }
      }
    }

    if (verified) {
      (metaLemmaString === EMPTY_STRING) ?
        this.fileContext.debug(`...verified a meta-lemma.`) :
          this.fileContext.debug(`...verified the '${metaLemmaString}' meta-lemma.`);
    }

    return verified;
  }

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
          string = stringFromLabels(labels),
          substitutions = Substitutions.fromNothing(),
          metaLemma = new MetaLemma(fileContext, string, labels, suppositions, consequent, proof, substitutions);

    return metaLemma;
  }
}

