"use strict";

const necessary = require("necessary");

const verifyFiles = require("../verify/files"),
      PackageContext = require("../context/package"),
      packageUtilities = require("../utilities/package");

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { filePathsFromPackageName, dependencyPackageNamesFromPackageName } = packageUtilities;

function verifyPackage(packageName, globalContext, packageNames) {
  checkForCyclicDependency(packageName, packageNames);

  const dependencyPackageNames = dependencyPackageNamesFromPackageName(packageName);

  dependencyPackageNames.forEach((dependencyPackageName) => {
    const dependencyPackageMissing = globalContext.isPackageMissingByPackageName(dependencyPackageName);

    if (dependencyPackageMissing) {
      const packageContext = verifyPackage(dependencyPackageName, globalContext, [ ...packageNames, packageName ]); ///

      globalContext.addPackageContext(packageContext);
    }
  });

  packageNames = [ ...packageNames, packageName ];

  const filePaths = filePathsFromPackageName(packageName),
        packageContext = PackageContext.fromGlobalContextAndPackageNames(globalContext, packageNames);

  verifyFiles(filePaths, packageContext);

  return packageContext;
}

module.exports = verifyPackage;

function checkForCyclicDependency(packageName, packageNames) {
  const packageNamesIncludesPackageName = packageNames.includes(packageName);

  if (packageNamesIncludesPackageName) {
    const firstPackageName = first(packageNames),
          packageName = firstPackageName; ///

    packageNames = packageNames.concat(packageName);

    const packageNamesString = packageNames.join(`' -> '`);

    console.log(`There is a cyclic dependency: '${packageNamesString}'.`);

    process.exit();
  }
}
