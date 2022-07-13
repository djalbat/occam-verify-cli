"use strict";

const log = require("../log"),
      FileContext = require("../context/file"),
      PackageContext = require("../context/package"),
      verifyTopLevelInstruction = require("../verify/topLevelInstruction");

const { nodesQuery } = require("../utilities/query");

const topLevelInstructionNodesQuery = nodesQuery("/document/topLevelInstruction");

function verifyFile(filePath, packageContext = PackageContext.fromNothing()) {
  let fileVerified = false;

  log.debug(`Verifying the '${filePath}' file...`);

  const fileContext = FileContext.fromPackageContextAndFilePath(packageContext, filePath);

  const node = fileContext.getNode(),
        topLevelInstructionNodes = topLevelInstructionNodesQuery(node),
        topLevelInstructionsVerified = topLevelInstructionNodes.every((topLevelInstructionNode) => {
          const topLevelInstructionVerified = verifyTopLevelInstruction(topLevelInstructionNode, fileContext);

          if (topLevelInstructionVerified) {
            return true;
          }
        })

  if (topLevelInstructionsVerified) {
    packageContext.addFileContext(fileContext);

    fileVerified = true;

    log.info(`Verified the '${filePath}' file.`);
  }

  return fileVerified;
}

module.exports = verifyFile;
