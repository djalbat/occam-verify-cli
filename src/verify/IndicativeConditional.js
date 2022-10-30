"use strict";

import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodesQuery } from "../utilities/query";

const unqualifiedStatementNodesQuery = nodesQuery("/indicativeConditional/unqualifiedStatement");

export default function verifyIndicativeConditional(indicativeConditionalNode, statementNodes, context) {
  let indicativeConditionalVerified;

  context.begin(indicativeConditionalNode);

  const unqualifiedStatementNodes = unqualifiedStatementNodesQuery(indicativeConditionalNode);

  indicativeConditionalVerified = unqualifiedStatementNodes.every((unqualifiedStatementNode) => {
    const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, context);

    if (unqualifiedStatementVerified) {
      return true;
    }
  });

  indicativeConditionalVerified ?
    context.complete(indicativeConditionalNode) :
      context.halt(indicativeConditionalNode);

  return indicativeConditionalVerified;
}
