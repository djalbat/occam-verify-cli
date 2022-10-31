"use strict";

const { fileSystemUtilities } = require("occam-file-system"),
      { ReleaseContext, verificationUtilities } = require("../../lib/index");

const callbacks = require("../callbacks");

const { log } = require("../utilities/logging"),
      { PERIOD } = require("../constants");

const { loadRelease } = fileSystemUtilities,
      { checkCyclicDependencyExists, checkReleaseMatchesShortenedVersion} = verificationUtilities;

function createReleaseContext(name, shortenedVersion, releaseContextMap, dependentNames = []) {
  let releaseContext = releaseContextMap[name] || null;

  if (releaseContext === null) {
    const release = createRelease(name);

    if (release !== null) {
      releaseContext = ReleaseContext.fromLogReleaseAndCallbacks(log, release, callbacks);
    }
  }

  if (releaseContext !== null) {
    const releaseMatchesShortedVersion = checkReleaseMatchesShortenedVersion(releaseContext, shortenedVersion),
          dependencyReleaseContextsCreated = createDependencyReleaseContexts(releaseContext, releaseContextMap, dependentNames);

    if (!releaseMatchesShortedVersion || !dependencyReleaseContextsCreated) {
      releaseContext = null;
    }
  }

  releaseContextMap[name] = releaseContext;

  return releaseContext;
}

module.exports = {
  createReleaseContext
};

function createRelease(name) {
  const topmostDirectoryName = name, ///
        projectsDirectoryPath = PERIOD;

  let release = loadRelease(topmostDirectoryName, projectsDirectoryPath);

  if (release === null) {
    log.error(`The '${name}' package cannot be loaded.`);
  }

  return release;
}

function createDependencyReleaseContexts(releaseContext, releaseContextMap, dependentNames = []) {
  const name = releaseContext.getName(),
        dependencies = releaseContext.getDependencies();

  dependentNames = [ ...dependentNames, name ];  ///

  const dependencyReleaseContextsCreated = dependencies.everyDependency((dependency) => {
    const name = dependency.getName(),
          shortenedVersion = dependency.getShortedVersion(),
          cyclicDependencyExists = checkCyclicDependencyExists(name, dependentNames, releaseContext);

    if (!cyclicDependencyExists) {
      const releaseContext = createReleaseContext(name, shortenedVersion, releaseContextMap, dependentNames);

      if (releaseContext !== null) {
        return true;
      }
    }
  });

  return dependencyReleaseContextsCreated;
}
