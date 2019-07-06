#!/usr/bin/env node

const main = require('./bin/main'),
			argumentative = require('./argumentative');

const { argv } = process,
      { parseArgv } = argumentative;

const result = parseArgv(argv);

debugger

// const command = commandFromArgv(argv),
//       argument = argumentFromArgv(argv),
//       options = optionsFromArgv(argv);

main(command, argument, options);
