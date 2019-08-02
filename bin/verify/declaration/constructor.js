'use strict';

const queries = require('../../miscellaneous/queries'),
      Constructor = require('../../constructor'),
			verifyTypeName = require('../../verify/typeName'),
      verifyTermAsConstructor = require('../../verify/termAsConstructor');

const { termNodeQuery, typeNameTerminalNodeQuery } = queries;

function verifyConstructorDeclaration(constructorDeclarationNode, context, rules) {
  const termNode = termNodeQuery(constructorDeclarationNode);

  verifyTermAsConstructor(termNode, context, rules);

  const typeNameTerminalNode = typeNameTerminalNodeQuery(constructorDeclarationNode),
        type = verifyTypeName(typeNameTerminalNode, context, rules),
		    constructor = Constructor.fromTermNodeAndType(termNode, type);

	context.addConstructor(constructor);
}

module.exports = verifyConstructorDeclaration;
