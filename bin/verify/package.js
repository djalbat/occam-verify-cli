"use strict";

const necessary = require("necessary");

const verifyFiles = require("../verify/files"),
      PackageContext = require("../context/package"),
      packageUtilities = require("../utilities/package");

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { filePathsFromPackageName, dependencyPackageNamesFromPackageName } = packageUtilities;

function verifyPackage(packageName, packageContexts = [], dependentPackageNames = []) {
  checkForCyclicDependency(packageName, dependentPackageNames);

  dependentPackageNames = [ ...dependentPackageNames, packageName ];  ///

  const dependencyPackageNames = dependencyPackageNamesFromPackageName(packageName),
        dependencyPackageContexts = dependencyPackageNames.map((dependencyPackageName) => {
          let dependencyPackageContext = packageContexts.find((packageContext) => {
            const packageName = packageContext.getPackageName();

            if (packageName === dependencyPackageName) {
              return true;
            }
          });

          if (dependencyPackageContext === undefined) {
            dependencyPackageContext = verifyPackage(dependencyPackageName, packageContexts, dependentPackageNames);

            const packageContext = dependencyPackageContext;  ///

            packageContexts.push(packageContext);
          }

          return dependencyPackageContext;
        });

  const filePaths = filePathsFromPackageName(packageName),
        packageContext = PackageContext.fromPackageNameAndDependencyPackageContexts(packageName, dependencyPackageContexts);

  verifyFiles(filePaths, packageContext);

  return packageContext;
}

module.exports = verifyPackage;

function checkForCyclicDependency(packageName, dependentPackageNames) {
  const dependentPackageNamesIncludesPackageName = dependentPackageNames.includes(packageName);

  if (dependentPackageNamesIncludesPackageName) {
    const firstDependentPackageName = first(dependentPackageNames),
          packageNames = dependentPackageNames.concat(firstDependentPackageName),
          packageNamesString = packageNames.join(`' -> '`);

    console.log(`There is a cyclic dependency: '${packageNamesString}'.`);

    process.exit();
  }
}
