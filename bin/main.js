"use strict";

const { loggingUtilities } = require("necessary");

const verifyPackage = require("./verify/package"),
      loadPackageContexts = require("./loadPackageContexts");

const { first } = require("./utilities/array");

const { log } = loggingUtilities;

function main(commands, options) {
  const firstCommand = first(commands),
        { logLevel = null, packageName = firstCommand } = options; ///

  if (logLevel !== null) {
    log.setLogLevel(logLevel);
  }

  const packageContextMap = loadPackageContexts(packageName);

  verifyPackage(packageName, packageContextMap);
}

module.exports = main;
