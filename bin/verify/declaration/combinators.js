"use strict";

const log = require("../../log"),
      Combinator = require("../../combinator");

const { nodeQuery, nodesQuery } = require("../../utilities/query"),
      { verifyExpressionAsCombinator } = require("../../verify/constructorCombinator"),
      { nodeAsString, nameFromNameNameNode } = require("../../utilities/node");

const typeNameNameNodeQuery = nodeQuery("/*/typeName!/@name"),
      expressionsExpressionNodesQuery = nodesQuery("/*/expressions/expression");

function verifyCombinatorDeclaration(combinatorDeclarationNode, fileContext) {
  let combinatorDeclarationVerified = false;

  const typeNameNameNode = typeNameNameNodeQuery(combinatorDeclarationNode),
        expressionsExpressionNodes = expressionsExpressionNodesQuery(combinatorDeclarationNode),
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

      log.error(`The '${expressionNodesString}' combinators' '${typeName}' type is missing.`);
    }
  }

  if (typeVerified) {
    const expressionsVerified = expressionNodes.every((expressionNode) => {
      const expressionVerified = verifyExpressionAsCombinator(expressionNode, fileContext),
            combinator = Combinator.fromExpressionNodeAndType(expressionNode, type),
            combinatorString = combinator.asString();

      fileContext.addCombinator(combinator);

      log.info(`Verified the '${combinatorString}' combinator.`);

      return expressionVerified;
    });

    combinatorDeclarationVerified = expressionsVerified;
  }

  return combinatorDeclarationVerified;
}

module.exports = verifyCombinatorDeclaration;
