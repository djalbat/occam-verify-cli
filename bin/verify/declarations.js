"use strict";

const queryUtilities = require("../utilities/query"),
      verifyDeclaration = require("../verify/declaration");

const { nodesQuery } = queryUtilities;

const declarationNodesQuery = nodesQuery("/*/declaration/*");

function verifyDeclarations(fileContext) {
  let declarationsVerified;

  const node = fileContext.getNode(),
        declarationNodes = declarationNodesQuery(node);

  declarationsVerified = declarationNodes.every((declarationNode) => verifyDeclaration(declarationNode, fileContext));

  return declarationsVerified;
}

module.exports = verifyDeclarations;
