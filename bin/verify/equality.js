"use strict";

const { arrayUtilities } = require("necessary");

const log = require("../log"),
      verifyExpression = require("../verify/expression");

const { nodeQuery } = require("../utilities/query");

const firstExpressionNodeQuery = nodeQuery("/equality/expression[0]"),
      secondExpressionNodeQuery = nodeQuery("/equality/expression[1]");

const { first, second } = arrayUtilities;

function verifyEquality(equalityNode, fileContext) {
  let equalityVerified;

  const types = [],
        firstExpressionNode = firstExpressionNodeQuery(equalityNode),
        secondExpressionNode = secondExpressionNodeQuery(equalityNode),
        firstExpressionVerified = verifyExpression(firstExpressionNode, types, fileContext),
        secondExpressionVerified = verifyExpression(secondExpressionNode, types, fileContext);

  if (!firstExpressionVerified || !secondExpressionVerified) {
    equalityVerified = false;
  } else {
    const firstType = first(types),
          secondType = second(types);

    debugger

    equalityVerified = true;
  }

  return equalityVerified;
}

module.exports = verifyEquality;
