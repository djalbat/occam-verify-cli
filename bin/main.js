'use strict';

const Context = require('./context'),
      verifyFile = require('./verify/file');

function main(commands, options) {
  const { file } = options,
        fileName = file,  ///
        context = Context.fromNothing();

  verifyFile(fileName, context);
}

module.exports = main;
