"use strict";

const necessary = require("necessary");

const Context = require("./context"),
      verifyFile = require("./verify/file"),
      verifyPackage = require("./verify/package");

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

function main(commands, options) {
  const firstCommand = first(commands),
        { filePath, packageName = firstCommand } = options, ///
        context = Context.fromNothing();

  packageName ?
    verifyPackage(packageName, context) :
      verifyFile(filePath, context);
}

module.exports = main;
