"use strict";

import { nodesQuery } from "../utilities/query";

const topLevelDeclarationNodesQuery = nodesQuery("/document/topLevelDeclaration");

export default function verifyTopLevelDeclarations(filePath, fileContext = this) {
  let topLevelDeclarationsVerified;

  const node = fileContext.getNode(),
        topLevelDeclarationNodes = topLevelDeclarationNodesQuery(node);

  topLevelDeclarationsVerified = topLevelDeclarationNodes.every((topLevelDeclarationNode) => {
    const topLevelDeclarationVerified = fileContext.verifyTopLevelDeclaration(topLevelDeclarationNode);

    if (topLevelDeclarationVerified) {
      return true;
    }
  })

  return topLevelDeclarationsVerified;
}
