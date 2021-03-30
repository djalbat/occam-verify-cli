"use strict";

const verifyDeclaration = require("../verify/declaration");

const { nodesQuery } = require("../utilities/query");

const declarationNodesQuery = nodesQuery("/*/declaration/*");

function verifyDeclarations(fileContext) {
  let declarationsVerified;

  const node = fileContext.getNode(),
        declarationNodes = declarationNodesQuery(node);

  declarationsVerified = declarationNodes.every((declarationNode) => verifyDeclaration(declarationNode, fileContext));

  return declarationsVerified;
}

module.exports = verifyDeclarations;
