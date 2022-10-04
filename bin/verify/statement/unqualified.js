"use strict";

const verifyStatement = require("../../verify/statement");

const { nodeQuery } = require("../../utilities/query");

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

function verifyUnqualifiedStatement(unqualifiedStatementNode, context) {
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

module.exports = verifyUnqualifiedStatement;