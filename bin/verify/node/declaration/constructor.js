'use strict';

const Error = require('../../../error'),
      queries = require('../../../queries'),
      Constructor = require('../../../constructor');

const { constructorNameQuery } = queries;

function verifyConstructorDeclarationNode(constructorsDeclarationNode, context) {
  const constructorNameNodes = constructorNameQuery.execute(constructorsDeclarationNode),
        constructorNameNode = constructorNameNodes.shift(),
        constructorNameNodeContent = constructorNameNode.getContent(),
        constructorName = constructorNameNodeContent, ///
        constructorPresent = context.isConstructorPresentByConstructorName(constructorName);

  if (constructorPresent) {
    const node = constructorsDeclarationNode, ///
          message = `The constructor '${constructorName}' is already present.`;

    throw new Error(node, message);
  }

  const constructor = Constructor.fromConstructorName(constructorName);

  context.addConstructor(constructor);
}

module.exports = verifyConstructorDeclarationNode;
