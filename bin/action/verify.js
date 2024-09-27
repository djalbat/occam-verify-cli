"use strict";

const { Dependency } = require("occam-entities"),
      { verifyRelease, releaseContextUtilities } = require("../../lib/index");  ///

const { trimTrailingSlash } = require("../utilities/string"),
      { releaseContextFromDependency } = require("../utilities/releaseContext");

const { createReleaseContext, initialiseReleaseContext } = releaseContextUtilities;

function verifyAction(argument, verbose, log) {
  const name = trimTrailingSlash(argument), ///
        context = {},
        dependency = Dependency.fromName(name),
        dependentNames = [],
        releaseContextMap = {};

  Object.assign(context, {
    log,
    verbose,
    releaseContextMap,
    releaseContextFromDependency
  });

  let now = startClock();

  createReleaseContext(dependency, dependentNames, context, (error, success) => {
    if (error) {
      log.error(error);

      stopClock(now, log);

      return;
    }

    if (!success) {
      log.warning(`The '${name}' project or package context cannot be created.`);

      stopClock(now, log);

      return;
    }

    const releaseName = name, ///
          releaseContext = releaseContextMap[releaseName],
          releaseContextInitialised = initialiseReleaseContext(dependency, context);

    if (!releaseContextInitialised) {
      log.warning(`The '${name}' project or package context cannot be initialised.`);

      stopClock(now, log);

      return;
    }

    const releaseContextVerified = releaseContext.isVerified();

    if (releaseContextVerified) {
      log.warning(`The '${name}' package does not need to be verified.`);

      stopClock(now, log);

      return;
    }

    const releaseVerified = verifyRelease(releaseName, releaseContextMap);

    if (!releaseVerified) {
      log.warning(`The '${name}' project or package context cannot be verified.`);
    }

    stopClock(now, log);
  });
}

module.exports = verifyAction;

function startClock() {
  let now;

  now = Date.now();

  return now;
}

function stopClock(now, log) {
  const then = now; ///

  now = Date.now();

  const seconds = Math.floor(now - then) / 1000;

  log.info(`Time ${seconds} seconds.`);
}
