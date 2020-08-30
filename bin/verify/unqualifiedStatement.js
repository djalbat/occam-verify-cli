"use strict";

const dom = require("occam-dom"),
      necessary = require("necessary");

const verifyStatement = require("../verify/statement");

const { Query } = dom,
      { arrayUtilities } = necessary,
      { first } = arrayUtilities;

const statementNodeQuery = Query.fromExpression("/unqualifiedStatement/statement");

function verifyUnqualifiedStatement(unqualifiedStatementNode, fileContext) {
  let unqualifiedStatementVerified;

  const statementNodes = statementNodeQuery.execute(unqualifiedStatementNode),
        firstStatementNode = first(statementNodes),
        statementNode = firstStatementNode, ///
        statementVerified = verifyStatement(statementNode, fileContext);

  unqualifiedStatementVerified = statementVerified; ///

  return unqualifiedStatementVerified;
}

module.exports = verifyUnqualifiedStatement;
