'use strict';

const necessary = require('necessary');

const Context = require('./context'),
      verifyFile = require('./verify/file'),
      verifyPackage = require('./verify/package');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

function main(commands, options) {
  const firstCommand = first(commands),
        { filePath, packageName = firstCommand } = options, ///
        context = Context.fromNothing();

  if (packageName === undefined) {
    verifyFile(filePath, context);
  } else {
    const packageNames = [];

    verifyPackage(packageName, packageNames, context);
  }
}

module.exports = main;
