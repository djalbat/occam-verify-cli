'use strict';

const Context = require('./context'),
      verifyFile = require('./verify/file');

function main(commands, options) {
  const { fileName } = options,
        context = Context.fromNothing();

  verifyFile(fileName, context);
}

module.exports = main;
