"use strict";

const { Dependency } = require("occam-file-system"),
      { loggingUtilities } = require("necessary"),
      { verifyRelease, releaseContextUtilities } = require("../../lib/index");

const { releaseContextFromReleaseNameAndShortenedVersion } = require("../utilities/fileSystem");

const { log } = loggingUtilities,
      { setLogLevel } = log,
      { createReleaseContext, initialiseReleaseContexts } = releaseContextUtilities;

function verifyAction(argument, logLevel) {
  const name = argument, ///
        releaseContextMap = {},
        shortenedVersion = null,
        dependentNames = [],
        dependency = Dependency.fromNameAndShortenedVersion(name, shortenedVersion),
        context = {
          log,
          releaseContextMap,
          releaseContextFromReleaseNameAndShortenedVersion
        };

  setLogLevel(logLevel);

  createReleaseContext(dependency, dependentNames, context, (error) => {
    if (error) {
      ///

      return;
    }

    const releaseName = name; ///

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
