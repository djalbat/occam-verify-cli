#!/usr/bin/env node

const argumentative = require('argumentative');

const main = require('./bin/main'),
      abbreviations = require('./bin/abbreviations');

const { argv } = process,
      { parseArgv } = argumentative;

const { options, commands } = parseArgv(argv, abbreviations);

main(commands, options);
