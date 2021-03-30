"use strict";

const log = require("../log");

const { nodeQuery } = require("../utilities/query"),
      { nodeAsString } = require("../utilities/node"),
      { verifyExpression } = require("../verify/termExpression");

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
