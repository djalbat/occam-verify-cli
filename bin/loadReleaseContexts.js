"use strict";

const { arrayUtilities } = require("necessary"),
      { ReleaseContext } = require("../lib/index"),
      { fileSystemUtilities } = require("occam-file-system");

const log = require("./log");

const { PERIOD } = require("./constants");

const { first } = arrayUtilities,
      { loadRelease } = fileSystemUtilities;

function loadReleaseContexts(releaseName, releaseContextMap = {}, dependentReleaseNames = []) {
  const cyclicDependencyExists = checkCyclicDependencyExists(releaseName, dependentReleaseNames);

  if (!cyclicDependencyExists) {
    const releaseContext = releaseContextMap[releaseName] || null;

    if (releaseContext === null) {
      const topmostDirectoryName = releaseName,  ///
            projectsDirectoryPath = PERIOD,
            release = loadRelease(topmostDirectoryName, projectsDirectoryPath);

      if (release === null) {
        log.error(`The '${releaseName}' package cannot be loaded.`);
      } else {
        const releaseContext = ReleaseContext.fromLogAndRelease(log, release);

        releaseContextMap[releaseName] = releaseContext;

        const dependencies = releaseContext.getDependencies(),
              dependencyReleaseNames = dependencies.mapDependency((dependency) => {
                const dependencyName = dependency.getName(),
                      dependencyReleaseName = dependencyName;  ///

                return dependencyReleaseName;
              });

        dependentReleaseNames = [ ...dependentReleaseNames, releaseName ];  ///

        dependencyReleaseNames.forEach((dependencyReleaseName) => {
          const releaseName = dependencyReleaseName;  ///

          loadReleaseContexts(releaseName, releaseContextMap, dependentReleaseNames);
        });
      }
    }
  }

  return releaseContextMap;
}

module.exports = loadReleaseContexts;

function checkCyclicDependencyExists(releaseName, dependentReleaseNames) {
  const dependentReleaseNamesIncludesReleaseName = dependentReleaseNames.includes(releaseName),
        cyclicDependencyExists = dependentReleaseNamesIncludesReleaseName;  ///

  if (cyclicDependencyExists) {
    const firstDependentReleaseName = first(dependentReleaseNames),
          releaseNames = dependentReleaseNames.concat(firstDependentReleaseName),
          releaseNamesString = releaseNames.join(`' -> '`);

    log.error(`There is a cyclic dependency: '${releaseNamesString}'.`);
  }

  return cyclicDependencyExists;
}
