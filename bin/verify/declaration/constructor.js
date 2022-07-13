"use strict";

const log = require("../../log"),
      Constructor = require("../../constructor"),
      verifyTermAsConstructor = require("../../verify/termAsConstructor");

const { nodeQuery } = require("../../utilities/query"),
      { nodeAsString, nameFromNameNode } = require("../../utilities/node");

const nameNodeQuery = nodeQuery("/constructorDeclaration/@name"),
      termNodeQuery = nodeQuery("/constructorDeclaration/term!");

function verifyConstructorDeclaration(constructorDeclarationNode, fileContext) {
  let constructorDeclarationVerified = false;

  const nameNode = nameNodeQuery(constructorDeclarationNode),
        termNode = termNodeQuery(constructorDeclarationNode),
        name = nameFromNameNode(nameNode),
        typeName = name;  ///

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

      log.info(`Verified the '${constructorString}' constructor.`);

      constructorDeclarationVerified = true;
    }
  }

  return constructorDeclarationVerified;
}

module.exports = verifyConstructorDeclaration;
