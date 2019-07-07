#!/usr/bin/env node

const main = require('./bin/main'),
			argumentative = require('./argumentative');

const { argv } = process,
      { parseArgv } = argumentative;

const abbreviations = {
        'o': 'outputFile',
        'h': 'hot-reload',
        'i': 'incremental'
      },
      { options, commands } = parseArgv(argv, abbreviations);

main(commands, options);
