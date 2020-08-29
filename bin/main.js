"use strict";

const necessary = require("necessary");

const log = require("./log"),
      verifyFile = require("./verify/file"),
      verifyPackage = require("./verify/package");

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

function main(commands, options) {
  const firstCommand = first(commands),
        { logLevel, filePath, packageName = firstCommand } = options; ///

  if (logLevel) {
    log.setLogLevel(logLevel);
  }

  packageName ?
    verifyPackage(packageName) :
      verifyFile(filePath);
}

module.exports = main;
