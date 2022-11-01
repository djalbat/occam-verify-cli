"use strict";

import ReleaseContext from "../context/release"

export function createReleaseContext(name, dependentNames, shortenedVersion, context, callback) {
  const { releaseContextMap } = context,
        releaseContext = releaseContextMap[name] || null;

  if (releaseContext !== null) {
    const error = false;

    callback(error);

    return;
  }

  const { createRelease } = context;

  createRelease(name, (release) => {
    if (release === null) {
      const error = true;

      callback(error);

      return;
    }

    const { log, callbacks } = context,
          releaseContext = ReleaseContext.fromLogReleaseAndCallbacks(log, release, callbacks),
          releaseMatchesShortedVersion = checkReleaseMatchesShortenedVersion(releaseContext, shortenedVersion);

    if (!releaseMatchesShortedVersion) {
      const error = true;

      callback(error);

      return;
    }

    createDependencyReleaseContexts(releaseContext, dependentNames, context, (error) => {
      if (!error) {
        releaseContextMap[name] = releaseContext;
      }

      callback(error);
    });
  }, context);
}

export default {
  createReleaseContext
};

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

function createDependencyReleaseContexts(releaseContext, dependentNames, context, callback) {
  let noError = true;

  const name = releaseContext.getName(),
        dependencies = releaseContext.getDependencies();

  dependentNames = [ ...dependentNames, name ];  ///

  dependencies.asynchronousForEachDependency((dependency, next, done) => {
    const name = dependency.getName(),
          shortenedVersion = dependency.getShortedVersion(),
          cyclicDependencyExists = checkCyclicDependencyExists(name, dependentNames, releaseContext);

    if (cyclicDependencyExists) {
      noError = false;

      done();

      return;
    }

    createReleaseContext(name, dependentNames, shortenedVersion, context, (error) => {
      if (error) {
        noError = false;

        done();

        return;
      }

      next();
    });
  }, done);

  function done() {
    const error = !noError;

    callback(error);
  }
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
