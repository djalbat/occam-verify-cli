"use strict";

const Error = require("../../error"),
      queries = require("../../miscellaneous/queries"),
      Operator = require("../../operator"),
      nodeUtilities = require("../../utilities/node"),
      verifyTypeName = require("../../verify/typeName"),
      verifyConstructorOperator = require("../../verify/constructorOperator");

const { nodeAsString } = nodeUtilities,
      { verifyExpressionAsOperator } = verifyConstructorOperator,
      { expressionNodeQuery, typeNameTerminalNodeQuery } = queries;

function verifyOperatorDeclaration(operatorDeclarationNode, fileContext) {
  let type = undefined;

  const expressionNode = expressionNodeQuery(operatorDeclarationNode),
        typeNameTerminalNode = typeNameTerminalNodeQuery(operatorDeclarationNode);

  if (typeNameTerminalNode !== undefined) {
    type = verifyTypeName(typeNameTerminalNode, fileContext);

    if (type === undefined) {
      const node = expressionNode,  ///
            expressionString = nodeAsString(expressionNode),
            message = `The operator '${expressionString}' cannot be verified because the type cannot be found.`;

      throw new Error(node, message);
    }
  }

  const verified = verifyExpressionAsOperator(expressionNode, fileContext);

  if (!verified) {
    const node = expressionNode,  ///
          expressionString = nodeAsString(expressionNode),
          message = `The operator '${expressionString}' cannot be verified.`;

    throw new Error(node, message);
  }

  const operator = Operator.fromExpressionNodeAndType(expressionNode, type),
        operatorString = operator.asString();

  fileContext.addOperator(operator);

  console.log(`Added the '${operatorString}' operator to the context.`);
}

module.exports = verifyOperatorDeclaration;
