"use strict";

import Lemma from "../lemma";
import verifyProof from "../verify/proof";
import ProofContext from "../context/proof";
import verifyLabels from "../verify/labels";
import verifyAntecedent from "./antecedent";
import verifyConsequent from "./consequent";

import { first } from "../utilities/array";
import { EMPTY_STRING } from "../constants";
import { nodesAsString } from "../utilities/string";
import { nodeQuery, nodesQuery } from "../utilities/query";

const proofNodeQuery = nodeQuery("/lemma/proof!"),
      labelNodesQuery = nodesQuery("/lemma/label"),
      consequentNodeQuery = nodeQuery("/lemma/consequent!"),
      antecedentsNodeQuery = nodesQuery("/lemma/antecedent");

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
    const antecedents = [],
          antecedentNodes = antecedentsNodeQuery(lemmaNode),
          antecedentsVerified = antecedentNodes.every((antecedentNode) => {
            const antecedentVerified = verifyAntecedent(antecedentNode, antecedents, proofContext);

            if (antecedentVerified) {
              return true;
            }
          });

    if (antecedentsVerified) {
      const consequents = [],
            consequentNode = consequentNodeQuery(lemmaNode),
            consequentVerified = verifyConsequent(consequentNode, consequents, proofContext);

      if (consequentVerified) {
        const proofNode = proofNodeQuery(lemmaNode),
              firstConsequent = first(consequents),
              consequent = firstConsequent, ///
              proofVerified = verifyProof(proofNode, consequent, proofContext);

        if (proofVerified) {
          const lemma = Lemma.fromLabelsAntecedentsAndConsequent(labels, antecedents, consequent);

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
