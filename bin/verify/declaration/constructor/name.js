'use strict';

const queries = require('../../../queries'),
      Constructor = require('../../../constructor'),
      verifyName = require('../../../verify/name'),
      verifyTypeName = require('../../../verify/typeName'),
      verifyParenthesizedTypeNames = require('../../../verify/parenthesizedTypeNames');

const { nameNodeQuery, typeNameNodeQuery, parenthesisedTypeNamesNodeQuery } = queries;

function verifyNameConstructorDeclaration(constructorDeclarationNode, context, rules) {
  const nameNode = nameNodeQuery(constructorDeclarationNode),
        typeNameNode = typeNameNodeQuery(constructorDeclarationNode),
        parenthesisedTypeNamesNode = parenthesisedTypeNamesNodeQuery(constructorDeclarationNode),
        typeName = verifyTypeName(typeNameNode, context, rules),
        name = verifyName(nameNode, context, rules);

  if (parenthesisedTypeNamesNode === undefined) {
    const constructor = Constructor.fromNameAndTypeName(name, typeName);

    context.addConstructor(constructor);
  } else {
    const typeNames = verifyParenthesizedTypeNames(parenthesisedTypeNamesNode, context, rules),
          constructor = Constructor.fromNameTypeNameAndTypeNames(name, typeName, typeNames);

    context.addConstructor(constructor);
  }
}

module.exports = verifyNameConstructorDeclaration;
