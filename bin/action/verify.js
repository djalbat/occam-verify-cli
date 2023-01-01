"use strict";

const { Dependency } = require("occam-file-system"),
      { loggingUtilities } = require("necessary"),
      { verifyRelease, releaseContextUtilities } = require("../../lib/index");  ///

const { EMPTY_STRING } = require("../constants"),
      { releaseContextFromDependencyAndDependentNames } = require("../utilities/fileSystem");

const { log } = loggingUtilities,
      { setLogLevel } = log,
      { createReleaseContext, initialiseReleaseContext } = releaseContextUtilities;

function verifyAction(argument, logLevel) {
  const name = argument.replace(/\/$/, EMPTY_STRING),
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
      return;
    }

    const releaseName = name, ///
          dependentName = releaseName,  ///
          releaseContext = releaseContextMap[releaseName],
          verified = releaseContext.isVerified();

    initialiseReleaseContext(dependency, dependentName, verified, context);

    delete context.releaseContextMap;
    delete context.releaseContextFromDependencyAndDependentNames;

    verifyRelease(releaseName, releaseContextMap);
  });
}

module.exports = verifyAction;
