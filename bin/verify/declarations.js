"use strict";

const dom = require("occam-dom");

const { Query } = dom;

const verifyDeclaration = require("../verify/declaration");

const declarationNodesQuery = Query.fromExpression("/document/declaration/*");

function verifyDeclarations(fileContext) {
  let declarationsVerified;

  const node = fileContext.getNode(),
        declarationNodes = declarationNodesQuery.execute(node);

  declarationsVerified = declarationNodes.every((declarationNode) => verifyDeclaration(declarationNode, fileContext));

  return declarationsVerified;
}

module.exports = verifyDeclarations;
