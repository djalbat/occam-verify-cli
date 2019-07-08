'use strict';

const queries = require('../../../queries'),
      verifyConstructorDeclarationNode = require('../../../verify/node/declaration/constructor');

const { constructorDeclarationQuery } = queries;

function verifyConstructorsDeclarationNode(constructorsDeclarationNode, context) {
  const constructorDeclarationNodes = constructorDeclarationQuery.execute(constructorsDeclarationNode);

  constructorDeclarationNodes.forEach((constructorDeclarationNode) => verifyConstructorDeclarationNode(constructorDeclarationNode, context));
}

module.exports = verifyConstructorsDeclarationNode;
