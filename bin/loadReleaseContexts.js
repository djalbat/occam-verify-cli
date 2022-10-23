"use strict";

const { arrayUtilities, loggingUtilities } = require("necessary");

const FileSystemReleaseContext = require("./context/release/fileSystem");

const { log } = loggingUtilities,
      { first } = arrayUtilities;

function loadReleaseContexts(releaseName, releaseContextMap = {}, dependentReleaseNames = []) {
  const cyclicDependencyExists = checkCyclicDependencyExists(releaseName, dependentReleaseNames);

  if (!cyclicDependencyExists) {
    const releaseContext = releaseContextMap[releaseName] || null;

    if (releaseContext === null) {
      const fileSystemReleaseContext = FileSystemReleaseContext.fromReleaseNameAndLog(releaseName, log),
            releaseContext = fileSystemReleaseContext;  ///

      releaseContextMap[releaseName] = releaseContext;

      const dependencyReleaseNames = releaseContext.getDependencyReleaseNames();

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
