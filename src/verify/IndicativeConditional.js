"use strict";

import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodesQuery } from "../utilities/query";

const unqualifiedStatementNodesQuery = nodesQuery("/indicativeConditional/unqualifiedStatement");

export default function verifyIndicativeConditional(indicativeConditionalNode, statementNodes, proofContext) {
  let indicativeConditionalVerified;

  proofContext.begin(indicativeConditionalNode);

  const unqualifiedStatementNodes = unqualifiedStatementNodesQuery(indicativeConditionalNode);

  indicativeConditionalVerified = unqualifiedStatementNodes.every((unqualifiedStatementNode) => {
    const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext);

    if (unqualifiedStatementVerified) {
      return true;
    }
  });

  indicativeConditionalVerified ?
    proofContext.complete(indicativeConditionalNode) :
      proofContext.halt(indicativeConditionalNode);

  return indicativeConditionalVerified;
}
