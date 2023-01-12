"use strict";

import Lemma from "../lemma";
import verifyProof from "../verify/proof";
import ProofContext from "../context/proof";
import verifyLabels from "../verify/labels";
import verifyConditionalIndicative from "../verify/conditionalIndicative";
import verifyUnconditionalIndicative from "../verify/unconditionalIndicative";

import { first } from "../utilities/array";
import { EMPTY_STRING } from "../constants";
import { nodesAsString } from "../utilities/string";
import { nodeQuery, nodesQuery } from "../utilities/query";

const proofNodeQuery = nodeQuery("/lemma/proof!"),
      labelNodesQuery = nodesQuery("/lemma/label"),
      conditionalIndicativeNodeQuery = nodeQuery("/lemma/conditionalIndicative!"),
      unconditionalIndicativeNodeQuery = nodeQuery("/lemma/unconditionalIndicative!");

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
          consequents = [],
          conditionalIndicativeNode = conditionalIndicativeNodeQuery(lemmaNode),
          unconditionalIndicativeNode = unconditionalIndicativeNodeQuery(lemmaNode);

    let conditionalIndicativeVerified = false,
        unconditionalIndicativeVerified = false;

    if (conditionalIndicativeNode !== null) {
      conditionalIndicativeVerified = verifyConditionalIndicative(conditionalIndicativeNode, antecedents, consequents, proofContext);
    }

    if (unconditionalIndicativeNode !== null) {
      unconditionalIndicativeVerified = verifyUnconditionalIndicative(unconditionalIndicativeNode, consequents, proofContext);
    }

    if (conditionalIndicativeVerified || unconditionalIndicativeVerified) {
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
