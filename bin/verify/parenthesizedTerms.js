'use strict';

const queries = require('../queries'),
      verifyTerm = require('../verify/term');

const { termNodesQuery } = queries;

function verifyParenthesizedTerms(parenthesisedTermsNode, context) {
  const termNodes = termNodesQuery(parenthesisedTermsNode),
        terms = termNodes.map((termNode) => {
          const term = verifyTerm(termNode, context);

          return term;
        });

  return terms;
}

module.exports = verifyParenthesizedTerms;
