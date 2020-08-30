"use strict";

const dom = require("occam-dom"),
      necessary = require("necessary");

const verifyStatement = require("../verify/statement");

const { Query } = dom,
      { arrayUtilities } = necessary,
      { first } = arrayUtilities;

const statementNodeQuery = Query.fromExpression("/qualifiedStatement/statement");

function verifyQualifiedStatement(qualifiedStatementNode, fileContext) {
  let qualifiedStatementVerified;

  const statementNodes = statementNodeQuery.execute(qualifiedStatementNode),
        firstStatementNode = first(statementNodes),
        statementNode = firstStatementNode, ///
        statementVerified = verifyStatement(statementNode, fileContext);

  qualifiedStatementVerified = statementVerified; ///

  return qualifiedStatementVerified;
}

module.exports = verifyQualifiedStatement;
