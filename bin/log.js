"use strict";

const constants = require("./constants");

const { TRACE, DEBUG, INFO, WARNING, ERROR, FATAL, DEFAULT_LOG_LEVEL } = constants;

const levels = [
  TRACE,
  DEBUG,
  INFO,
  WARNING,
  ERROR,
  FATAL,
];

let logLevel = DEFAULT_LOG_LEVEL;

function log(message, level = "") {
  if (level !== "") {
    const levelIndex = levels.indexOf(level),
          logLevelIndex = levels.indexOf(logLevel);

    if (levelIndex < logLevelIndex) {
      return;
    }
  }

  const logMessage = `${level} ${message}`;

  console.log(logMessage);
}

function trace(message) { return log(message, TRACE); }

function debug(message) { return log(message, DEBUG); }

function info(message) { return log(message, INFO); }

function warning(message) { return log(message, WARNING); }

function error(message) { return log(message, ERROR); }

function fatal(message) { return log(message, FATAL); }

function setLogLevel(level) { logLevel = level; }

Object.assign(log, {
  TRACE,
  DEBUG,
  INFO,
  WARNING,
  ERROR,
  FATAL,
  trace,
  debug,
  info,
  warning,
  error,
  fatal,
  setLogLevel
});

module.exports = log;
