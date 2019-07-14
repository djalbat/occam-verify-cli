'use strict';

const queries = require('../queries'),
      verifyExpression = require('../verify/expression');

const { expressionNodesQuery } = queries;

function verifyEquality(equalityNode, context, rules) {
  const expressionNodes = expressionNodesQuery(equalityNode, context, rules),
        leftExpressionNode = expressionNodes.shift(),
        rightExpressionNode = expressionNodes.shift();

  verifyExpression(leftExpressionNode, context, rules);
}

module.exports = verifyEquality;
