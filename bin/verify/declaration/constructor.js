"use strict";

const queries = require("../../miscellaneous/queries"),
      Constructor = require("../../constructor"),
			verifyTypeName = require("../../verify/typeName"),
      verifyTermAsConstructor = require("../../verify/termAsConstructor");

const { termNodeQuery, typeNameTerminalNodeQuery } = queries;

function verifyConstructorDeclaration(constructorDeclarationNode, context, ruleMap) {
  const termNode = termNodeQuery(constructorDeclarationNode);

  verifyTermAsConstructor(termNode, context, ruleMap);

  const typeNameTerminalNode = typeNameTerminalNodeQuery(constructorDeclarationNode),
        type = verifyTypeName(typeNameTerminalNode, context, ruleMap),
		    constructor = Constructor.fromTermNodeAndType(termNode, type);

	context.addConstructor(constructor);
}

module.exports = verifyConstructorDeclaration;
