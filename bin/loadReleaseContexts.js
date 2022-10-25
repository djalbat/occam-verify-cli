"use strict";

const { Release } = require("occam-open-cli");
const { arrayUtilities, loggingUtilities } = require("necessary");

const ReleaseContext = require("../lib/index");

const { log } = loggingUtilities,
      { first } = arrayUtilities;

function loadReleaseContexts(releaseName, releaseContextMap = {}, dependentReleaseNames = []) {
  const cyclicDependencyExists = checkCyclicDependencyExists(releaseName, dependentReleaseNames);

  if (!cyclicDependencyExists) {
    const releaseContext = releaseContextMap[releaseName] || null;

    if (releaseContext === null) {
      const release = Release.from(), ///
            releaseContext = ReleaseContext.fromLogAndRelease(log, release);

      releaseContextMap[releaseName] = releaseContext;

      const dependencies = releaseContext.getDependencies(),
            dependencyReleaseNames = dependencies.map((dependency) => {
              const dependencyName = dependency.getName(),
                    dependencyReleaseName = dependencyName;  ///

              return dependencyReleaseName;
            })

      dependentReleaseNames = [ ...dependentReleaseNames, releaseName ];  ///

      dependencyReleaseNames.forEach((dependencyReleaseName) => {
        const releaseName = dependencyReleaseName;  ///

        loadReleaseContexts(releaseName, releaseContextMap, dependentReleaseNames);
      });
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
