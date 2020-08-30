"use strict";

const log = require("../log"),
      FileContext = require("../context/file"),
      verifyAxioms = require("../verify/axioms"),
      PackageContext = require("../context/package"),
      verifyDeclarations = require("../verify/declarations");

function verifyFile(filePath, packageContext = PackageContext.fromNothing()) {
  let fileVerified = false,
      axiomsVerified = false,
      declarationsVerified = false;

  log.debug(`Verifying the '${filePath}' file...`);

  const fileContext = FileContext.fromPackageContextAndFilePath(packageContext, filePath);

  declarationsVerified = verifyDeclarations(fileContext);

  if (declarationsVerified) {
    axiomsVerified = verifyAxioms(fileContext);
  }

  if (axiomsVerified && declarationsVerified) {
    packageContext.addFileContext(fileContext);

    fileVerified = true;

    log.info(`Verified the '${filePath}' file.`);
  }

  return fileVerified;
}

module.exports = verifyFile;
