"use strict";

const verifyStatement = require("../verify/statement");

const { nodeQuery } = require("../utilities/query");

const statementNodeQuery = nodeQuery("/qualifiedStatement/statement!");

function verifyQualifiedStatement(qualifiedStatementNode, fileContext) {
  let qualifiedStatementVerified;

  const statementNode = statementNodeQuery(qualifiedStatementNode),
        statementVerified = verifyStatement(statementNode, fileContext);

  qualifiedStatementVerified = statementVerified; ///

  return qualifiedStatementVerified;
}

module.exports = verifyQualifiedStatement;
