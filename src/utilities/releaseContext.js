"use strict";

import { arrayUtilities } from "necessary";
import { Entries, metaJSONUtilities } from "occam-model";

import ReleaseContext from "../context/release";

const { last } = arrayUtilities,
      { isMetaJSONFileValid } = metaJSONUtilities;

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
        dependencyString = dependency.asString(),
        dependentNamesLength = dependentNames.length;

  if (dependentNamesLength === 0) {
    log.info(`Creating the '${releaseName}' context...`);
  } else {
    const lastDependentName = last(dependentNames),
          dependentName = lastDependentName;  ///

    log.info(`Creating the '${releaseName}' context given the '${dependentName}' dependant's '${dependencyString}' dependency...`);
  }

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

      log.debug(`...created the '${releaseName}' context.`);

      callback(error, success);
    });
  }, context);
}

export function releaseContextFromJSON(json, context) {
  const { log } = context,
        { name } = json;

  ({context} = json); ///

  let { entries } = json;

  json = entries; ///

  entries = Entries.fromJSON(json);

  const contextJSON = context;  ///

  json = contextJSON; ///

  const releaseContext = ReleaseContext.fromLogNameJSONAndEntries(log, name, json, entries);

  return releaseContext;
}

export function initialiseReleaseContext(dependency, context) {
  const { releaseContextMap } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext === null) {
    const { log } = context;

    log.warning(`Unable to initialise the '${dependencyName}' context because it has not been created.`);
  } else {
    const releaseContextInitialised = releaseContext.isInitialised();

    if (!releaseContextInitialised) {
      initialiseDependencyReleaseContexts(dependency, releaseContext, context);

      const { log } = context,
            releaseContexts = retrieveReleaseContexts(releaseContext, releaseContextMap);

      log.info(`Initialising the '${dependencyName}' context...`);

      releaseContext.initialise(releaseContexts);

      log.debug(`...initialised the '${dependencyName}' context.`);
    }
  }
}

export function releaseContextFromProject(project, context) {
  let releaseContext = null;

  const metaJSONFile = project.getMetaJSONFile();

  if (metaJSONFile !== null) {
    const metaJSONFileValid = isMetaJSONFileValid(metaJSONFile);

    if (metaJSONFileValid) {
      const { log } = context,
            name = project.getName(),
            json = null,
            entries = project.getEntries();

      releaseContext = ReleaseContext.fromLogNameJSONAndEntries(log, name, json, entries);
    }
  }

  return releaseContext;
}

export default {
  createReleaseContext,
  releaseContextFromJSON,
  initialiseReleaseContext,
  releaseContextFromProject
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

    log.warning(`There is a cyclic dependency, '${dependencyNamesString}'.`);
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

      log.warning(`The '${dependentName}' dependent requires the '${dependencyString}' dependency but a context with version '${versionString}' was provided.`);

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
  const dependencies = releaseContext.getDependencies();

  dependencies.forEachDependency((dependency) => {  ///
    initialiseReleaseContext(dependency, context);
  });
}
