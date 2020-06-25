"use strict";

const queries = require("../miscellaneous/queries"),
      verifyUtilities = require("../utilities/verify");

const { verifyStatement } = verifyUtilities,
      { statementNodeQuery } = queries;

function verifyUnqualifiedStatement(unqualifiedStatementNode, fileContext) {
  const statementNode = statementNodeQuery(unqualifiedStatementNode);

  verifyStatement(statementNode, fileContext);
}

module.exports = verifyUnqualifiedStatement;
