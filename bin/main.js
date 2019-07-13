'use strict';

const necessary = require('necessary');

const Context = require('./context'),
      verifyFile = require('./verify/file'),
      verifyPackage = require('./verify/package');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

function main(commands, options) {
  const firstCommand = first(commands),
        { fileName, packageName = firstCommand } = options, ///
        context = Context.fromNothing();

  if (packageName !== undefined) {
    verifyPackage(packageName, context);
  } else {
    verifyFile(fileName, context);
  }
}

module.exports = main;
