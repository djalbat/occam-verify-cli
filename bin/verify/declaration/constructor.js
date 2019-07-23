'use strict';

const queries = require('../../queries'),
      Constructor = require('../../constructor'),
			verifyTypeName = require('../../verify/typeName'),
      verifyTermAsConstructor = require('../../verify/termAsConstructor');

const { termNodeQuery, typeNameNodeQuery } = queries;

function verifyConstructorDeclaration(constructorDeclarationNode, context, rules) {
  const termNode = termNodeQuery(constructorDeclarationNode);

  verifyTermAsConstructor(termNode, context, rules);

  const typeNameNode = typeNameNodeQuery(constructorDeclarationNode),
        typeName = verifyTypeName(typeNameNode, context, rules),
        type = context.findTypeByTypeName(typeName),
		    constructor = Constructor.fromTermNodeAndType(termNode, type);

	context.addConstructor(constructor);
}

module.exports = verifyConstructorDeclaration;
