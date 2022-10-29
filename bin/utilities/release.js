"use strict";

const { arrayUtilities } = require("necessary"),
      { ReleaseContext } = require("../../lib/index"),
      { fileSystemUtilities } = require("occam-file-system");

const { log } = require("../utilities/logging"),
      { PERIOD } = require("../constants");

const { first } = arrayUtilities,
      { loadRelease } = fileSystemUtilities;

function createReleaseContext(releaseName, releaseContextMap, dependentNames = []) {
  let releaseContext = releaseContextMap[releaseName] || null;

  if (releaseContext !== null) {
    return;
  }

  const topmostDirectoryName = releaseName, ///
        projectsDirectoryPath = PERIOD,
        release = loadRelease(topmostDirectoryName, projectsDirectoryPath);

  if (release === null) {
    log.error(`The '${releaseName}' package cannot be loaded.`);
  } else {
    const releaseContext = ReleaseContext.fromLogAndRelease(log, release);

    createDependencyReleaseContexts(releaseContext, releaseContextMap, dependentNames);

    releaseContextMap[releaseName] = releaseContext;
  }
}

function createDependencyReleaseContexts(releaseContext, releaseContextMap, dependentNames = []) {
  const name = releaseContext.getName(),
        dependencies = releaseContext.getDependencies(),
        dependencyNames = dependencies.mapDependency((dependency) => {
          const dependencyName = dependency.getName();

          return dependencyName;
        }),
        releaseName = name; ///

  dependentNames = [ ...dependentNames, releaseName ];  ///

  dependencyNames.forEach((dependencyName) => {
    const cyclicDependencyExists = checkCyclicDependencyExists(dependencyName, dependentNames, releaseContext);

    if (cyclicDependencyExists) {
      return;
    }

    const releaseName = dependencyName; ///

    createReleaseContext(releaseName, releaseContextMap, dependentNames);
  });
}

module.exports = {
  createReleaseContext
};

function checkCyclicDependencyExists(dependencyName, dependentNames, releaseContext) {
  const dependentNamesIncludesDependencyName = dependentNames.includes(dependencyName),
        cyclicDependencyExists = dependentNamesIncludesDependencyName;  ///

  if (cyclicDependencyExists) {
    const firstDependentName = first(dependentNames),
          dependencyNames = dependentNames.concat(firstDependentName),
          dependencyNamesString = dependencyNames.join(`' -> '`);

    releaseContext.error(`There is a cyclic dependency: '${dependencyNamesString}'.`);
  }

  return cyclicDependencyExists;
}
