"use strict";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

export default function verifyUnqualifiedStatement(unqualifiedStatementNode, context = this) {
  let unqualifiedStatementVerified = false;

  context.begin(unqualifiedStatementNode);

  const statementNode = statementNodeQuery(unqualifiedStatementNode);

  if (statementNode !== null) {
    const statementVerified = context.verifyStatement(statementNode);

    if (statementVerified) {
      context.addStatementNode(statementNode);

      unqualifiedStatementVerified = true;
    }
  }

  unqualifiedStatementVerified ?
    context.complete(unqualifiedStatementNode) :
      context.halt(unqualifiedStatementNode);

  return unqualifiedStatementVerified;
}
