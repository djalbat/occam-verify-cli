'use strict';

const queries = require('../queries'),
      verifyEquality = require('../verify/equality');

const { equalityNodeQuery } = queries;

function verifyStatement(statementNode, context, rules) {
  let verified = false;

  const equalityNode = equalityNodeQuery(statementNode);

  if (false) {
    ///
  } else if (equalityNode !== undefined) {
    verified = verifyEquality(equalityNode, context, rules);
  } else {
    debugger
  }

  return verified;
}

module.exports = verifyStatement;
