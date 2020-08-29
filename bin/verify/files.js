"use strict";

const verifyFile = require("../verify/file");

function verifyFiles(filePaths, packageContext) {
  let verified = false;

  filePaths.every((filePath) => {
    const fileContext = verifyFile(filePath, packageContext);
  });

  return verified;
}

module.exports = verifyFiles;
