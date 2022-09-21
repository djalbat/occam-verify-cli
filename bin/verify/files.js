"use strict";

const verifyFile = require("../verify/file");

const { filePathsFromPackageName } = require("../utilities/package");

function verifyFiles(packageContext) {
  let filesVerified = false;

  const packageName = packageContext.getPackageName(),
        filePaths = filePathsFromPackageName(packageName);

  for (;;) {
    const filePathsLength = filePaths.length;

    if (filePathsLength === 0) {
      filesVerified = true;

      break;
    }

    const fileVerified = filePaths.some((filePath, index) => {
      const fileVerified = verifyFile(filePath, packageContext);

      if (fileVerified) {
        const start = index,  ///
              deleteCount = 1;

        filePaths.splice(start, deleteCount);

        return true;
      }
    });

    if (!fileVerified) {
      break;
    }
  }

  return filesVerified;
}

module.exports = verifyFiles;
