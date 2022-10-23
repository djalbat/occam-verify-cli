"use strict";

const { verifyRelease } = require("../lib/index"),
      { arrayUtilities, loggingUtilities } = require("necessary");

const loadReleaseContexts = require("./loadReleaseContexts");

const { log } = loggingUtilities,
      { first } = arrayUtilities;

function main(commands, options) {
  const firstCommand = first(commands),
        { logLevel = null, releaseName = firstCommand } = options; ///

  if (logLevel !== null) {
    log.setLogLevel(logLevel);
  }

  const releaseContextMap = loadReleaseContexts(releaseName);

  verifyRelease(releaseName, releaseContextMap);
}

module.exports = main;
