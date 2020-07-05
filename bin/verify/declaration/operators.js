"use strict";

const necessary = require("necessary");

const Error = require("../../error"),
      queries = require("../../miscellaneous/queries"),
      Operator = require("../../operator"),
      nodeUtilities = require("../../utilities/node"),
      verifyTypeName = require("../../verify/typeName"),
      verifyConstructorOrOperator = require("../../verify/constructorOrOperator");

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { nodeAsString } = nodeUtilities,
      { verifyExpressionAsOperator } = verifyConstructorOrOperator,
      { expressionNodesQuery, typeNameTerminalNodeQuery } = queries;

function verifyOperatorsDeclaration(operatorDeclarationNode, fileContext) {
  let type = undefined;

  const expressionNodes = expressionNodesQuery(operatorDeclarationNode),
        firstTermNode = first(expressionNodes),
        expressionNode = firstTermNode, ///
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

  expressionNodes.forEach((expressionNode) => {
    const verified = verifyExpressionAsOperator(expressionNode, fileContext);

    if (!verified) {
      const node = expressionNode,  ///
            expressionString = nodeAsString(expressionNode),
            message = `The operator '${expressionString}' cannot be verified.`;

      throw new Error(node, message);
    }

    const operator = Operator.fromTermNodeAndType(expressionNode, type),
          operatorString = operator.asString();

    fileContext.addOperator(operator);

    console.log(`Added the '${operatorString}' operator to the context.`);
  });
}

module.exports = verifyOperatorsDeclaration;
