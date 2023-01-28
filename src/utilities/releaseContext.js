"use strict";

import { last } from "../utilities/array";

export function createReleaseContext(dependency, dependentNames, context, callback) {
  const { releaseContextMap } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext !== null) {
    const error = checkReleaseMatchesDependency(dependency, dependentNames, releaseContext);

    callback(error);

    return;
  }

  const { releaseContextFromDependencyAndDependentNames } = context;

  releaseContextFromDependencyAndDependentNames(dependency, dependentNames, context, (error, releaseContext) => {
    if (error) {
      callback(error);

      return;
    }

    if (releaseContext === null) {
      const error = `The '${releaseName}' package could not be created.`;

      callback(error);

      return;
    }

    error = checkReleaseMatchesDependency(dependency, dependentNames, releaseContext);

    if (error) {
      callback(error);

      return;
    }

    releaseContextMap[releaseName] = releaseContext;

    createDependencyReleaseContexts(dependency, dependentNames, context, callback);
  }, context);
}

export function initialiseReleaseContext(dependency, dependentName, verified, context, callback) {
  let error = null;

  const { releaseContextMap } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext === null) {
    callback(error);

    return;
  }

  const initialised = releaseContext.isInitialised();

  if (initialised) {
    callback(error);

    return;
  }

  const releaseContextVerified = releaseContext.isVerified();

  if (verified) {
    if (!releaseContextVerified) {
      error = `Unable to initialise the '${releaseName}' dependency's context because its '${dependentName}' dependent is a package.`;

      callback(error);

      return;
    }
  }

  dependentName = releaseName;  ///

  verified = releaseContextVerified;  ///

  const dependencies = releaseContext.getDependencies();

  dependencies.asynchronousForEachDependency((dependency, next, done) => {
    initialiseReleaseContext(dependency, dependentName, verified, context, (error) => {
      if (error) {
        callback(error);

        return;
      }

      next();
    });
  }, done);

  function done() {
    const dependencyReleaseContexts = retrieveDependencyReleaseContexts(dependency, context);

    releaseContext.initialise(dependencyReleaseContexts);

    callback(error);
  }
}

export default {
  createReleaseContext,
  initialiseReleaseContext
};

function checkCyclicDependencyExists(dependency, dependentNames) {
  let error = null;

  const dependencyName = dependency.getName(),
        dependentNamesIncludesDependencyName = dependentNames.includes(dependencyName),
        cyclicDependencyExists = dependentNamesIncludesDependencyName;  ///

  if (cyclicDependencyExists) {
    const firstDependentName = first(dependentNames),
          dependencyNames = [  ///
            ...dependentNames,
            firstDependentName
          ],
          dependencyNamesString = dependencyNames.join(`' -> '`);

    error =`There is a cyclic dependency: '${dependencyNamesString}'.`;
  }

  return error;
}

function checkReleaseMatchesDependency(dependency, dependentNames, releaseContext) {
  let error = null;

  const entries = releaseContext.getEntries(),
        shortenedVersion = dependency.getShortedVersion();

  if (shortenedVersion !== null) {
    const entriesMatchShortenedVersion = entries.matchShortenedVersion(shortenedVersion);

    if (!entriesMatchShortenedVersion) {
      const version = releaseContext.getVersion(),
            versionString = version.toString(),
            lastDependentName = last(dependentNames),
            dependentName = lastDependentName,  ///
            dependencyName = dependency.getName(),
            shortenedVersion = dependency.getShortedVersion(),
            shortenedVersionString = shortenedVersion.toString();

      error = `Version mismatch: '${dependentName}' requires '${dependencyName}' to be version ${shortenedVersionString}.0 or higher but version ${versionString} has been supplied.`;
    }
  }

  return error;
}

function createDependencyReleaseContexts(dependency, dependentNames, context, callback) {
  const { releaseContextMap } = context,
        dependencyName = dependency.getName(),
        releaseName = dependencyName, ///
        releaseContext = releaseContextMap[releaseName],
        dependencies = releaseContext.getDependencies();

  dependentNames = [ ...dependentNames, dependencyName ];  ///

  dependencies.asynchronousForEachDependency((dependency, next, done) => {
    const error = checkCyclicDependencyExists(dependency, dependentNames);

    if (error) {
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
