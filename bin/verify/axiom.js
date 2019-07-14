'use strict';

const queries = require('../queries'),
      verifyStatement = require('../verify/statement');

const { labelNodesQuery, statementNodeQuery, parenthesisedLabelsNodeQuery } = queries;

function verifyAxiom(axiomNode, context, rules) {
  const parenthesisedLabelsNode = parenthesisedLabelsNodeQuery(axiomNode),
        statementNode = statementNodeQuery(axiomNode),
        labelNodes = labelNodesQuery(parenthesisedLabelsNode),
        statement = verifyStatement(statementNode, context, rules);

  debugger
}

module.exports = verifyAxiom;
