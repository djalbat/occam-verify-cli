"use strict";

const { levels } = require("necessary");

const { EMPTY_STRING } = require("./constants"),
      { DEFAULT_LOG_LEVEL } = require("./defaults");

const { INFO_LEVEL, TRACE_LEVEL, DEBUG_LEVEL, ERROR_LEVEL, FATAL_LEVEL, WARNING_LEVEL } = levels;

let logLevel = DEFAULT_LOG_LEVEL;

function log(message, level = EMPTY_STRING) {
  if (level !== EMPTY_STRING) {
    const levels = [
            TRACE_LEVEL,
            DEBUG_LEVEL,
            INFO_LEVEL,
            WARNING_LEVEL,
            ERROR_LEVEL,
            FATAL_LEVEL,
          ],
          levelIndex = levels.indexOf(level),
          logLevelIndex = levels.indexOf(logLevel);

    if (levelIndex < logLevelIndex) {
      return;
    }
  }

  const upperCaseLevel = level.toUpperCase(),
        logMessage = `${upperCaseLevel}: ${message}`;

  console.log(logMessage);
}

function trace(message) { return log(message, TRACE_LEVEL); }

function debug(message) { return log(message, DEBUG_LEVEL); }

function info(message) { return log(message, INFO_LEVEL); }

function warning(message) { return log(message, WARNING_LEVEL); }

function error(message) { return log(message, ERROR_LEVEL); }

function fatal(message) { return log(message, FATAL_LEVEL); }

function setLogLevel(level) { logLevel = level; }

Object.assign(log, {
  trace,
  debug,
  info,
  warning,
  error,
  fatal,
  setLogLevel
});

module.exports = log;
