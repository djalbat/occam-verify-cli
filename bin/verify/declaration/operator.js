"use strict";

const log = require("../../log"),
      Operator = require("../../operator"),
      nodeUtilities = require("../../utilities/node"),
      queryUtilities = require("../../utilities/query"),
      verifyConstructorOperator = require("../../verify/constructorOperator");

const { nodeQuery } = queryUtilities,
      { verifyExpressionAsOperator } = verifyConstructorOperator,
      { nodeAsString, nameFromNameNameNode } = nodeUtilities;

const expressionNodeQuery = nodeQuery("/*/expression!"),
      typeNameNameNodeQuery = nodeQuery("/*/typeName/@name!");

function verifyOperatorDeclaration(operatorDeclarationNode, fileContext) {
  let operatorDeclarationVerified = false;

  const expressionNode = expressionNodeQuery(operatorDeclarationNode),
        typeNameNameNode = typeNameNameNodeQuery(operatorDeclarationNode),
        typeName = (typeNameNameNode !== undefined) ?
                     nameFromNameNameNode(typeNameNameNode) :
                       undefined;

  let type = undefined,
    typeVerified = true;

  if (typeName !== undefined) {
    type = fileContext.findTypeByTypeName(typeName);

    if (type === undefined) {
      const expressionNodeString = nodeAsString(expressionNode);

      typeVerified = false;

      log.error(`The '${expressionNodeString}' operator's '${typeName}' type is missing.`);
    }
  }

  if (typeVerified) {
    const expressionVerified = verifyExpressionAsOperator(expressionNode, fileContext);

    if (expressionVerified) {
      const operator = Operator.fromExpressionNodeAndType(expressionNode, type),
            operatorString = operator.asString();

      fileContext.addOperator(operator);

      operatorDeclarationVerified = true;

      log.info(`Verified the '${operatorString}' operator.`);
    }
  }

  return operatorDeclarationVerified;
}

module.exports = verifyOperatorDeclaration;
