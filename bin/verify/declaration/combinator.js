"use strict";

const log = require("../../log"),
      Combinator = require("../../combinator");

const { nodeQuery } = require("../../utilities/query"),
      { verifyStatementAsCombinator } = require("../../verify/constructorCombinator"),
      { nodeAsString, nameFromNameNameNode } = require("../../utilities/node");

const statementNodeQuery = nodeQuery("/*/statement!"),
      typeNameNameNodeQuery = nodeQuery("/*/typeName/@name");

function verifyCombinatorDeclaration(combinatorDeclarationNode, fileContext) {
  let combinatorDeclarationVerified = false;

  const statementNode = statementNodeQuery(combinatorDeclarationNode),
        typeNameNameNode = typeNameNameNodeQuery(combinatorDeclarationNode),
        typeName = (typeNameNameNode !== undefined) ?
                     nameFromNameNameNode(typeNameNameNode) :
                       undefined;

  let type = undefined,
    typeVerified = true;

  if (typeName !== undefined) {
    type = fileContext.findTypeByTypeName(typeName);

    if (type === undefined) {
      const statementNodeString = nodeAsString(statementNode);

      typeVerified = false;

      log.error(`The '${statementNodeString}' combinator's '${typeName}' type is missing.`);
    }
  }

  if (typeVerified) {
    const statementVerified = verifyStatementAsCombinator(statementNode, fileContext);

    if (statementVerified) {
      const combinator = Combinator.fromStatementNodeAndType(statementNode, type),
            combinatorString = combinator.asString();

      fileContext.addCombinator(combinator);

      combinatorDeclarationVerified = true;

      log.info(`Verified the '${combinatorString}' combinator.`);
    }
  }

  return combinatorDeclarationVerified;
}

module.exports = verifyCombinatorDeclaration;
