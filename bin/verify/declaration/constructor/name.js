'use strict';

const queries = require('../../../queries'),
      Constructor = require('../../../constructor'),
      verifyName = require('../../../verify/name'),
      verifyTypeName = require('../../../verify/typeName'),
      verifyParenthesizedTypeNames = require('../../../verify/parenthesizedTypeNames');

const { nameNodeQuery, typeNameNodeQuery, parenthesisedTypeNamesNodeQuery } = queries;

function verifyNameConstructorDeclaration(constructorDeclarationNode, context) {
  const nameNode = nameNodeQuery(constructorDeclarationNode),
        typeNameNode = typeNameNodeQuery(constructorDeclarationNode),
        parenthesisedTypeNamesNode = parenthesisedTypeNamesNodeQuery(constructorDeclarationNode),
        name = verifyName(nameNode, context),
        typeName = verifyTypeName(typeNameNode, context);

  if (parenthesisedTypeNamesNode === undefined) {
    const constructor = Constructor.fromNameAndTypeName(name, typeName);

    context.addConstructor(constructor);
  } else {
    const typeNames = verifyParenthesizedTypeNames(parenthesisedTypeNamesNode, context),
          constructor = Constructor.fromNameTypeNameAndTypeNames(name, typeName, typeNames);

    context.addConstructor(constructor);
  }
}

module.exports = verifyNameConstructorDeclaration;
