"use strict";

const { Release, filePathUtilities } = require("occam-open-cli"),
      { fileSystemUtilities } = require("necessary");

const { isFilePathFlorenceFilePath } = filePathUtilities,
      { readFile, isEntryFile, readDirectory, isEntryDirectory, checkFileExists } = fileSystemUtilities;

function releaseFromReleaseName(releaseName) {

}

function filePathsFromReleaseName(releaseName) {
  const directoryName = releaseName,  ///
        filePaths = readFilePaths(directoryName, (filePath) => {
          const filePathFlorenceFilePath = isFilePathFlorenceFilePath(filePath);

          if (filePathFlorenceFilePath) {
            return true;
          }
        });

  return filePaths;
}

module.exports = {
  filePathsFromReleaseName,
  dependenciesFromReleaseName
};

function readFilePaths(directoryPath, test, filePaths = []) {
  const subEntryNames = readDirectory(directoryPath);

  subEntryNames.forEach((subEntryName) => {
    const subEntryNameHiddenName = isNameHiddenName(subEntryName);

    if (!subEntryNameHiddenName) {
      const subEntryPath = `${directoryPath}/${subEntryName}`,
            subEntryFile = isEntryFile(subEntryPath),
            subEntryDirectory = isEntryDirectory(subEntryPath);

      if (subEntryFile) {
        const filePath = subEntryPath,  ///
              pass = test(filePath);

        if (pass) {
          filePaths.push(filePath);
        }
      }

      if (subEntryDirectory) {
        const subDirectoryPath = subEntryPath;  ///

        readFilePaths(subDirectoryPath, test, filePaths);
      }
    }
  });

  return filePaths;
}

function isNameHiddenName(name) {
  const nameHiddenName = /^\..+/.test(name);

  return nameHiddenName;
}
