"use strict";

import Lemma from "../lemma";
import verifyLabels from "../verify/labels";
import ProofContext from "../context/proof";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";
import verifyIndicativeConditional from "../verify/indicativeConditional";

import { nodesAsString } from "../utilities/string";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodesQuery = nodesQuery("/lemma/label"),
      unqualifiedStatementNodeQuery = nodeQuery("/lemma/unqualifiedStatement!"),
      indicativeConditionalNodeQuery = nodeQuery("/lemma/indicativeConditional!");

export default function verifyLemma(lemmaNode, fileContext) {
  let lemmaVerified = false;

  fileContext.begin(lemmaNode);

  const labelNodes = labelNodesQuery(lemmaNode),
        labelsString = nodesAsString(labelNodes),
        proofContext = ProofContext.fromFileContext(fileContext);

  fileContext.debug(`Verifying the '${labelsString}' lemma...`);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const unqualifiedStatementNode = unqualifiedStatementNodeQuery(lemmaNode),
          indicativeConditionalNode = indicativeConditionalNodeQuery(lemmaNode);

    let unqualifiedStatementVerified = false,
        indicativeConditionalVerified = false;

    if (unqualifiedStatementNode !== null) {
      unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext);
    }

    if (indicativeConditionalNode !== null) {
      indicativeConditionalVerified = verifyIndicativeConditional(indicativeConditionalNode, proofContext);
    }

    if (unqualifiedStatementVerified || indicativeConditionalVerified) {
      const lemma = Lemma.fromLabelsUnqualifiedStatementNodeAndIndicativeConditionalNode(labels, unqualifiedStatementNode, indicativeConditionalNode);

      fileContext.addLemma(lemma);

      lemmaVerified = true;
    }
  }

  if (lemmaVerified) {
    fileContext.info(`Verified the '${labelsString}' lemma.`);
  }

  lemmaVerified ?
    fileContext.complete(lemmaNode) :
      fileContext.halt(lemmaNode);

  return lemmaVerified;
}
