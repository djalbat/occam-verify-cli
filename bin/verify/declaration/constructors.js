"use strict";

const queries = require("../../miscellaneous/queries"),
      Constructor = require("../../constructor"),
      verifyTypeName = require("../../verify/typeName"),
      verifyTermAsConstructor = require("../../verify/termAsConstructor");

const { termNodesQuery, typeNameTerminalNodeQuery } = queries;

function verifyConstructorsDeclaration(constructorDeclarationNode, context, ruleMap) {
  const typeNameTerminalNode = typeNameTerminalNodeQuery(constructorDeclarationNode),
        termNodes = termNodesQuery(constructorDeclarationNode),
        type = verifyTypeName(typeNameTerminalNode, context, ruleMap);

  termNodes.forEach((termNode) => {
    verifyTermAsConstructor(termNode, context, ruleMap);

    const constructor = Constructor.fromTermNodeAndType(termNode, type);

    context.addConstructor(constructor);
  });
}

module.exports = verifyConstructorsDeclaration;
