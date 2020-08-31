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

const termNodesQuery = Query.fromExpression("/*/terms/term"),
      typeNameNameNodesQuery = Query.fromExpression("/*/typeName/@name!");

function verifyConstructorDeclaration(constructorDeclarationNode, fileContext) {
  let constructorDeclarationVerified = false;

  const typeNameNameNodes = typeNameNameNodesQuery.execute(constructorDeclarationNode),
        termNodes = termNodesQuery.execute(constructorDeclarationNode),
        typeNames = typeNameNameNodes.map((typeNameNameNode) => nameFromNameNameNode(typeNameNameNode)),
        firstTypeName = first(typeNames),
        typeName = firstTypeName; ///

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
