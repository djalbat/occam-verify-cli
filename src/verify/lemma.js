"use strict";

import Lemma from "../lemma";
import verifyProof from "../verify/proof";
import ProofContext from "../context/proof";
import verifyLabels from "../verify/labels";
import verifySupposition from "./supposition";
import verifyConsequence from "./consequence";

import { first } from "../utilities/array";
import { EMPTY_STRING } from "../constants";
import { nodesAsString } from "../utilities/string";
import { nodeQuery, nodesQuery } from "../utilities/query";

const proofNodeQuery = nodeQuery("/lemma/proof!"),
      labelNodesQuery = nodesQuery("/lemma/label"),
      consequenceNodeQuery = nodeQuery("/lemma/consequence!"),
      suppositionsNodeQuery = nodesQuery("/lemma/supposition");

export default function verifyLemma(lemmaNode, fileContext) {
  let lemmaVerified = false;

  fileContext.begin(lemmaNode);

  const labelNodes = labelNodesQuery(lemmaNode),
        labelsString = nodesAsString(labelNodes),
        proofContext = ProofContext.fromFileContext(fileContext);

  (labelsString === EMPTY_STRING) ?
    fileContext.debug(`Verifying a lemma...`) :
      fileContext.debug(`Verifying the '${labelsString}' lemma...`);

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
      const consequences = [],
            consequenceNode = consequenceNodeQuery(lemmaNode),
            consequenceVerified = verifyConsequence(consequenceNode, consequences, proofContext);

      if (consequenceVerified) {
        const proofNode = proofNodeQuery(lemmaNode),
              firstConsequence = first(consequences),
              consequence = firstConsequence, ///
              proofVerified = verifyProof(proofNode, consequence, proofContext);

        if (proofVerified) {
          const lemma = Lemma.fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence);

          fileContext.addLemma(lemma);

          lemmaVerified = true;
        }
      }
    }
  }

  if (lemmaVerified) {
    (labelsString === EMPTY_STRING) ?
      fileContext.info(`Verified the lemma.`) :
        fileContext.info(`Verified the '${labelsString}' lemma.`);
  }

  lemmaVerified ?
    fileContext.complete(lemmaNode) :
      fileContext.complete(lemmaNode);

  return lemmaVerified;
}
