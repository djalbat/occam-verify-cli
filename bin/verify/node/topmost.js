'use strict';

const dom = require('occam-dom');

const verifyDeclarationNode = require('../../verify/node/declaration');

const { Query } = dom;

const maximumDepth = 1,
      declarationQuery = Query.fromExpression('//declaration', maximumDepth);

function verifyTopmostNode(topmostNode, context) {
  const declarationNodes = declarationQuery.execute(topmostNode);

  declarationNodes.forEach((declarationNode) => verifyDeclarationNode(declarationNode, context));
}

module.exports = verifyTopmostNode;
