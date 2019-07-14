'use strict';

const queries = require('../queries'),
      verifyEquality = require('../verify/equality');

const { equalityNodeQuery } = queries;

function verifyStatement(statementNode, context, rules) {
  const equalityNode = equalityNodeQuery(statementNode);

  if (false) {
    ///
  } else if (equalityNode !== undefined) {
    verifyEquality(equalityNode, context, rules);
  }
}

module.exports = verifyStatement;
