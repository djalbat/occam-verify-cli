"use strict";

function trace(message) { this.context.trace(message); }

function debug(message) { this.context.debug(message); }

function info(message) { this.context.info(message); }

function warning(message) { this.context.warning(message); }

function error(message) { this.context.error(message); }

function fatal(message) { this.context.fatal(message); }

const loggingMixins = {
  trace,
  debug,
  info,
  warning,
  error,
  fatal
};

export default loggingMixins;
