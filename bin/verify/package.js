"use strict";

const necessary = require("necessary");

const log = require("../log"),
      verifyFiles = require("../verify/files"),
      PackageContext = require("../context/package"),
      packageUtilities = require("../utilities/package");

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { findPackageContext, filePathsFromPackageName, dependencyPackageNamesFromPackageName } = packageUtilities;

function verifyPackage(packageName, packageContexts = [], dependentPackageNames = []) {
  let packageVerified = false;

  log.debug(`Verifying the '${packageName}' package...`);

  const cyclicDependencyExists = checkCyclicDependencyExists(packageName, dependentPackageNames);

  if (!cyclicDependencyExists) {
    dependentPackageNames = [ ...dependentPackageNames, packageName ];  ///

    const dependencyPackageNames = dependencyPackageNamesFromPackageName(packageName),
          dependencyPackagesVerified = dependencyPackageNames.every((dependencyPackageName) => {
            const dependencyPackageContext = findPackageContext(dependencyPackageName, packageContexts),
                  dependencyPackageVerified = (dependencyPackageContext === undefined) ?
                                                 verifyPackage(dependencyPackageName, packageContexts, dependentPackageNames) :
                                                   true;

            return dependencyPackageVerified;
          });

    if (dependencyPackagesVerified) {
      const dependencyPackageContexts = dependencyPackageNames.map((dependencyPackageName) => findPackageContext(dependencyPackageName, packageContexts)),
            packageContext = PackageContext.fromPackageNameAndDependencyPackageContexts(packageName, dependencyPackageContexts),
            filePaths = filePathsFromPackageName(packageName),
            filesVerified = verifyFiles(filePaths, packageContext);

      packageVerified = filesVerified;  ///

      if (packageVerified) {
        packageContexts.push(packageContext);

        log.info(`Verified the '${packageName}' package.`);
      }
    }
  }

  return packageVerified;
}

module.exports = verifyPackage;

function checkCyclicDependencyExists(packageName, dependentPackageNames) {
  const dependentPackageNamesIncludesPackageName = dependentPackageNames.includes(packageName),
        cyclicDependencyExists = dependentPackageNamesIncludesPackageName;  ///

  if (cyclicDependencyExists) {
    const firstDependentPackageName = first(dependentPackageNames),
          packageNames = dependentPackageNames.concat(firstDependentPackageName),
          packageNamesString = packageNames.join(`' -> '`);

    log.error(`There is a cyclic dependency: '${packageNamesString}'.`);
  }

  return cyclicDependencyExists;
}
