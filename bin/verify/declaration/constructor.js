"use strict";

const log = require("../../log"),
      Constructor = require("../../constructor");

const { nodeQuery } = require("../../utilities/query"),
      { verifyTermAsConstructor } = require("../../verify/constructorOperator"),
      { nodeAsString, nameFromNameNameNode } = require("../../utilities/node");

const termNodeQuery = nodeQuery("/*/term!"),
      typeNameNameNodeQuery = nodeQuery("/*/typeName/@name!");

function verifyConstructorDeclaration(constructorDeclarationNode, fileContext) {
  let constructorDeclarationVerified = false;

  const termNode = termNodeQuery(constructorDeclarationNode),
        typeNameNameNode = typeNameNameNodeQuery(constructorDeclarationNode),
        typeName = (typeNameNameNode !== undefined) ?
                     nameFromNameNameNode(typeNameNameNode) :
                       undefined;

  let type = undefined,
      typeVerified = true;

  if (typeName !== undefined) {
    type = fileContext.findTypeByTypeName(typeName);

    if (type === undefined) {
      const termNodeString = nodeAsString(termNode);

      typeVerified = false;

      log.error(`The '${termNodeString}' constructor's '${typeName}' type is missing.`);
    }
  }

  if (typeVerified) {
    const termVerified = verifyTermAsConstructor(termNode, fileContext);

    if (termVerified) {
      const constructor = Constructor.fromTermNodeAndType(termNode, type),
            constructorString = constructor.asString();

      fileContext.addConstructor(constructor);

      constructorDeclarationVerified = true;

      log.info(`Verified the '${constructorString}' constructor.`);
    }
  }

  return constructorDeclarationVerified;
}

module.exports = verifyConstructorDeclaration;
