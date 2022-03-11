"use strict";

const log = require("../../log"),
      Combinator = require("../../combinator");

const { nodeQuery } = require("../../utilities/query"),
      { verifyExpressionAsCombinator } = require("../../verify/constructorCombinator"),
      { nodeAsString, nameFromNameNameNode } = require("../../utilities/node");

const expressionNodeQuery = nodeQuery("/*/expression!"),
      typeNameNameNodeQuery = nodeQuery("/*/typeName/@name!");

function verifyCombinatorDeclaration(combinatorDeclarationNode, fileContext) {
  let combinatorDeclarationVerified = false;

  const expressionNode = expressionNodeQuery(combinatorDeclarationNode),
        typeNameNameNode = typeNameNameNodeQuery(combinatorDeclarationNode),
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

      log.error(`The '${expressionNodeString}' combinator's '${typeName}' type is missing.`);
    }
  }

  if (typeVerified) {
    const expressionVerified = verifyExpressionAsCombinator(expressionNode, fileContext);

    if (expressionVerified) {
      const combinator = Combinator.fromExpressionNodeAndType(expressionNode, type),
            combinatorString = combinator.asString();

      fileContext.addCombinator(combinator);

      combinatorDeclarationVerified = true;

      log.info(`Verified the '${combinatorString}' combinator.`);
    }
  }

  return combinatorDeclarationVerified;
}

module.exports = verifyCombinatorDeclaration;
