"use strict";

const options = require("./options");

const { LOG_LEVEL_OPTION, RELEASE_NAME_OPTIONS } = options;

const l = LOG_LEVEL_OPTION,
      p = RELEASE_NAME_OPTIONS;

module.exports = {
  l,
  p
};
