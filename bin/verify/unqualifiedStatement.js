"use strict";

const queries = require("../miscellaneous/queries"),
      verifyStatement = require("../verify/statement");

const { statementNodeQuery } = queries;

function verifyUnqualifiedStatement(unqualifiedStatementNode, fileContext) {
  const statementNode = statementNodeQuery(unqualifiedStatementNode);

  verifyStatement(statementNode, fileContext);
}

module.exports = verifyUnqualifiedStatement;
