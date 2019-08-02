'use strict';

const queries = require('../miscellaneous/queries'),
      verifyQualifiedStatement = require('../verify/qualifiedStatement'),
      verifyUnqualifiedStatement = require('../verify/unqualifiedStatement');

const { qualifiedStatementNodeQuery, unqualifiedStatementNodeQuery } = queries;

function verifyIndicativeConditional(indicativeConditionalNode, context, rules) {
  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(indicativeConditionalNode);

  verifyUnqualifiedStatement(unqualifiedStatementNode, context, rules);

  const qualifiedStatementNode = qualifiedStatementNodeQuery(indicativeConditionalNode);

  verifyQualifiedStatement(qualifiedStatementNode, context, rules);

  const verified = true; ///

  return verified;
}

module.exports = verifyIndicativeConditional;
