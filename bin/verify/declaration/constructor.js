'use strict';

const queries = require('../../queries'),
      Constructor = require('../../constructor'),
      verifyTypeName = require('../../verify/typeName'),
      verifyTermAsConstructor = require('../../verify/termAsConstructor');

const { termNodeQuery, typeNameNodeQuery } = queries;

function verifyConstructorDeclaration(constructorDeclarationNode, context, rules) {
  const termNode = termNodeQuery(constructorDeclarationNode),
        verified = verifyTermAsConstructor(termNode, context, rules);

  if (verified) {
    const typeNameNode = typeNameNodeQuery(constructorDeclarationNode),
          typeName = verifyTypeName(typeNameNode, context, rules),
          type = context.getTypeByTypeName(typeName),
          constructor = Constructor.fromTermNodeAndTypeName(termNode, type);

    context.addConstructor(constructor);
  }
}

module.exports = verifyConstructorDeclaration;
