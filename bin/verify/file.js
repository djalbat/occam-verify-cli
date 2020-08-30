"use strict";

const log = require("../log"),
      FileContext = require("../context/file"),
      PackageContext = require("../context/package"),
      verifyDeclarations = require("../verify/declarations");

function verifyFile(filePath, packageContext = PackageContext.fromNothing()) {
  let fileVerified = false,
      declarationsVerified = false;

  log.debug(`Verifying the '${filePath}' file...`);

  const fileContext = FileContext.fromPackageContextAndFilePath(packageContext, filePath);

  declarationsVerified = verifyDeclarations(fileContext);

  if (declarationsVerified) {
    fileVerified = true;  ///declarationsVerified;  ///
  }

  if (fileVerified) {
    packageContext.addFileContext(fileContext);

    log.info(`Verified the '${filePath}' file.`);
  }

  return fileVerified;
}

module.exports = verifyFile;
