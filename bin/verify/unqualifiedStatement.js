"use strict";

const queries = require("../miscellaneous/queries"),
      verifyUtilities = require("../utilities/verify");

const { verifyStatement } = verifyUtilities,
      { statementNodeQuery } = queries;

function verifyUnqualifiedStatement(unqualifiedStatementNode, context, ruleMap) {
  const statementNode = statementNodeQuery(unqualifiedStatementNode);

  verifyStatement(statementNode, context, ruleMap);
}

module.exports = verifyUnqualifiedStatement;
