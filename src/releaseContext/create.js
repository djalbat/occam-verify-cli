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
    const error = null;

    log.debug(`...already created the '${releaseName}' context.`);

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

    releaseContextMap[releaseName] = releaseContext;

    log.info(`...created the '${releaseName}' context.`);

    createDependencyReleaseContexts(dependency, releaseContext, dependentNames, context, (error) => {
      if (error) {
        callback(error);

        return;
      }

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

    log.warning(`The '${releaseName}' context could not be created. Perhaps the 'meta.json' file is missing or invalid. Or there could be a dependency mismatch.`);
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

    log.warning(`There is a cyclic dependency: '${dependencyNamesString}'.`);
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

      log.warning(`Version mismatch: The '${dependentName}' dependent requires the '${dependencyString}' dependency but a context with version '${versionString}' was provided.`);

      releaseMatchesDependency = false;
    }
  }

  return releaseMatchesDependency;
}

function createDependencyReleaseContexts(dependency, releaseContext, dependentNames, context, callback) {
  const dependencyName = dependency.getName(),
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
