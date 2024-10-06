"use strict";

const { Dependency } = require("occam-entities"),
      { verifyRelease, releaseContextUtilities } = require("../../lib/index");  ///

const { trimTrailingSlash } = require("../utilities/string"),
      { releaseContextFromDependency } = require("../utilities/releaseContext");

const { createReleaseContext, initialiseReleaseContext } = releaseContextUtilities;

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
          released = releaseContext.isReleased();

    if (released) {
      log.warning(`The '${name}' package does not need to be verified.`);

      stopClock(now, log);

      return;
    }

    initialiseReleaseContext(dependency, context);

    const dependentName = null,
          dependentReleased = false,
          releaseVerified = verifyRelease(releaseName, dependentName, dependentReleased, releaseContextMap);

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
