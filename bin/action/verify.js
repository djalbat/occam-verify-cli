"use strict";

const { Dependency } = require("occam-entities"),
      { verifyRelease, createReleaseContext, initialiseReleaseContext } = require("../../lib/index");  ///

const { trimTrailingSlash } = require("../utilities/string"),
      { releaseContextFromDependency } = require("../utilities/releaseContext");

function verifyAction(argument, log) {
  const name = trimTrailingSlash(argument), ///
        context = {},
        dependency = Dependency.fromName(name),
        dependentNames = [],
        releaseContextMap = {};

  Object.assign(context, {
    log,
    releaseContextMap,
    releaseContextFromDependency
  });

  createReleaseContext(dependency, dependentNames, context, (error) => {
    if (error) {
      log.error(error);

      return;
    }

    const releaseName = name, ///
          releaseContext = releaseContextMap[releaseName] || null;

    if (releaseContext === null) {
      log.warning(`The '${name}' project or package context cannot be created.`);

      return;
    }

    const releaseContextInitialised = initialiseReleaseContext(dependency, context);

    if (!releaseContextInitialised) {
      log.warning(`The '${name}' project or package context cannot be initialised.`);

      return;
    }

    const releaseContextVerified = releaseContext.isVerified();

    if (releaseContextVerified) {
      log.warning(`The '${name}' package does not need to be verified.`);

      return;
    }

    const releaseVerified = verifyRelease(releaseName, releaseContextMap);

    if (!releaseVerified) {
      log.warning(`The '${name}' project or package context cannot be verified.`);
    }
  });
}

module.exports = verifyAction;
