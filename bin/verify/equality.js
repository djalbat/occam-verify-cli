'use strict';

const queries = require('../queries'),
      verifyExpression = require('../verify/expression');

const { expressionNodesQuery } = queries;

function verifyEquality(equalityNode, context, rules) {
  let verified = false;

  const expressionNodes = expressionNodesQuery(equalityNode, context, rules),
        leftExpressionNode = expressionNodes.shift(),
        leftType = verifyExpression(leftExpressionNode, context, rules);

  debugger
}

module.exports = verifyEquality;
