'use strict';

const queries = require('../../queries'),
      verifyDeclarationNode = require('../../verify/node/declaration');

const { declarationQuery } = queries;

function verifyTopmostNode(topmostNode, context) {
  const declarationNodes = declarationQuery.execute(topmostNode);

  declarationNodes.forEach((declarationNode) => verifyDeclarationNode(declarationNode, context));
}

module.exports = verifyTopmostNode;
