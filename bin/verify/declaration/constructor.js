"use strict";

const dom = require("occam-dom"),
      necessary = require("necessary");

const log = require("../../log"),
      Constructor = require("../../constructor"),
      nodeUtilities = require("../../utilities/node"),
      verifyConstructorOperator = require("../../verify/constructorOperator");

const { Query } = dom,
      { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { verifyTermAsConstructor } = verifyConstructorOperator,
      { nodeAsString, nameFromNameNameNode } = nodeUtilities;

const termNodesQuery = Query.fromExpression("/*/term"),
      typeNameNameNodesQuery = Query.fromExpression("/*/typeName/@name");

function verifyConstructorDeclaration(constructorDeclarationNode, fileContext) {
  let constructorDeclarationVerified = false;

  const typeNameNameNodes = typeNameNameNodesQuery.execute(constructorDeclarationNode),
        termNodes = termNodesQuery.execute(constructorDeclarationNode),
        typeNames = typeNameNameNodes.map((typeNameNameNode) => nameFromNameNameNode(typeNameNameNode)),
        firstTermNode = first(termNodes),
        firstTypeName = first(typeNames),
        termNode = firstTermNode, ///
        typeName = firstTypeName; ///

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
