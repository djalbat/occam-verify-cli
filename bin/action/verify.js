"use strict";

const { Dependency } = require("occam-file-system"),
      { loggingUtilities } = require("necessary"),
      { verifyRelease, releaseContextUtilities } = require("../../lib/index");  ///

const Messages = require("../messages");

const { trimTrailingSlash } = require("../utilities/string"),
      { releaseContextFromDependencyAndDependentNames } = require("../utilities/releaseContext");

const { log } = loggingUtilities,
      { setLogLevel } = log,
      { createReleaseContext, initialiseReleaseContext } = releaseContextUtilities;

function verifyAction(argument, logLevel) {
  const name = trimTrailingSlash(argument), ///
        context = {},
        messages = Messages.fromLogLevel(logLevel),
        dependency = Dependency.fromName(name),
        dependentNames = [],
        releaseContextMap = {};

  setLogLevel(logLevel);

  Object.assign(context, {
    log,
    messages,
    releaseContextMap,
    releaseContextFromDependencyAndDependentNames
  });

  createReleaseContext(dependency, dependentNames, context, (error) => {
    if (error) {
      log.error(error);

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

    messages.toConsole();
  });
}

module.exports = verifyAction;
