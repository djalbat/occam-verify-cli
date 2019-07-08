'use strict';

const queries = require('../../queries'),
      verifyDeclarationNode = require('../../verify/node/declaration');

const { declarationNodesQuery } = queries;

function verifyTopmostNode(topmostNode, context) {
  const declarationNodes = declarationNodesQuery(topmostNode);

  declarationNodes.forEach((declarationNode) => verifyDeclarationNode(declarationNode, context));
}

module.exports = verifyTopmostNode;
