"use strict";

import { loggingUtilities } from "necessary";

import FileContext from "../context/file";
import PackageContext from "../context/package";
import verifyTopLevelDeclaration from "../verify/declaration/topLevel";

import { nodesQuery } from "../utilities/query";

const { log } = loggingUtilities;

const topLevelDeclarationNodesQuery = nodesQuery("/document/topLevelDeclaration");

export default function verifyFile(filePath, packageContext = PackageContext.fromNothing()) {
  let fileVerified = false;

  log.debug(`Verifying the '${filePath}' file...`);

  const fileContext = FileContext.fromPackageContextAndFilePath(packageContext, filePath),
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
    packageContext.addFileContext(fileContext);

    fileVerified = true;

    log.info(`Verified the '${filePath}' file.`);
  }

  return fileVerified;
}
