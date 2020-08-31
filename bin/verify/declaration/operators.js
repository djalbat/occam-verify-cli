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
      { nodeAsString, nameFromNameNameNode } = nodeUtilities;

const expressionNodesQuery = Query.fromExpression("/*/expressions/expression"),
      typeNameNameNodesQuery = Query.fromExpression("/*/typeName/@name!");

function verifyOperatorDeclaration(operatorDeclarationNode, fileContext) {
  let operatorDeclarationVerified = false;

  const typeNameNameNodes = typeNameNameNodesQuery.execute(operatorDeclarationNode),
        expressionNodes = expressionNodesQuery.execute(operatorDeclarationNode),
        typeNames = typeNameNameNodes.map((typeNameNameNode) => nameFromNameNameNode(typeNameNameNode)),
        firstTypeName = first(typeNames),
        typeName = firstTypeName; ///

  let type = undefined,
      typeVerified = true;

  if (typeName !== undefined) {
    type = fileContext.findTypeByTypeName(typeName);

    if (type === undefined) {
      const expressionNodeStrings = expressionNodes.map((expressionNode) => nodeAsString(expressionNode)),
            expressionNodesString = expressionNodeStrings.join(",");

      typeVerified = false;

      log.error(`The '${expressionNodesString}' operators' '${typeName}' type is missing.`);
    }
  }

  if (typeVerified) {
    const expressionsVerified = expressionNodes.every((expressionNode) => {
      const expressionVerified = verifyExpressionAsOperator(expressionNode, fileContext),
            operator = Operator.fromExpressionNodeAndType(expressionNode, type),
            operatorString = operator.asString();

      fileContext.addOperator(operator);

      log.info(`Verified the '${operatorString}' operator.`);

      return expressionVerified;
    });

    operatorDeclarationVerified = expressionsVerified;
  }

  return operatorDeclarationVerified;
}

module.exports = verifyOperatorDeclaration;
