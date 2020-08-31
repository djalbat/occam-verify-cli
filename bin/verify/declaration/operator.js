"use strict";

const dom = require("occam-dom"),
      necessary = require("necessary");

const log = require("../../log"),
      Operator = require("../../operator"),
      nodeUtilities = require("../../utilities/node"),
      verifyConstructorOperator = require("../../verify/constructorOperator");

const { Query } = dom,
      { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { verifyExpressionAsOperator } = verifyConstructorOperator,
      { nodeAsString, nameFromNameNode } = nodeUtilities;

const expressionNodesQuery = Query.fromExpression("/*/expression"),
      typeNameNameNodesQuery = Query.fromExpression("/*/typeName/@name");

function verifyOperatorDeclaration(operatorDeclarationNode, fileContext) {
  let operatorDeclarationVerified = false;

  const typeNameNameNodes = typeNameNameNodesQuery.execute(operatorDeclarationNode),
        expressionNodes = expressionNodesQuery.execute(operatorDeclarationNode),
        typeNames = typeNameNameNodes.map((typeNameNameNode) => nameFromNameNode(typeNameNameNode)),
        firstExpressionNode = first(expressionNodes),
        firstTypeName = first(typeNames),
        expressionNode = firstExpressionNode, ///
        typeName = firstTypeName; ///

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
