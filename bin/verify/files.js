"use strict";

const verifyFile = require("../verify/file");

const { leftDifference } = require("../utilities/array");

function verifyFiles(packageContext) {
  let filesVerified = false;

  const filePaths = packageContext.getFilePaths();

  for (;;) {
    const filePathsLength = filePaths.length;

    if (filePathsLength === 0) {
      filesVerified = true;

      break;
    }

    const verifiedFilePaths = [];

    filePaths.forEach((filePath) => {
      const fileVerified = verifyFile(filePath, packageContext);

      if (fileVerified) {
        const verifiedFilePath = filePath;  ///

        verifiedFilePaths.push(verifiedFilePath);
      }
    });

    const verifiedFilePathsLength = verifiedFilePaths.length,
          fileVerified = (verifiedFilePathsLength > 0);

    if (!fileVerified) {
      break;
    }

    leftDifference(filePaths, verifiedFilePaths);
  }

  return filesVerified;
}

module.exports = verifyFiles;
