"use strict";

const verifyStatement = require("../verify/statement");

const { nodeQuery } = require("../utilities/query");

const statementNodeQuery = nodeQuery("/qualifiedStatement/statement!");

function verifyQualifiedStatement(qualifiedStatementNode, context) {
  let qualifiedStatementVerified;

  const supposition = false,
        statementNode = statementNodeQuery(qualifiedStatementNode),
        statementVerified = verifyStatement(statementNode, supposition, context);

  qualifiedStatementVerified = statementVerified; ///

  return qualifiedStatementVerified;
}

module.exports = verifyQualifiedStatement;
