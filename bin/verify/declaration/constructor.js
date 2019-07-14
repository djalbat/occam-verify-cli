'use strict';

const queries = require('../../queries'),
      verifyNameConstructorDeclaration = require('../../verify/declaration/constructor/name'),
      verifyTermConstructorDeclaration = require('../../verify/declaration/constructor/term');

const { termNodeQuery } = queries;

function verifyConstructorDeclaration(constructorDeclarationNode, context, rules) {
  const termNode = termNodeQuery(constructorDeclarationNode);

  (termNode === undefined) ?
    verifyNameConstructorDeclaration(constructorDeclarationNode, context, rules) :
      verifyTermConstructorDeclaration(constructorDeclarationNode, context, rules);
}

module.exports = verifyConstructorDeclaration;
