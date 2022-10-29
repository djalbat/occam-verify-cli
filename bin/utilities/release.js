"use strict";

const { arrayUtilities } = require("necessary"),
      { ReleaseContext } = require("../../lib/index"),
      { fileSystemUtilities } = require("occam-file-system");

const { log } = require("../utilities/logging"),
      { PERIOD } = require("../constants");

const { first } = arrayUtilities,
      { loadRelease } = fileSystemUtilities;

function createReleaseContext(name, shortenedVersion, releaseContextMap, dependentNames = []) {
  let releaseContext = releaseContextMap[name] || null;

  if (releaseContext === null) {
    const release = createRelease(name);

    if (release !== null) {
      releaseContext = ReleaseContext.fromLogAndRelease(log, release);
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

function checkCyclicDependencyExists(name, dependentNames, releaseContext) {
  const dependentNamesIncludesName = dependentNames.includes(name),
        cyclicDependencyExists = dependentNamesIncludesName;  ///

  if (cyclicDependencyExists) {
    const firstDependentName = first(dependentNames),
          dependencyNames = dependentNames.concat(firstDependentName),
          dependencyNamesString = dependencyNames.join(`' -> '`);

    releaseContext.error(`There is a cyclic dependency: '${dependencyNamesString}'.`);
  }

  return cyclicDependencyExists;
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

function checkReleaseMatchesShortenedVersion(releaseContext, shortenedVersion) {
  const release = releaseContext.getRelease(),
        releaseMatchesShortedVersion = release.matchShortenedVersion(shortenedVersion);

  if (!releaseMatchesShortedVersion) {
    const name = releaseContext.getName(),
          version = releaseContext.getVersion(),
          versionString = version.toString(),
          shortenedVersionString = shortenedVersion.toString();

    releaseContext.error(`The '${name}' package's version of ${versionString} does not match the dependency's shortened version of ${shortenedVersionString}.`);
  }

  return releaseMatchesShortedVersion;
}
