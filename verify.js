#!/usr/bin/env node

const argumentative = require('argumentative');

const main = require('./bin/main');

const { argv } = process,
      { parseArgv } = argumentative;

const abbreviations = {
        'f': 'file-path',
        'p': 'package-name'
      },
      { options, commands } = parseArgv(argv, abbreviations);

main(commands, options);
