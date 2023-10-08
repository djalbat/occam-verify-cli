"use strict";

import verifyFile from "../verify/file";

import { filePathUtilities } from "occam-entities";

import { filter, leftDifference } from "../utilities/array";

const { isFilePathFlorenceFilePath } = filePathUtilities;

export default function verifyFiles(releaseContext) {
  let filesVerified = false;

  const filePaths = releaseContext.getFilePaths();

  filter(filePaths, (filePath) => {
    const filePathFlorenceFilePath = isFilePathFlorenceFilePath(filePath);

    if (filePathFlorenceFilePath) {
      return true;
    }
  })

  for (;;) {
    const filePathsLength = filePaths.length;

    if (filePathsLength === 0) {
      filesVerified = true;

      break;
    }

    const verifiedFilePaths = [];

    filePaths.forEach((filePath) => {
      const fileVerified = verifyFile(filePath, releaseContext);

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
