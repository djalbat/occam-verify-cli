"use strict";

const queries = require("../../miscellaneous/queries"),
      Constructor = require("../../constructor"),
			verifyTypeName = require("../../verify/typeName"),
      verifyTermAsConstructor = require("../../verify/termAsConstructor");

const { termNodeQuery, typeNameTerminalNodeQuery } = queries;

function verifyConstructorDeclaration(constructorDeclarationNode, context, ruleMap) {
  const typeNameTerminalNode = typeNameTerminalNodeQuery(constructorDeclarationNode),
        termNode = termNodeQuery(constructorDeclarationNode),
        type = verifyTypeName(typeNameTerminalNode, context, ruleMap);

  verifyTermAsConstructor(termNode, context, ruleMap);

  const constructor = Constructor.fromTermNodeAndType(termNode, type);

	context.addConstructor(constructor);
}

module.exports = verifyConstructorDeclaration;
