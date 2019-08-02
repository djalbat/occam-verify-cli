'use strict';

const queries = require('../miscellaneous/queries'),
      verifyStatement = require('../verify/statement');

const { statementNodeQuery } = queries;

function verifyUnqualifiedStatement(unqualifiedStatementNode, context, rules) {
  const statementNode = statementNodeQuery(unqualifiedStatementNode),
        verified = verifyStatement(statementNode, context, rules);

  return verified;
}

module.exports = verifyUnqualifiedStatement;
