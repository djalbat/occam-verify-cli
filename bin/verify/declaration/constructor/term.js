'use strict';

const queries = require('../../../queries'),
      verifyTerm = require('../../../verify/term'),
      Constructor = require('../../../constructor'),
      verifyTypeName = require('../../../verify/typeName'),
      verifyParenthesizedTypeNames = require('../../../verify/parenthesizedTypeNames');

const { termNodeQuery, typeNameNodeQuery, parenthesisedTypeNamesNodeQuery } = queries;

function verifyTermConstructorDeclaration(constructorDeclarationNode, context, rules) {
  const termNode = termNodeQuery(constructorDeclarationNode),
        typeNameNode = typeNameNodeQuery(constructorDeclarationNode),
        parenthesisedTypeNamesNode = parenthesisedTypeNamesNodeQuery(constructorDeclarationNode),
        term = verifyTerm(termNode, context, rules),
        typeName = verifyTypeName(typeNameNode, context, rules),
        typeNames = verifyParenthesizedTypeNames(parenthesisedTypeNamesNode, context, rules),
        constructor = Constructor.fromTermTypeNameAndTypeNames(term, typeName, typeNames);

  context.addConstructor(constructor);
}

module.exports = verifyTermConstructorDeclaration;
