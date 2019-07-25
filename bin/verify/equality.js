'use strict';

const Error = require('../error'),
      queries = require('../miscellaneous/queries'),
      nodeUtilities = require('../utilities/node'),
      verifyExpression = require('../verify/expression');

const { nodeAsString } = nodeUtilities,
      { expressionNodesQuery } = queries;

function verifyEquality(equalityNode, context, rules) {
  const expressionNodes = expressionNodesQuery(equalityNode, context, rules),
        leftExpressionNode = expressionNodes.shift(),
        rightExpressionNode = expressionNodes.shift(),
        leftType = verifyExpression(leftExpressionNode, context, rules),
        rightType = verifyExpression(rightExpressionNode, context, rules),
        leftTypeMatchesRightType = leftType.matchType(rightType),
        rightTypeMatchesLeftType = rightType.matchType(leftType),
        verified = leftTypeMatchesRightType || rightTypeMatchesLeftType;

  if (!verified) {
    const node = equalityNode,  ///
          leftTypeName = leftType.getName(),
          rightTypeName = rightType.getName(),
          equalityNodeString = nodeAsString(equalityNode),
          message = `The equality '${equalityNodeString}' cannot be verified because the left type '${leftTypeName}' and right type '${rightTypeName}' cannot be matched.`;

    throw new Error(node, message);
  }

  return verified;
}

module.exports = verifyEquality;
