"use strict";

import Lemma from "../lemma";
import verifyProof from "../verify/proof";
import ProofContext from "../context/proof";
import verifyLabels from "../verify/labels";
import verifyConsequent from "./consequent";
import verifySupposition from "./supposition";

import { first } from "../utilities/array";
import { EMPTY_STRING } from "../constants";
import { nodeQuery, nodesQuery } from "../utilities/query";

const proofNodeQuery = nodeQuery("/lemma/proof!"),
      labelNodesQuery = nodesQuery("/lemma/labels/label"),
      consequentNodeQuery = nodeQuery("/lemma/consequent!"),
      suppositionsNodeQuery = nodesQuery("/lemma/supposition");

export default function verifyLemma(lemmaNode, fileContext) {
  let lemmaVerified = false;

  const labelNodes = labelNodesQuery(lemmaNode),
        labelsString = fileContext.nodesAsString(labelNodes),
        proofContext = ProofContext.fromFileContext(fileContext);

  (labelsString === EMPTY_STRING) ?
    fileContext.debug(`Verifying a lemma...`, lemmaNode) :
      fileContext.debug(`Verifying the '${labelsString}' lemma...`, lemmaNode);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const suppositions = [],
          suppositionNodes = suppositionsNodeQuery(lemmaNode),
          suppositionsVerified = suppositionNodes.every((suppositionNode) => {
            const suppositionVerified = verifySupposition(suppositionNode, suppositions, proofContext);

            if (suppositionVerified) {
              return true;
            }
          });

    if (suppositionsVerified) {
      const consequents = [],
            consequentNode = consequentNodeQuery(lemmaNode),
            consequentVerified = verifyConsequent(consequentNode, consequents, proofContext);

      if (consequentVerified) {
        const proofNode = proofNodeQuery(lemmaNode),
              firstConsequent = first(consequents),
              consequent = firstConsequent, ///
              proofVerified = verifyProof(proofNode, consequent, proofContext);

        if (proofVerified) {
          const lemma = Lemma.fromLabelsSuppositionsConsequentAndProofContext(labels, suppositions, consequent, proofContext);

          fileContext.addLemma(lemma);

          lemmaVerified = true;
        }
      }
    }
  }

  if (lemmaVerified) {
    (labelsString === EMPTY_STRING) ?
      fileContext.info(`Verified the lemma.`, lemmaNode) :
        fileContext.info(`Verified the '${labelsString}' lemma.`, lemmaNode);
  }

  return lemmaVerified;
}
