"use strict";

const verifyFile = require("../verify/file"),
      packageUtilities = require("../utilities/package");

const { filePathsFromPackageName } = packageUtilities;

function verifyFiles(packageContext) {
  const packageName = packageContext.getPackageName(),
        filePaths = filePathsFromPackageName(packageName),
        filesVerified = filePaths.every((filePath) => verifyFile(filePath, packageContext));

  return filesVerified;
}

module.exports = verifyFiles;
