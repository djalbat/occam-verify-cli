"use strict";

const verifyFile = require("../verify/file");

function verifyFiles(filePaths, packageContext) {
  const filesVerified = filePaths.every((filePath) => verifyFile(filePath, packageContext));

  return filesVerified;
}

module.exports = verifyFiles;
