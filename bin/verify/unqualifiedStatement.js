'use strict';

const queries = require('../miscellaneous/queries'),
      verifyStatement = require('../verify/statement');

const { statementNodeQuery } = queries;

function verifyUnqualifiedStatement(unqualifiedStatementNode, context, rules) {
  const statementNode = statementNodeQuery(unqualifiedStatementNode);

  verifyStatement(statementNode, context, rules);
}

module.exports = verifyUnqualifiedStatement;
