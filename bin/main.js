"use strict";

const { fileSystemUtilities } = require("occam-file-system"),
      { arrayUtilities, loggingUtilities } = require("necessary"),
      { verifyRelease, releaseContextUtilities } = require("../lib/index");

const callbacks = require("./callbacks");

const { PERIOD } = require("./constants"),
      { DEFAULT_LOG_LEVEL } = require("./defaults");

const { log } = loggingUtilities,
      { first } = arrayUtilities,
      { setLogLevel } = log,
      { loadRelease } = fileSystemUtilities,
      { createReleaseContext } = releaseContextUtilities;

function main(commands, options) {
  const firstCommand = first(commands),
        { logLevel = DEFAULT_LOG_LEVEL, releaseName = firstCommand } = options, ///
        releaseContextMap = {},
        shortenedVersion = null,
        dependentNames = [],
        context = {
          log,
          callbacks,
          createRelease,
          releaseContextMap
        };

  setLogLevel(logLevel);

  createReleaseContext(releaseName, dependentNames, shortenedVersion, context, (error) => {
    if (error) {
      ///

      return;
    }

    verifyRelease(releaseName, releaseContextMap);
  });
}

module.exports = main;

function createRelease(name, callback, context) {
  const topmostDirectoryName = name, ///
        projectsDirectoryPath = PERIOD, ///
        release = loadRelease(topmostDirectoryName, projectsDirectoryPath);

  callback(release);
}
