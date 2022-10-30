"use strict";

import verifyTopLevelDeclaration from "../verify/declaration/topLevel";

import { nodesQuery } from "../utilities/query";

const topLevelDeclarationNodesQuery = nodesQuery("/document/topLevelDeclaration");

export default function verifyTopLevelDeclarations(filePath, fileContext) {
  let topLevelDeclarationsVerified;

  const node = fileContext.getNode(),
        topLevelDeclarationNodes = topLevelDeclarationNodesQuery(node);

  topLevelDeclarationsVerified = topLevelDeclarationNodes.every((topLevelDeclarationNode) => {
    const topLevelDeclarationVerified = verifyTopLevelDeclaration(topLevelDeclarationNode, fileContext);

    if (topLevelDeclarationVerified) {
      return true;
    }
  })

  return topLevelDeclarationsVerified;
}
