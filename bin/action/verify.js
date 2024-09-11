"use strict";

const { Dependency } = require("occam-entities"),
      { verifyRelease, createReleaseContext, verifyReleaseContext } = require("../../lib/index");  ///

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
          dependentName = releaseName,  ///
          releaseContext = releaseContextMap[releaseName] || null;

    if (releaseContext === null) {
      log.warning(`The '${name}' project or package does not exist.`);

      return;
    }

    const released = releaseContext.isReleased();

    if (released) {
      log.warning(`The '${name}' package does not need to be verified.`);

      return;
    }

    const dependentReleased = released; ///

    verifyReleaseContext(dependency, dependentName, dependentReleased, context);

    let now;

    now = Date.now();

    verifyRelease(releaseName, releaseContextMap);

    const then = now; ///

    now = Date.now();

    const seconds = Math.floor(now - then) / 1000;

    log.info(`Verification time ${seconds} seconds.`);
  });
}

module.exports = verifyAction;
