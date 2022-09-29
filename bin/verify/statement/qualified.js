"use strict";

const verifyStatement = require("../../verify/statement");

const { nodeQuery } = require("../../utilities/query");

const statementNodeQuery = nodeQuery("/qualifiedStatement/statement!");

function verifyQualifiedStatement(qualifiedStatementNode, context) {
  const statementNode = statementNodeQuery(qualifiedStatementNode),
        statementVerified = verifyStatement(statementNode, context),
        qualifiedStatementVerified = statementVerified; ///

  return qualifiedStatementVerified;
}

module.exports = verifyQualifiedStatement;
