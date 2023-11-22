"use strict";

import FileContext from "../context/file";
import verifyTopLevelDeclaration from "./declaration/topLevel";

import { nodesQuery } from "../utilities/query";

const errorNodesQuery = nodesQuery("/document/error"),
      topLevelDeclarationNodesQuery = nodesQuery("/document/topLevelDeclaration");

export default function verifyFile(filePath, releaseContext) {
  let fileVerified = false;

  releaseContext.debug(`Verifying the '${filePath}' file...`);

  const fileContext = FileContext.fromFilePathAndReleaseContext(filePath, releaseContext),
        node = fileContext.getNode();

  if (node === null) {
    fileVerified = true;
  } else {
    const errorNodes = errorNodesQuery(node),
          errorNodesLength = errorNodes.length;

    if (errorNodesLength > 0) {
      releaseContext.warning(`The '${filePath}' file cannot be verified because it contains errors.`);
    } else {
      const topLevelDeclarationNodes = topLevelDeclarationNodesQuery(node),
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
    }
  }

  if (fileVerified) {
    releaseContext.info(`...verified the '${filePath}' file.`);
  }

  return fileVerified;
}
