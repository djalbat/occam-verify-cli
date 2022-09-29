"use strict";

const { loggingUtilities } = require("necessary");

const FileContext = require("../context/file"),
      PackageContext = require("../context/package"),
      verifyTopLevelDeclaration = require("../verify/topLevelDeclaration");

const { nodesQuery } = require("../utilities/query");

const { log } = loggingUtilities;

const topLevelDeclarationNodesQuery = nodesQuery("/document/topLevelDeclaration");

function verifyFile(filePath, packageContext = PackageContext.fromNothing()) {
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

module.exports = verifyFile;
