"use strict";

import { levels } from "necessary";

const { TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL, FATAL_LEVEL } = levels;

function trace(message) { this.log(TRACE_LEVEL, message); }

function debug(message) { this.log(DEBUG_LEVEL, message); }

function info(message) { this.log(INFO_LEVEL, message); }

function warning(message) { this.log(WARNING_LEVEL, message); }

function error(message) { this.log(ERROR_LEVEL, message); }

function fatal(message) { this.log(FATAL_LEVEL, message); }

const logMixins = {
  trace,
  debug,
  info,
  warning,
  error,
  fatal
};

export default logMixins;
