"use strict";

const queryUtilities = require("../utilities/query"),
      verifyStatement = require("../verify/statement");

const { nodeQuery } = queryUtilities;

const statementNodeQuery = nodeQuery("/*/statement!");

function verifyQualifiedStatement(qualifiedStatementNode, fileContext) {
  let qualifiedStatementVerified;

  const statementNode = statementNodeQuery(qualifiedStatementNode),
        statementVerified = verifyStatement(statementNode, fileContext);

  qualifiedStatementVerified = statementVerified; ///

  return qualifiedStatementVerified;
}

module.exports = verifyQualifiedStatement;
