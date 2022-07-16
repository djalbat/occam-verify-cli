"use strict";

const { arrayUtilities } = require("necessary");

const log = require("./log"),
      verifyFile = require("./verify/file"),
      verifyPackage = require("./verify/package");

const { first } = arrayUtilities;

function main(commands, options) {
  const firstCommand = first(commands),
        { logLevel = null, filePath, packageName = firstCommand } = options; ///

  if (logLevel !== null) {
    log.setLogLevel(logLevel);
  }

  (packageName !== undefined) ?
    verifyPackage(packageName) :
      verifyFile(filePath);
}

module.exports = main;
