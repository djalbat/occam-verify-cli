"use strict";

const verifyStatement = require("../verify/statement");

const { nodeQuery } = require("../utilities/query");

const statementNodeQuery = nodeQuery("/*/statement!");

function verifyUnqualifiedStatement(unqualifiedStatementNode, fileContext) {
  let unqualifiedStatementVerified;

  const statementNode = statementNodeQuery(unqualifiedStatementNode),
        statementVerified = verifyStatement(statementNode, fileContext);

  unqualifiedStatementVerified = statementVerified; ///

  return unqualifiedStatementVerified;
}

module.exports = verifyUnqualifiedStatement;
