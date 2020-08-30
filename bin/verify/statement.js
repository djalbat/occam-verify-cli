"use strict";

const dom = require("occam-dom"),
      necessary = require("necessary");

const log = require("../log"),
      nodeUtilities = require("../utilities/node"),
      verifyTermExpression = require("../verify/termExpression");

const { Query } = dom,
      { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { nodeAsString } = nodeUtilities,
      { verifyExpression } = verifyTermExpression;

const statementExpressionNodesQuery = Query.fromExpression("/statement/expression!");

function verifyStatement(statementNode, fileContext) {
  let statementVerified = false;

  const statementExpressionNodes = statementExpressionNodesQuery.execute(statementNode),
        firstStatementExpressionNode = first(statementExpressionNodes),
        expressionNode = firstStatementExpressionNode;  ///

  if (expressionNode !== undefined) {
    const operator = verifyExpression(expressionNode, fileContext);

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
