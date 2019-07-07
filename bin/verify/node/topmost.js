'use strict';

const dom = require('occam-dom');

const { queryUtilities } = dom,
      { queryByExpression } = queryUtilities;

function verifyTopmostNode(topmostNode, context) {
  const maximumDepth = 1,
        declarationNodes = queryByExpression(topmostNode, '//declaration', maximumDepth);

  declarationNodes.forEach((declarationNode) => {

  });
}

module.exports = verifyTopmostNode;
