#!/usr/bin/env node

const main = require('./bin/main'),
			argumentative = require('./argumentative');

const { argv } = process,
      { commandFromArgv, argumentFromArgv, optionsFromArgv } = argumentative;

const command = commandFromArgv(argv),
      argument = argumentFromArgv(argv),
      options = optionsFromArgv(argv);

main(command, argument, options);
