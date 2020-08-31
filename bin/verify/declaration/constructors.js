"use strict";

const log = require("../../log"),
      Constructor = require("../../constructor"),
      nodeUtilities = require("../../utilities/node"),
      queryUtilities = require("../../utilities/query"),
      verifyConstructorOperator = require("../../verify/constructorOperator");

const { nodeQuery, nodesQuery } = queryUtilities,
      { verifyTermAsConstructor } = verifyConstructorOperator,
      { nodeAsString, nameFromNameNameNode } = nodeUtilities;

const termsTermNodesQuery = nodesQuery("/*/terms/term"),
      typeNameNameNodeQuery = nodeQuery("/*/typeName!/@name!");

function verifyConstructorDeclaration(constructorDeclarationNode, fileContext) {
  let constructorDeclarationVerified = false;

  const typeNameNameNode = typeNameNameNodeQuery(constructorDeclarationNode),
        termsTermNodes = termsTermNodesQuery(constructorDeclarationNode),
        termNodes = termsTermNodes, ///
        typeName = nameFromNameNameNode(typeNameNameNode);

  let type = undefined,
      typeVerified = true;

  if (typeName !== undefined) {
    type = fileContext.findTypeByTypeName(typeName);

    if (type === undefined) {
      const termNodeStrings = termNodes.map((termNode) => nodeAsString(termNode)),
            termNodesString = termNodeStrings.join(",");

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

      return termVerified;
    });

    constructorDeclarationVerified = termsVerified;
  }

  return constructorDeclarationVerified;
}

module.exports = verifyConstructorDeclaration;
