"use strict";

import { last } from "../utilities/array";

export function createReleaseContext(dependency, dependentNames, context, callback) {
  const { log, releaseContextMap } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext !== null) {
    const error = null,
          releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);

    let success;

    if (releaseMatchesDependency) {
      log.debug(`Already created the '${releaseName}' context.`);

      success = true;
    } else {
      success = false;
    }

    callback(error, success);

    return;
  }

  const { releaseContextFromDependency } = context,
        dependencyString = dependency.asString();

  log.debug(`Creating the '${releaseName}' context given the '${dependencyString}' dependency...`);

  releaseContextFromDependency(dependency, context, (error, releaseContext) => {
    if (error) {
      callback(error);

      return;
    }

    const releaseContextCreated = checkReleaseContextCreated(releaseContext, dependency, context);

    if (!releaseContextCreated) {
      const error = null,
            success = false;

      callback(error, success);

      return;
    }

    const releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);

    if (!releaseMatchesDependency) {
      const error = null,
            success = false;

      callback(error, success);

      return;
    }

    releaseContextMap[releaseName] = releaseContext;

    log.info(`...created the '${releaseName}' context.`);

    createDependencyReleaseContexts(dependency, releaseContext, dependentNames, context, (error, success) => {
      if (error) {
        callback(error);

        return;
      }

      if (!success) {
        log.warning(`...unable to create the '${releaseName}' context.`);

        callback(error, success);

        return;
      }

      callback(error, success);
    });
  }, context);
}

export function initialiseReleaseContext(dependency, context) {
  let releaseContextInitialised = false;

  const { releaseContextMap } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext === null) {
    const { log } = context;

    log.warning(`Unable to initialise the '${dependencyName}' context because it has not been created.`);
  } else {
    releaseContextInitialised = releaseContext.isInitialised();

    if (!releaseContextInitialised) {
      const dependencyReleaseContextsInitialised = initialiseDependencyReleaseContexts(dependency, releaseContext, context);

      if (dependencyReleaseContextsInitialised) {
        const { log } = context,
              releaseContexts = retrieveReleaseContexts(releaseContext, releaseContextMap);

        log.debug(`Initialising the '${dependencyName}' context...`);

        releaseContext.initialise(releaseContexts);

        log.info(`...initialised the '${dependencyName}' context.`);
      }
    }
  }

  return releaseContextInitialised;
}

export default {
  createReleaseContext,
  initialiseReleaseContext
};

function retrieveReleaseContexts(releaseContext, releaseContextMap) {
  const releaseContexts = [],
        remainingReleaseContext = releaseContext,  ///
        remainingReleaseContexts = [
          remainingReleaseContext
        ];

  let remainingReleaseContextsLength = remainingReleaseContexts.length;

  while (remainingReleaseContextsLength > 0) {
    const remainingReleaseContext = remainingReleaseContexts.shift(),
          releaseContext = remainingReleaseContext;  ///

    releaseContexts.push(releaseContext);

    const dependencies = releaseContext.getDependencies();

    dependencies.forEachDependency((dependency) => {
      const dependencyName = dependency.getName(),
            releaseName = dependencyName, ///
            releaseContext = releaseContextMap[releaseName],
            releaseContextsIncludesReleaseContext = releaseContexts.includes(releaseContext),
            remainingReleaseContextsIncludesReleaseContext = remainingReleaseContexts.includes(releaseContext);

      if (!releaseContextsIncludesReleaseContext && !remainingReleaseContextsIncludesReleaseContext) {
        const remainingReleaseContext = releaseContext; ///

        remainingReleaseContexts.push(remainingReleaseContext);
      }
    });

    remainingReleaseContextsLength = remainingReleaseContexts.length;
  }

  return releaseContexts;
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
      const error = null,
            success = false;

      callback(error, success);

      callback = null;

      done();

      return;
    }

    createReleaseContext(dependency, dependentNames, context, (error, success) => {
      if (error) {
        callback(error);

        callback = null;

        done();

        return;
      }

      if (!success) {
        callback(error, success);

        callback = null;

        done();

        return;
      }

      next();
    });
  }, done);

  function done() {
    if (callback !== null) {
      const error = null,
            success = true;

      callback(error, success);
    }
  }
}

function initialiseDependencyReleaseContexts(dependency, releaseContext, context) {
  const dependencies = releaseContext.getDependencies(),
        dependencyReleaseContextsInitialised = dependencies.everyDependency((dependency) => {  ///
          const releaseContextInitialised = initialiseReleaseContext(dependency, context);

          if (releaseContextInitialised) {
            return true;
          }
        });

  return dependencyReleaseContextsInitialised;
}
