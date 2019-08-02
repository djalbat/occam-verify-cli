'use strict';

const queries = require('../miscellaneous/queries'),
      verifyStatement = require('../verify/statement');

const { statementNodeQuery } = queries;

function verifyQualifiedStatement(qualifiedStatementNode, context, rules) {
  const statementNode = statementNodeQuery(qualifiedStatementNode),
        verified = verifyStatement(statementNode, context, rules);

  return verified;
}

module.exports = verifyQualifiedStatement;
