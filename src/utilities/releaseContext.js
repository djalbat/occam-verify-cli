"use strict";

import { arrayUtilities } from "necessary";
import { ReleaseContext } from "occam-languages";
import { Entries, metaJSONUtilities } from "occam-model";

import { asyncEveryDependency } from "../utilities/dependency";

const { last } = arrayUtilities,
      { isMetaJSONFileValid } = metaJSONUtilities;

export async function createReleaseContext(dependency, dependentNames, context) {
  let success = false;

  const { log, releaseContextMap } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext !== null) {
    const releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);

    if (releaseMatchesDependency) {
      log.debug(`The '${releaseName}' context has already been created.`);

      success = true;
    }
  } else {
    const dependencyString = dependency.asString(),
          dependentNamesLength = dependentNames.length;

    if (dependentNamesLength === 0) {
      log.info(`Creating the '${releaseName}' context...`);
    } else {
      const lastDependentName = last(dependentNames),
            dependentName = lastDependentName;  ///

      log.info(`Creating the '${releaseName}' context given the '${dependentName}' dependant's '${dependencyString}' dependency...`);
    }

    const { releaseContextFromDependency } = context,
          releaseContext = await releaseContextFromDependency(dependency, context),
          releaseContextCreated = checkReleaseContextCreated(releaseContext, dependency, context);

    if (releaseContextCreated) {
      const releaseMatchesDependency = checkReleaseMatchesDependency(releaseContext, dependency, dependentNames, context);

      if (releaseMatchesDependency) {
        releaseContextMap[releaseName] = releaseContext;

        success = await createDependencyReleaseContexts(dependency, releaseContext, dependentNames, context);
      }
    }

    success ?
      log.debug(`...created the '${releaseName}' context.`) :
        log.warning(`...unable to create the '${releaseName}' context.`);
  }

  return success;
}

export function releaseContextFromJSON(json, context) {
  const { log, callback } = context,
        { name } = json;

  ({context} = json); ///

  let { entries } = json;

  json = entries; ///

  entries = Entries.fromJSON(json);

  const contextJSON = context;  ///

  json = contextJSON; ///

  const releaseContext = ReleaseContext.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar);

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
      const { log, callback } = context,
            name = project.getName(),
            json = null,
            entries = project.getEntries();

      releaseContext = ReleaseContext.fromLogNameJSONEntriesCallbackAndCustomGrammar(log, name, json, entries, callback, customGrammar);
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

async function createDependencyReleaseContexts(dependency, releaseContext, dependentNames, context) {
  let success;

  const dependencyName = dependency.getName(),
        dependencies = releaseContext.getDependencies();

  dependentNames = [ ...dependentNames, dependencyName ];  ///

  success = await asyncEveryDependency(dependencies, async (dependency) => {
    let success = false;

    const cyclicDependencyExists = checkCyclicDependencyExists(dependency, dependentNames, context);

    if (!cyclicDependencyExists) {
      success = await createReleaseContext(dependency, dependentNames, context);
    }

    return success;
  });

  return success;
}

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

  const shortenedVersion = dependency.getShortedVersion();

  if (shortenedVersion !== null) {
    const entriesMatchShortenedVersion = releaseContext.matchShortenedVersion(shortenedVersion);

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

function initialiseDependencyReleaseContexts(dependency, releaseContext, context) {
  const dependencies = releaseContext.getDependencies();

  dependencies.forEachDependency((dependency) => {  ///
    initialiseReleaseContext(dependency, context);
  });
}
