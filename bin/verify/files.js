"use strict";

const verifyFile = require("../verify/file");

function verifyFiles(filePaths, packageContext) {
  filePaths.forEach((filePath) => {
    const fileContext = verifyFile(filePath, packageContext);

    packageContext.addFileContext(fileContext);
  });
}

module.exports = verifyFiles;
