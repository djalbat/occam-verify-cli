'use strict';

const queries = require('../../../queries'),
      verifyConstructorDeclarationNode = require('../../../verify/node/declaration/constructor');

const { constructorDeclarationNodesQuery } = queries;

function verifyConstructorsDeclarationNode(constructorsDeclarationNode, context) {
  const constructorDeclarationNodes = constructorDeclarationNodesQuery(constructorsDeclarationNode);

  constructorDeclarationNodes.forEach((constructorDeclarationNode) => verifyConstructorDeclarationNode(constructorDeclarationNode, context));
}

module.exports = verifyConstructorsDeclarationNode;
