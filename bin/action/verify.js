"use strict";

const { Dependency } = require("occam-file-system"),
      { loggingUtilities } = require("necessary"),
      { verifyRelease, releaseContextUtilities } = require("../../lib/index");

const { releaseContextFromDependencyAndDependentNames } = require("../utilities/fileSystem");

const { log } = loggingUtilities,
      { setLogLevel } = log,
      { createReleaseContext, initialiseReleaseContext } = releaseContextUtilities;

function verifyAction(argument, logLevel) {
  const name = argument, ///
        dependency = Dependency.fromName(name),
        dependentNames = [],
        releaseContextMap = {},
        context = {
          log,
          releaseContextMap,
          releaseContextFromDependencyAndDependentNames
        };

  setLogLevel(logLevel);

  createReleaseContext(dependency, dependentNames, context, (error) => {
    if (error) {
      ///

      return;
    }

    initialiseReleaseContext(dependency, context);

    const releaseName = name; ///

    verifyRelease(releaseName, releaseContextMap);
  });
}

module.exports = verifyAction;
