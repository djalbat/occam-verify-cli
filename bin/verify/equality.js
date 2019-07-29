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
        leftTypeEqualToOrSubTypeOfRightType = leftType.isEqualToOrSubTypeOf(rightType),
        rightTypeEqualToOrSubTypeOfLeftType = rightType.isEqualToOrSubTypeOf(leftType),
        verified = leftTypeEqualToOrSubTypeOfRightType || rightTypeEqualToOrSubTypeOfLeftType;

  if (!verified) {
    const node = equalityNode,  ///
          leftTypeName = leftType.getName(),
          rightTypeName = rightType.getName(),
          equalityString = nodeAsString(equalityNode),
          message = `The equality '${equalityString}' cannot be verified because the types '${leftTypeName}' and '${rightTypeName}' aren't equal nor one a sub-type of the other.`;

    throw new Error(node, message);
  }

  return verified;
}

module.exports = verifyEquality;
