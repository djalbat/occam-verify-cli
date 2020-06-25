"use strict";

const queries = require("../miscellaneous/queries"),
      verifyUtilities = require("../utilities/verify");

const { verifyStatement } = verifyUtilities,
      { qualificationNodeQuery, statementNodeQuery } = queries;

function verifyQualifiedStatement(qualifiedStatementNode, fileContext) {
  const statementNode = statementNodeQuery(qualifiedStatementNode);

  verifyStatement(statementNode, fileContext);

  const qualificationNode = qualificationNodeQuery(qualifiedStatementNode);

  if (qualificationNode !== undefined) {
    debugger
  }
}

module.exports = verifyQualifiedStatement;
