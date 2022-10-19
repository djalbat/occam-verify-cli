"use strict";

import verifyStatement from "../../verify/statement";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

export default function verifyUnqualifiedStatement(unqualifiedStatementNode, context) {
  let unqualifiedStatementVerified = false;

  const statementNode = statementNodeQuery(unqualifiedStatementNode);

  if (statementNode !== null) {
    const statementVerified = verifyStatement(statementNode, context);

    if (statementVerified) {
      context.addStatementNode(statementNode);

      unqualifiedStatementVerified = true;
    }
  }

  return unqualifiedStatementVerified;
}
