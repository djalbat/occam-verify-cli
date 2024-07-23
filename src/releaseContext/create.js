"use strict";

import { last } from "../utilities/array";

export default function createReleaseContext(dependency, dependentNames, context, callback) {
  const { log, releaseContextMap } = context,
        dependencyName = dependency.getName(),
        dependencyString = dependency.asString(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName] || null;

  log.debug(`Creating the '${releaseName}' context given the '${dependencyString}' dependency...`);

  if (releaseContext !== null) {
    const error = null,
          version = releaseContext.getVersion(),
          versionString = version.toString();

    log.debug(`...already created the '${releaseName}:${versionString}' context.`);

    callback(error);

    return;
  }

  const { releaseContextFromDependency } = context;

  releaseContextFromDependency(dependency, context, (error, releaseContext) => {
    if (error) {
      callback(error);

      return;
    }

    const releaseContextCreated = checkReleaseContextCreated(releaseContext, dependency, context);

    if (!releaseContextCreated) {
      const error = null;

      callback(error);

      return;
    }

    const releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);

    if (!releaseMatchesDependency) {
      const error = null;

      callback(error);

      return;
    }

    const version = releaseContext.getVersion(),
          versionString = version.toString();

    releaseContextMap[releaseName] = releaseContext;

    createDependencyReleaseContexts(dependency, dependentNames, context, (error) => {
      if (error) {
        callback(error);

        return;
      }

      log.info(`...created the '${releaseName}@${versionString}' context.`);

      callback(error);
    });
  }, context);
}

function checkReleaseContextCreated(releaseContext, dependency, context) {
  const releaseContextCreated = (releaseContext !== null);

  if (!releaseContextCreated) {
    const { log } = context,
          dependencyName = dependency.getName(),
          releaseName = dependencyName; ///

    log.error(`The '${releaseName}' context could not be created.`);
  }

  return releaseContextCreated;
}

function checkCyclicDependencyExists(dependency, dependentNames, context) {
  const dependencyName = dependency.getName(),
        dependentNamesIncludesDependencyName = dependentNames.includes(dependencyName),
        cyclicDependencyExists = dependentNamesIncludesDependencyName;  ///

  if (cyclicDependencyExists) {
    const { log } = context,
          firstDependentName = first(dependentNames),
          dependencyNames = [  ///
            ...dependentNames,
            firstDependentName
          ],
          dependencyNamesString = dependencyNames.join(`' -> '`);

    log.error(`There is a cyclic dependency: '${dependencyNamesString}'.`);
  }

  return cyclicDependencyExists;
}

function checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context) {
  let releaseMatchesDependency = true;

  const entries = releaseContext.getEntries(),
        shortenedVersion = dependency.getShortedVersion();

  if (shortenedVersion !== null) {
    const entriesMatchShortenedVersion = entries.matchShortenedVersion(shortenedVersion);

    if (!entriesMatchShortenedVersion) {
      const { log } = context,
            version = releaseContext.getVersion(),
            lastDependentName = last(dependentNames),
            dependentName = lastDependentName,  ///
            versionString = version.toString(),
            dependencyString = dependency.asString();

      log.error(`Version mismatch: '${dependentName}' requires the '${dependencyString}' dependency but a context with version '${versionString}' has already been created.`);

      releaseMatchesDependency = false;
    }
  }

  return releaseMatchesDependency;
}

function createDependencyReleaseContexts(dependency, dependentNames, context, callback) {
  const { releaseContextMap } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName],
        dependencies = releaseContext.getDependencies();

  dependentNames = [ ...dependentNames, dependencyName ];  ///

  dependencies.asynchronousForEachDependency((dependency, next, done) => {
    const cyclicDependencyExists = checkCyclicDependencyExists(dependency, dependentNames);

    if (cyclicDependencyExists) {
      const error = null;

      callback(error);

      return;
    }

    createReleaseContext(dependency, dependentNames, context, (error) => {
      if (error) {
        callback(error);

        return;
      }

      next();
    });
  }, () => {
    const error = null;

    callback(error);
  });
}
