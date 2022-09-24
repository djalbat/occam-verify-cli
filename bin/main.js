"use strict";

const { arrayUtilities, loggingUtilities } = require("necessary");

const verifyPackage = require("./verify/package"),
      loadPackageContexts = require("./loadPackageContexts"),
      FileSystemPackageContext = require("./context/package/fileSystem");

const { log } = loggingUtilities,
      { first } = arrayUtilities;

function main(commands, options) {
  const firstCommand = first(commands),
        { logLevel = null, packageName = firstCommand } = options; ///

  if (logLevel !== null) {
    log.setLogLevel(logLevel);
  }

  const PackageContext = FileSystemPackageContext,  ///
        packageContextMap = loadPackageContexts(packageName, PackageContext);

  verifyPackage(packageName, packageContextMap);
}

module.exports = main;
