'use strict';

const queries = require('../miscellaneous/queries'),
      verifyUtilities = require('../utilities/verify');

const { verifyStatement } = verifyUtilities,
      { qualificationNodeQuery, statementNodeQuery } = queries;

function verifyQualifiedStatement(qualifiedStatementNode, context, rules) {
  const statementNode = statementNodeQuery(qualifiedStatementNode);

  verifyStatement(statementNode, context, rules);

  const qualificationNode = qualificationNodeQuery(qualifiedStatementNode);

  if (qualificationNode !== undefined) {
    debugger
  }
}

module.exports = verifyQualifiedStatement;
