'use strict';

const Error = require('../error'),
      queries = require('../queries'),
      nodeUtilities = require('../utilities/node'),
      verifyExpression = require('../verify/expression');

const { nodeAsString } = nodeUtilities,
      { expressionNodesQuery } = queries;

function verifyEquality(equalityNode, context, rules) {
  let verified = false;

  const expressionNodes = expressionNodesQuery(equalityNode, context, rules),
        leftExpressionNode = expressionNodes.shift(),
        rightExpressionNode = expressionNodes.shift(),
        leftType = verifyExpression(leftExpressionNode, context, rules),
        rightType = verifyExpression(rightExpressionNode, context, rules);

  if (leftType !== rightType) {
    const node = equalityNode,  ///
          leftTypeName = leftType.getName(),
          rightTypeName = rightType.getName(),
          equalityNodeString = nodeAsString(equalityNode),
          message = `The equality '${equalityNodeString}' cannot be verified because the left hand side has type '${leftTypeName}' whilst the right hand side has type '${rightTypeName}'.`;

    throw new Error(node, message);
  }

  return verified;
}

module.exports = verifyEquality;
