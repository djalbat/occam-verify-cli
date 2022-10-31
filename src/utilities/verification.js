"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export function checkCyclicDependencyExists(name, dependentNames, releaseContext) {
  const dependentNamesIncludesName = dependentNames.includes(name),
        cyclicDependencyExists = dependentNamesIncludesName;  ///

  if (cyclicDependencyExists) {
    const firstDependentName = first(dependentNames),
          dependencyNames = dependentNames.concat(firstDependentName),
          dependencyNamesString = dependencyNames.join(`' -> '`);

    releaseContext.error(`There is a cyclic dependency: '${dependencyNamesString}'.`);
  }

  return cyclicDependencyExists;
}

export function checkReleaseMatchesShortenedVersion(releaseContext, shortenedVersion) {
  const release = releaseContext.getRelease(),
        releaseMatchesShortedVersion = release.matchShortenedVersion(shortenedVersion);

  if (!releaseMatchesShortedVersion) {
    const name = releaseContext.getName(),
          version = releaseContext.getVersion(),
          versionString = version.toString(),
          shortenedVersionString = shortenedVersion.toString();

    releaseContext.error(`The '${name}' package's version of ${versionString} does not match the dependency's shortened version of ${shortenedVersionString}.`);
  }

  return releaseMatchesShortedVersion;
}

export default {
  checkCyclicDependencyExists,
  checkReleaseMatchesShortenedVersion
};
