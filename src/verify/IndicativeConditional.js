"use strict";

import { nodesQuery } from "../utilities/query";

const unqualifiedStatementNodesQuery = nodesQuery("/indicativeConditional/unqualifiedStatement");

export default function verifyIndicativeConditional(indicativeConditionalNode, statementNodes, context = this) {
  let indicativeConditionalVerified;

  context.begin(indicativeConditionalNode);

  const unqualifiedStatementNodes = unqualifiedStatementNodesQuery(indicativeConditionalNode);

  indicativeConditionalVerified = unqualifiedStatementNodes.every((unqualifiedStatementNode) => {
    const unqualifiedStatementVerified = context.verifyUnqualifiedStatement(unqualifiedStatementNode);

    if (unqualifiedStatementVerified) {
      return true;
    }
  });

  indicativeConditionalVerified ?
    context.complete(indicativeConditionalNode) :
      context.halt(indicativeConditionalNode);

  return indicativeConditionalVerified;
}
