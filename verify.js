#!/usr/bin/env node

const { parseArgv } = require("argumentative"),
      { arrayUtilities } = require("necessary");

const { default: main } = require("./lib/main"),
      { default: configure } = require("./lib/configure"),
      { default: abbreviations } = require("./lib/abbreviations");

const { argv } = process,
      { first, second } = arrayUtilities;

const { commands, options } = parseArgv(argv, abbreviations),
      firstCommand = first(commands),
      secondCommand = second(commands),
      command = firstCommand || null, ///
      argument = secondCommand || null; ///

configure(command, argument, options, main);
