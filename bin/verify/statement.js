"use strict";

const log = require("../log"),
      nodeUtilities = require("../utilities/node"),
      queryUtilities = require("../utilities/query"),
      verifyTermExpression = require("../verify/termExpression");

const { nodeQuery } = queryUtilities,
      { nodeAsString } = nodeUtilities,
      { verifyExpression } = verifyTermExpression;

const statementExpressionNodeQuery = nodeQuery("/statement/expression!");

function verifyStatement(statementNode, fileContext) {
  let statementVerified = false;

  const statementExpressionNode = statementExpressionNodeQuery(statementNode);

  if (statementExpressionNode !== undefined) {
    const expressionNode = statementExpressionNode, ///
          operator = verifyExpression(expressionNode, fileContext);

    if (operator === undefined) {
      const expressionString = nodeAsString(expressionNode);

      log.error(`The '${expressionString}' expression cannot be verified.`);
    } else {
      const type = operator.getType();

      if (type !== undefined) {
        const noSuperType = true,
              typeString = type.asString(noSuperType),
              expressionString = nodeAsString(expressionNode);

        log.error(`The '${expressionString}' expression cannot be verified because its type '${typeString}' is not undefined.`);
      } else {
        statementVerified = true;
      }
    }
  }

  return statementVerified;
}

module.exports = verifyStatement;
