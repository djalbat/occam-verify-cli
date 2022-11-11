"use strict";

const { loggingUtilities } = require("necessary"),
      { verifyRelease, releaseContextUtilities } = require("../../lib/index");

const { releaseContextFromReleaseNameAndShortenedVersion } = require("../utilities/fileSystem");

const { log } = loggingUtilities,
      { setLogLevel } = log,
      { createReleaseContext, initialiseReleaseContexts } = releaseContextUtilities;

function verifyAction(argument, logLevel) {
  const releaseName = argument, ///
        releaseContextMap = {},
        shortenedVersion = null,
        dependentNames = [],
        context = {
          log,
          releaseContextMap,
          releaseContextFromReleaseNameAndShortenedVersion
        };

  setLogLevel(logLevel);

  createReleaseContext(releaseName, dependentNames, shortenedVersion, context, (error) => {
    if (error) {
      ///

      return;
    }

    initialiseReleaseContexts(releaseName, releaseContextMap);

    const releaseVerified = verifyRelease(releaseName, releaseContextMap);

    if (releaseVerified) {
      const releaseContext = releaseContextMap[releaseName];

      releaseContext.toJSON();

      ///
    }
  });
}

module.exports = verifyAction;
