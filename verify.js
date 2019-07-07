#!/usr/bin/env node

const argumentative = require('argumentative');

const main = require('./bin/main');

const { argv } = process,
      { parseArgv } = argumentative;

const abbreviations = {
        'o': 'outputFile',
        'h': 'hot-reload',
        'i': 'incremental'
      },
      { options, commands } = parseArgv(argv, abbreviations);

main(commands, options);
