"use strict";

const log = require("../../log"),
      Operator = require("../../operator");

const { nodeQuery, nodesQuery } = require("../../utilities/query"),
      { verifyExpressionAsOperator } = require("../../verify/constructorOperator"),
      { nodeAsString, nameFromNameNameNode } = require("../../utilities/node");

const typeNameNameNodeQuery = nodeQuery("/*/typeName!/@name!"),
      expressionsExpressionNodesQuery = nodesQuery("/*/expressions/expression");

function verifyOperatorDeclaration(operatorDeclarationNode, fileContext) {
  let operatorDeclarationVerified = false;

  const typeNameNameNode = typeNameNameNodeQuery(operatorDeclarationNode),
        expressionsExpressionNodes = expressionsExpressionNodesQuery(operatorDeclarationNode),
        expressionNodes = expressionsExpressionNodes, ///
        typeName = nameFromNameNameNode(typeNameNameNode);

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
