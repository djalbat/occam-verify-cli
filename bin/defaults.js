"use strict";

const { levels } = require("necessary");

const { INFO_LEVEL } = levels;

const DEFAULT_HELP = false,
      DEFAULT_VERSION = false,
      DEFAULT_LOG_LEVEL = INFO_LEVEL;

module.exports = {
  DEFAULT_HELP,
  DEFAULT_VERSION,
  DEFAULT_LOG_LEVEL
};
