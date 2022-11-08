"use strict";

import ReleaseContext from "../context/release"

export function createReleaseContext(releaseName, dependentNames, shortenedVersion, context, callback) {
  const { releaseContextMap } = context,
        releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext !== null) {
    const error = false;

    callback(error);

    return;
  }

  const { createRelease } = context;

  createRelease(releaseName, (release) => {
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
        releaseContextMap[releaseName] = releaseContext;
      }

      callback(error);
    });
  }, context);
}

export default {
  createReleaseContext
};

function checkCyclicDependencyExists(releaseName, dependentNames, releaseContext) {
  const dependentNamesIncludesReleaseName = dependentNames.includes(releaseName),
        cyclicDependencyExists = dependentNamesIncludesReleaseName;  ///

  if (cyclicDependencyExists) {
    const firstDependentName = first(dependentNames),
          dependencyNames = dependentNames.concat(firstDependentName),
          dependencyNamesString = dependencyNames.join(`' -> '`);

    releaseContext.error(`There is a cyclic dependency: '${dependencyNamesString}'.`);
  }

  return cyclicDependencyExists;
}

function createDependencyReleaseContexts(releaseContext, dependentNames, context, callback) {
  const releaseName = releaseContext.getReleaseName(),
        dependencies = releaseContext.getDependencies(),
        done = () => {
          const error = false;

          callback(error);
        }

  dependentNames = [ ...dependentNames, releaseName ];  ///

  dependencies.asynchronousForEachDependency((dependency, next, done) => {
    const name = dependency.getName(),
          releaseName = name, //
          shortenedVersion = dependency.getShortedVersion(),
          cyclicDependencyExists = checkCyclicDependencyExists(releaseName, dependentNames, releaseContext);

    if (cyclicDependencyExists) {
      const error = true;

      callback(error);

      return;
    }

    createReleaseContext(releaseName, dependentNames, shortenedVersion, context, (error) => {
      if (error) {
        error = !!error;  ///

        callback(error);

        return;
      }

      next();
    });
  }, done);
}

function checkReleaseMatchesShortenedVersion(releaseContext, shortenedVersion) {
  const release = releaseContext.getRelease(),
        releaseMatchesShortedVersion = release.matchShortenedVersion(shortenedVersion);

  if (!releaseMatchesShortedVersion) {
    const version = releaseContext.getVersion(),
          releaseName = releaseContext.getReleaseName(),
          versionString = version.toString(),
          shortenedVersionString = shortenedVersion.toString();

    releaseContext.error(`The '${releaseName}' package's version of ${versionString} does not match the dependency's shortened version of ${shortenedVersionString}.`);
  }

  return releaseMatchesShortedVersion;
}
