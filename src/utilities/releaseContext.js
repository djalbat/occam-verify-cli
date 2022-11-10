"use strict";

export function createReleaseContext(releaseName, dependentNames, shortenedVersion, context, callback) {
  const { releaseContextMap } = context,
        releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext !== null) {
    const error = false;

    callback(error);

    return;
  }

  const { releaseContextFromReleaseNameAndShortenedVersion } = context;

  releaseContextFromReleaseNameAndShortenedVersion(releaseName, shortenedVersion, context, (error, releaseContext) => {
    if (error) {
      callback(error);

      return;
    }

    if (releaseContext === null) {
      releaseContextMap[releaseName] = releaseContext;

      callback(error);

      return;
    }

    createDependencyReleaseContexts(releaseContext, dependentNames, context, (error) => {
      if (error) {
        callback(error);

        return;
      }

      releaseContextMap[releaseName] = releaseContext;

      callback(error);
    });
  }, context);
}

export function initialiseReleaseContexts(releaseName, releaseContextMap) {
  const releaseContext = releaseContextMap[releaseName];

  initialiseReleaseContext(releaseContext, releaseContextMap);
}

export default {
  createReleaseContext,
  initialiseReleaseContexts
};

function initialiseReleaseContext(releaseContext, releaseContextMap) {
  if (releaseContext === null) {
    return;
  }

  const initialised = releaseContext.isInitialised();

  if (initialised) {
    return;
  }

  const dependencies = releaseContext.getDependencies();

  dependencies.forEachDependency((dependency) => {
    const name = dependency.getName(),
          releaseName = name, ///
          releaseContext = releaseContextMap[releaseName];

    initialiseReleaseContext(releaseContext, releaseContextMap);
  });

  const dependencyReleaseContexts = retrieveDependencyReleaseContexts(releaseContext, releaseContextMap);

  releaseContext.initialise(dependencyReleaseContexts);
}

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
          const error = null;

          callback(error);
        }

  dependentNames = [ ...dependentNames, releaseName ];  ///

  dependencies.asynchronousForEachDependency((dependency, next, done) => {
    const name = dependency.getName(),
          releaseName = name, //
          shortenedVersion = dependency.getShortedVersion(),
          cyclicDependencyExists = checkCyclicDependencyExists(releaseName, dependentNames, releaseContext);

    if (cyclicDependencyExists) {
      const error = null;

      callback(error);

      return;
    }

    createReleaseContext(releaseName, dependentNames, shortenedVersion, context, (error) => {
      if (error) {
        callback(error);

        return;
      }

      next();
    });
  }, done);
}

function retrieveDependencyReleaseContexts(releaseContext, releaseContextMap, dependencyReleaseContexts = []) {
  const dependencies = releaseContext.getDependencies();

  dependencies.forEachDependency((dependency) => {
    const dependencyName = dependency.getName(),
          dependencyReleaseName = dependencyName, ///
          dependencyReleaseContext = releaseContextMap[dependencyReleaseName];

    if (dependencyReleaseContext === null) {
      return;
    }

    const dependencyReleaseContextsIncludesDependencyReleaseContext = dependencyReleaseContexts.includes(dependencyReleaseContext);

    if (!dependencyReleaseContextsIncludesDependencyReleaseContext) {
      const releaseContext = dependencyReleaseContext;  ///

      retrieveDependencyReleaseContexts(releaseContext, releaseContextMap, dependencyReleaseContexts);

      dependencyReleaseContexts.push(dependencyReleaseContext);
    }
  });

  return dependencyReleaseContexts;
}
