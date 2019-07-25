'use strict';

const queries = require('../../miscellaneous/queries'),
      Constructor = require('../../constructor'),
			verifyTypeName = require('../../verify/typeName'),
      verifyTermAsConstructor = require('../../verify/termAsConstructor');

const { termNodeQuery, typeNameNodeQuery } = queries;

function verifyConstructorDeclaration(constructorDeclarationNode, context, rules) {
  const termNode = termNodeQuery(constructorDeclarationNode);

  verifyTermAsConstructor(termNode, context, rules);

  const typeNameNode = typeNameNodeQuery(constructorDeclarationNode),
        type = verifyTypeName(typeNameNode, context, rules),
		    constructor = Constructor.fromTermNodeAndType(termNode, type);

	context.addConstructor(constructor);
}

module.exports = verifyConstructorDeclaration;
