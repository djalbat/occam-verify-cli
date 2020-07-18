"use strict";

const necessary = require("necessary");

const Error = require("../error"),
      queries = require("../miscellaneous/queries"),
      nodeUtilities = require("../utilities/node"),
      verifyTermExpression = require("../verify/termExpression");

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { nodeAsString } = nodeUtilities,
      { verifyExpression } = verifyTermExpression,
      { statementExpressionNodesQuery } = queries;

function verifyStatement(statementNode, fileContext) {
  const statementExpressionNodes = statementExpressionNodesQuery(statementNode),
        statementExpressionNodesLength = statementExpressionNodes.length;

  if (statementExpressionNodesLength === 1) {
    const firstStatementExpressionNode = first(statementExpressionNodes),
          expressionNode = firstStatementExpressionNode,  ///
          operator = verifyExpression(expressionNode, fileContext);

    if (operator === undefined) {
      const node = expressionNode,  ///
            expressionString = nodeAsString(expressionNode),
            message = `The statement's sub-expression '${expressionString}' cannot be verified.`;

      throw new Error(node, message);
    }

    const type = operator.getType();

    if (type !== undefined) {
      const node = expressionNode,  ///
            noSuperType = true,
            typeString = type.asString(noSuperType),
            expressionString = nodeAsString(expressionNode),
            message = `The statement's sub-expression '${expressionString}' cannot be verified because its type '${typeString}' should be undefined.`;

      throw new Error(node, message);
    }
  } else {
    debugger
  }
}

module.exports = verifyStatement;
