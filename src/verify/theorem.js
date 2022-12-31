"use strict";

import Theorem from "../theorem";
import verifyLabels from "../verify/labels";
import ProofContext from "../context/proof";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";
import verifyIndicativeConditional from "../verify/indicativeConditional";

import { front, last } from "../utilities/array";
import { nodesAsString } from "../utilities/string";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodesQuery = nodesQuery("/theorem/label"),
      statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      statementNodesQuery = nodesQuery("/indicativeConditional/unqualifiedStatement/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/theorem/unqualifiedStatement!"),
      indicativeConditionalNodeQuery = nodeQuery("/theorem/indicativeConditional!");

export default function verifyTheorem(theoremNode, fileContext) {
  let theoremVerified = false;

  fileContext.begin(theoremNode);

  const labelNodes = labelNodesQuery(theoremNode),
        labelsString = nodesAsString(labelNodes),
        proofContext = ProofContext.fromFileContext(fileContext);

  fileContext.debug(`Verifying the '${labelsString}' theorem...`);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const unqualifiedStatementNode = unqualifiedStatementNodeQuery(theoremNode),
          indicativeConditionalNode = indicativeConditionalNodeQuery(theoremNode);

    if (unqualifiedStatementNode !== null) {
      const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext);

      if (unqualifiedStatementVerified) {
        const statementNode = statementNodeQuery(unqualifiedStatementNode),
              theorem = Theorem.fromLabelsAndStatementNode(labels, statementNode);

        fileContext.addTheorem(theorem);

        theoremVerified = true;
      }
    }

    if (indicativeConditionalNode !== null) {
      const indicativeConditionalVerified = verifyIndicativeConditional(indicativeConditionalNode, proofContext);

      if (indicativeConditionalVerified !== null) {
        const statementNodes = statementNodesQuery(indicativeConditionalNode),
              lastStatementNode = last(statementNodes),
              frontStatementNodes = front(statementNodes),
              consequentStatementNode = lastStatementNode,  ///
              suppositionStatementNodes = frontStatementNodes,  ///
              theorem = Theorem.fromLabelsSuppositionStatementNodesAndConsequentStatementNode(labels, suppositionStatementNodes, consequentStatementNode);

        fileContext.addTheorem(theorem);

        theoremVerified = true;
      }
    }
  }

  if (theoremVerified) {
    fileContext.info(`Verified the '${labelsString}' theorem.`);
  }

  theoremVerified ?
    fileContext.complete(theoremNode) :
      fileContext.halt(theoremNode);

  return theoremVerified;
}
