"use strict";

const { arrayUtilities, loggingUtilities } = require("necessary"),
      { verifyRelease, releaseContextUtilities } = require("../lib/index");

const { DEFAULT_LOG_LEVEL } = require("./defaults"),
      { releaseContextFromReleaseName } = require("./utilities/fileSystem");

const { log } = loggingUtilities,
      { first } = arrayUtilities,
      { setLogLevel } = log,
      { createReleaseContext } = releaseContextUtilities;

function main(commands, options) {
  const firstCommand = first(commands),
        { logLevel = DEFAULT_LOG_LEVEL, releaseName = firstCommand } = options, ///
        releaseContextMap = {},
        shortenedVersion = null,
        dependentNames = [],
        context = {
          releaseContextMap,
          releaseContextFromReleaseName
        };

  setLogLevel(logLevel);

  createReleaseContext(releaseName, dependentNames, shortenedVersion, context, (error) => {
    if (error) {
      ///

      return;
    }

    const releaseVerified = verifyRelease(releaseName, releaseContextMap);

    if (releaseVerified) {
      const releaseContext = releaseContextMap[releaseName];

      releaseContext.toJSON();

      ///
    }
  });
}

module.exports = main;
