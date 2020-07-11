"use strict";

const necessary = require("necessary");

const verifyFile = require("./verify/file"),
      verifyPackage = require("./verify/package");

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

function main(commands, options) {
  const firstCommand = first(commands),
        { filePath, packageName = firstCommand } = options; ///

  packageName ?
    verifyPackage(packageName) :
      verifyFile(filePath);
}

module.exports = main;
