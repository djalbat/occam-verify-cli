'use strict';

const Error = require('../../error'),
      queries = require('../../queries'),
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
          type = context.findTypeByTypeName(typeName),
          constructor = Constructor.fromTermNodeAndTypeName(termNode, type),
          constructorPresent = context.isConstructorPresent(constructor);

    if (constructorPresent) {
      if (constructorPresent) {
        const node = constructorDeclarationNode, ///
              constructorString = constructor.asString(),
              message = `The constructor '${constructorString}' is already present.`;

        throw new Error(node, message);
      }
    }

    context.addConstructor(constructor);
  }
}

module.exports = verifyConstructorDeclaration;
