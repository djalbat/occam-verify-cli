"use strict";

import FileContext from "../context/file";
import ReleaseContext from "../context/release";
import verifyTopLevelDeclaration from "../verify/declaration/topLevel";

import { nodesQuery } from "../utilities/query";

const topLevelDeclarationNodesQuery = nodesQuery("/document/topLevelDeclaration");

export default function verifyFile(filePath, releaseContext = ReleaseContext.fromNothing()) {
  let fileVerified = false;

  releaseContext.debug(`Verifying the '${filePath}' file...`);

  const fileContext = FileContext.fromReleaseContextAndFilePath(releaseContext, filePath),
        context = fileContext,  ///
        node = fileContext.getNode(),
        topLevelDeclarationNodes = topLevelDeclarationNodesQuery(node),
        topLevelDeclarationsVerified = topLevelDeclarationNodes.every((topLevelDeclarationNode) => {
          const topLevelDeclarationVerified = verifyTopLevelDeclaration(topLevelDeclarationNode, context);

          if (topLevelDeclarationVerified) {
            return true;
          }
        })

  if (topLevelDeclarationsVerified) {
    releaseContext.addFileContext(fileContext);

    fileVerified = true;

    releaseContext.info(`Verified the '${filePath}' file.`);
  }

  return fileVerified;
}
