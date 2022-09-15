"use strict";

const { arrayUtilities } = require("necessary");

const log = require("../log"),
      verifyFiles = require("../verify/files"),
      PackageContext = require("../context/package");

const { findPackageContext, dependencyPackageNamesFromPackageName } = require("../utilities/package");

const { first } = arrayUtilities;

function verifyPackage(packageName, packageContexts = [], dependentPackageNames = []) {
  let packageVerified = false;

  log.debug(`Verifying the '${packageName}' package...`);

  const cyclicDependencyExists = checkCyclicDependencyExists(packageName, dependentPackageNames);

  if (!cyclicDependencyExists) {
    dependentPackageNames = [ ...dependentPackageNames, packageName ];  ///

    const dependencyPackageNames = dependencyPackageNamesFromPackageName(packageName),
          dependencyPackagesVerified = dependencyPackageNames.every((dependencyPackageName) => {
            const dependencyPackageContext = findPackageContext(dependencyPackageName, packageContexts),
                  dependencyPackageVerified = (dependencyPackageContext === null) ?
                                                 verifyPackage(dependencyPackageName, packageContexts, dependentPackageNames) :
                                                   true;

            return dependencyPackageVerified;
          });

    if (dependencyPackagesVerified) {
      const dependencyPackageContexts = dependencyPackageNames.map((dependencyPackageName) => {
              const packagesContext = findPackageContext(dependencyPackageName, packageContexts),
                    dependencyPackageContext = packagesContext; ///

              return dependencyPackageContext;
            }),
            packageContext = PackageContext.fromPackageNameAndDependencyPackageContexts(packageName, dependencyPackageContexts),
            filesVerified = verifyFiles(packageContext);

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
