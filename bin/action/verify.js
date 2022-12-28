"use strict";

const { Dependency } = require("occam-file-system"),
      { loggingUtilities } = require("necessary"),
      { verifyRelease, releaseContextUtilities } = require("../../lib/index");  ///

const { releaseContextFromDependencyAndDependentNames } = require("../utilities/fileSystem");

const { log } = loggingUtilities,
      { setLogLevel } = log,
      { createReleaseContext, initialiseReleaseContext } = releaseContextUtilities;

function verifyAction(argument, logLevel) {
  const name = argument, ///
        context = {},
        dependency = Dependency.fromName(name),
        dependentNames = [],
        releaseContextMap = {};

  setLogLevel(logLevel);

  Object.assign(context, {
    log,
    releaseContextMap,
    releaseContextFromDependencyAndDependentNames
  });

  createReleaseContext(dependency, dependentNames, context, (error) => {
    if (error) {
      ///

      return;
    }

    let releaseVerified = false;

    try {
      const releaseName = name; ///

      initialiseReleaseContext(dependency, context);

      releaseVerified = verifyRelease(releaseName, releaseContextMap);
    } catch (error) {
      log.error(error);
    } finally {
      delete context.releaseContextMap;
      delete context.releaseContextFromDependencyAndDependentNames;
    }
  });

  ///
}

module.exports = verifyAction;
