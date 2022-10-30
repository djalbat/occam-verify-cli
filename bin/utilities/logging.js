"use strict";

const { levels } = require("necessary");

const { TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL, FATAL_LEVEL } = levels;

function log(level, message) {
  console.log(`(${level}) ${message}`)
}

function trace(message) { log(TRACE_LEVEL, message); }

function debug(message) { log(DEBUG_LEVEL, message); }

function info(message) { log(INFO_LEVEL, message); }

function warning(message) { log(WARNING_LEVEL, message); }

function error(message) { log(ERROR_LEVEL, message); }

function fatal(message) { log(FATAL_LEVEL, message); }

Object.assign(log, {
  trace,
  debug,
  info,
  warning,
  error,
  fatal
});

module.exports = {
  log
};
