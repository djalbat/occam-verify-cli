"use strict";

import FileContext from "../context/file";
import verifyTopLevelDeclaration from "./declaration/topLevel";

import { nodesQuery } from "../utilities/query";

const topLevelDeclarationNodesQuery = nodesQuery("/document/topLevelDeclaration");

export default function verifyFile(filePath, releaseContext) {
  let fileVerified = false;

  releaseContext.debug(`Verifying the '${filePath}' file...`);

  const fileContext = FileContext.fromReleaseContextAndFilePath(releaseContext, filePath),
        node = fileContext.getNode(),
        topLevelDeclarationNodes = topLevelDeclarationNodesQuery(node),
        topLevelDeclarationsVerified = topLevelDeclarationNodes.every((topLevelDeclarationNode) => {
          const topLevelDeclarationVerified = verifyTopLevelDeclaration(topLevelDeclarationNode, fileContext);

          if (topLevelDeclarationVerified) {
            return true;
          }
        });

  if (topLevelDeclarationsVerified) {
    releaseContext.addFileContext(fileContext);

    fileVerified = true;
  }

  if (fileVerified) {
    releaseContext.info(`Verified the '${filePath}' file.`);
  }

  return fileVerified;
}
