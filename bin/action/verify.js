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

  createReleaseContext(dependency, dependentNames, context, (error) => {
    if (error) {
      log.error(error);

      return;
    }

    const releaseName = name, ///
          dependentName = releaseName,  ///
          releaseContext = releaseContextMap[releaseName],
          released = releaseContext.isReleased();

    if (released) {
      const error = `The '${name}' package does not need to be verified.`;

      log.warning(error);

      return;
    }

    const dependentReleased = released; ///

    initialiseReleaseContext(dependency, dependentName, dependentReleased, context, (error) => {
      if (error) {
        log.error(error);

        return;
      }

      delete context.releaseContextMap;
      delete context.releaseContextFromDependency;

      let now;

      now = Date.now();

      verifyRelease(releaseName, releaseContextMap);

      const then = now; ///

      now = Date.now();

      const seconds = Math.floor(now - then) / 1000;

      log.info(`Verification time ${seconds} seconds.`);
    });
  });
}

module.exports = verifyAction;
