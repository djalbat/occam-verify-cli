"use strict";

const log = require("../../log"),
      Constructor = require("../../constructor"),
      verifyTermAsConstructor = require("../../verify/termAsConstructor");

const { nodesAsString } = require("../../utilities/nodes"),
      { nameFromNameNode } = require("../../utilities/node"),
      { nodeQuery, nodesQuery } = require("../../utilities/query");

const nameNodeQuery = nodeQuery("/constructorsDeclaration/@name!"),
      termNodesQuery = nodesQuery("/constructorsDeclaration/term");

function verifyConstructorDeclaration(constructorDeclarationNode, fileContext) {
  let constructorDeclarationVerified = false;

  const nameNode = nameNodeQuery(constructorDeclarationNode),
        termNodes = termNodesQuery(constructorDeclarationNode),
        name = nameFromNameNode(nameNode),
        typeName = name;  ///

  let type = undefined,
      typeVerified = true;

  if (typeName !== undefined) {
    type = fileContext.findTypeByTypeName(typeName);

    if (type === undefined) {
      const termNodesString = nodesAsString(termNodes);

      typeVerified = false;

      log.error(`The '${termNodesString}' constructors' '${typeName}' type is missing.`);
    }
  }

  if (typeVerified) {
    const termsVerified = termNodes.every((termNode) => {
      const termVerified = verifyTermAsConstructor(termNode, fileContext),
            constructor = Constructor.fromTermNodeAndType(termNode, type),
            constructorString = constructor.asString();

      fileContext.addConstructor(constructor);

      log.info(`Verified the '${constructorString}' constructor.`);

      if (termVerified) {
        return true;
      }
    });

    constructorDeclarationVerified = termsVerified; ///
  }

  return constructorDeclarationVerified;
}

module.exports = verifyConstructorDeclaration;
