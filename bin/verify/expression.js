'use strict';

const queries = require('../queries'),
      verifyTerm = require('../verify/term');

const { termNodeQuery } = queries;

function verifyExpression(expressionNode, context, rules) {
  const termNode = termNodeQuery(expressionNode),
        term = verifyTerm(termNode, context, rules);

  debugger
}

module.exports = verifyExpression;
