'use strict';

const queries = require('../../queries'),
      verifyConstructorDeclaration = require('../../verify/declaration/constructor');

const { constructorDeclarationNodesQuery } = queries;

function verifyConstructorsDeclaration(constructorsDeclarationNode, context, rules) {
  const constructorDeclarationNodes = constructorDeclarationNodesQuery(constructorsDeclarationNode);

  constructorDeclarationNodes.forEach((constructorDeclarationNode) => verifyConstructorDeclaration(constructorDeclarationNode, context, rules));
}

module.exports = verifyConstructorsDeclaration;
