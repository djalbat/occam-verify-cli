'use strict';

const queries = require('../miscellaneous/queries'),
      verifyStatement = require('../verify/statement');

const { qualificationNodeQuery, statementNodeQuery } = queries;

function verifyQualifiedStatement(qualifiedStatementNode, context, rules) {
  const statementNode = statementNodeQuery(qualifiedStatementNode);

  verifyStatement(statementNode, context, rules);

  const qualificationNode = qualificationNodeQuery(qualifiedStatementNode);

  if (qualificationNode !== undefined) {
    debugger
  }
}

module.exports = verifyQualifiedStatement;
