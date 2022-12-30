"use strict";

import Lemma from "../lemma";
import verifyLabels from "../verify/labels";
import ProofContext from "../context/proof";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";
import verifyIndicativeConditional from "../verify/indicativeConditional";

import { front, last } from "../utilities/array";
import { nodesAsString } from "../utilities/string";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodesQuery = nodesQuery("/lemma/label"),
      statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      statementNodesQuery = nodesQuery("/indicativeConditional/unqualifiedStatement/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/lemma/unqualifiedStatement!"),
      indicativeConditionalNodeQuery = nodeQuery("/lemma/indicativeConditional!");

export default function verifyLemma(lemmaNode, fileContext) {
  let lemmaVerified = false;

  fileContext.begin(lemmaNode);

  const labelNodes = labelNodesQuery(lemmaNode),
        labelsString = nodesAsString(labelNodes),
        proofContext = ProofContext.fromFileContext(fileContext);

  (labelsString === null) ?
    fileContext.debug(`Verifying an anonymous lemma...`) :
      fileContext.debug(`Verifying the '${labelsString}' lemma...`);

  const labels = [],
        labelsLength = labels.length,
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const unqualifiedStatementNode = unqualifiedStatementNodeQuery(lemmaNode),
          indicativeConditionalNode = indicativeConditionalNodeQuery(lemmaNode);

    if (unqualifiedStatementNode !== null) {
      const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext);

      if (unqualifiedStatementVerified) {
        if (labelsLength > 0) {
          const statementNode = statementNodeQuery(unqualifiedStatementNode),
                lemma = Lemma.fromLabelsAndStatementNode(labels, statementNode);

          fileContext.addLemma(lemma);
        }

        lemmaVerified = true;
      }
    }

    if (indicativeConditionalNode !== null) {
      const indicativeConditionalVerified = verifyIndicativeConditional(indicativeConditionalNode, proofContext);

      if (indicativeConditionalVerified !== null) {
        if (labelsLength) {
          const statementNodes = statementNodesQuery(indicativeConditionalNode),
                lastStatementNode = last(statementNodes),
                frontStatementNodes = front(statementNodes),
                consequentStatementNode = lastStatementNode,  ///
                suppositionStatementNodes = frontStatementNodes,  ///
                lemma = Lemma.fromLabelsSuppositionStatementNodesAndConsequentStatementNode(labels, suppositionStatementNodes, consequentStatementNode);

          fileContext.addLemma(lemma);
        }

        lemmaVerified = true;
      }
    }
  }

  if (lemmaVerified) {
    (labelsString === null) ?
      fileContext.info(`Verified an anonymous lemma.`) :
        fileContext.info(`Verified the '${labelsString}' lemma.`);
  }

  lemmaVerified ?
    fileContext.complete(lemmaNode) :
      fileContext.halt(lemmaNode);

  return lemmaVerified;
}
