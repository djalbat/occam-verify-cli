"use strict";

const necessary = require("necessary");

const verifyFiles = require("./verify/files"),
      verifyPackage = require("./verify/package"),
      GlobalContext = require("./context/global"),
      PackageContext = require("./context/package");

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

function main(commands, options) {
  let globalContext = GlobalContext.fromNothing();

  const firstCommand = first(commands),
        { filePath, packageName = firstCommand } = options; ///

  if (packageName) {
    const packageNames = [];

    verifyPackage(packageName, globalContext, packageNames);
  } else {
    const filePaths = [ filePath ], ///
          packageContext = PackageContext.fromGlobalContext(globalContext);

    verifyFiles(filePaths, packageContext);
  }
}

module.exports = main;
