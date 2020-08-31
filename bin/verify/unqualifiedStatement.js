"use strict";

const queryUtilities = require("../utilities/query"),
      verifyStatement = require("../verify/statement");

const { nodeQuery } = queryUtilities;

const statementNodeQuery = nodeQuery("/*/statement!");

function verifyUnqualifiedStatement(unqualifiedStatementNode, fileContext) {
  let unqualifiedStatementVerified;

  const statementNode = statementNodeQuery(unqualifiedStatementNode),
        statementVerified = verifyStatement(statementNode, fileContext);

  unqualifiedStatementVerified = statementVerified; ///

  return unqualifiedStatementVerified;
}

module.exports = verifyUnqualifiedStatement;
