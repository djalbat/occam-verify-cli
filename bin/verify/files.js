"use strict";

const verifyFile = require("../verify/file");

const { filePathsFromPackageName } = require("../utilities/package");

function verifyFiles(packageContext) {
  const packageName = packageContext.getPackageName(),
        filePaths = filePathsFromPackageName(packageName),
        filesVerified = filePaths.every((filePath) => {
          const fileVerified = verifyFile(filePath, packageContext);

          if (fileVerified) {
            return true;
          }
        });

  return filesVerified;
}

module.exports = verifyFiles;
