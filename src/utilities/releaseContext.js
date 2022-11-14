"use strict";

export function createReleaseContext(dependency, dependentNames, context, callback) {
  const { releaseContextMap } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext !== null) {
    const error = null;

    callback(error);

    return;
  }

  const { releaseContextFromDependencyAndDependentNames } = context;

  releaseContextFromDependencyAndDependentNames(dependency, dependentNames, context, (error, releaseContext) => {
    if (error) {
      callback(error);

      return;
    }

    releaseContextMap[releaseName] = releaseContext;

    if (releaseContext === null) {
      const { log } = context;

      log.error(`The '${releaseName}' package could not be created.`);

      callback(error);

      return;
    }

    createDependencyReleaseContexts(dependency, dependentNames, context, callback);
  }, context);
}

export function initialiseReleaseContext(dependency, context) {
  const { releaseContextMap } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext === null) {
    return;
  }

  const initialised = releaseContext.isInitialised();

  if (initialised) {
    return;
  }

  const dependencies = releaseContext.getDependencies();

  dependencies.forEachDependency((dependency) => {
    initialiseReleaseContext(dependency, context);
  });

  const dependencyReleaseContexts = retrieveDependencyReleaseContexts(dependency, context);

  releaseContext.initialise(dependencyReleaseContexts);
}

export default {
  createReleaseContext,
  initialiseReleaseContext
};

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

function createDependencyReleaseContexts(dependency, dependentNames, context, callback) {
  const { releaseContextMap } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName],
        dependencies = releaseContext.getDependencies(),
        done = () => {
          const error = null;

          callback(error);
        }

  dependentNames = [ ...dependentNames, dependencyName ];  ///

  dependencies.asynchronousForEachDependency((dependency, next, done) => {
    const cyclicDependencyExists = checkCyclicDependencyExists(dependency, dependentNames, context);

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
  }, done);
}

function retrieveDependencyReleaseContexts(dependency, context, dependencyReleaseContexts = []) {
  const { releaseContextMap } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName],
        dependencies = releaseContext.getDependencies();

  dependencies.forEachDependency((dependency) => {
    const dependencyName = dependency.getName(),
          releaseName = dependencyName, ///
          releaseContext = releaseContextMap[releaseName] || null;

    if (releaseContext === null) {
      return;
    }

    const dependencyReleaseContextsIncludesReleaseContext = dependencyReleaseContexts.includes(releaseContext);

    if (dependencyReleaseContextsIncludesReleaseContext) {
      return;
    }

    retrieveDependencyReleaseContexts(dependency, context, dependencyReleaseContexts);

    dependencyReleaseContexts.push(releaseContext);
  });

  return dependencyReleaseContexts;
}
