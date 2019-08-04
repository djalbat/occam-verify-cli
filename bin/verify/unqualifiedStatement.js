'use strict';

const queries = require('../miscellaneous/queries'),
      verifyUtilities = require('../utilities/verify');

const { verifyStatement } = verifyUtilities,
      { statementNodeQuery } = queries;

function verifyUnqualifiedStatement(unqualifiedStatementNode, context, rules) {
  const statementNode = statementNodeQuery(unqualifiedStatementNode);

  verifyStatement(statementNode, context, rules);
}

module.exports = verifyUnqualifiedStatement;
