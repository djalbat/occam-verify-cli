"use strict";

const necessary = require("necessary");

const verifyFiles = require("../verify/files"),
      PackageContext = require("../context/package"),
      packageUtilities = require("../utilities/package");

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { filePathsFromPackageName, dependencyPackageNamesFromPackageName } = packageUtilities;

function verifyPackage(packageName, globalContext, siblingPackageName, dependentPackageNames) {
  checkForCyclicDependency(packageName, dependentPackageNames);

  dependentPackageNames = [ ...dependentPackageNames, packageName ];  ///

  let siblingDependencyPackageName = undefined;

  const dependencyPackageNames = dependencyPackageNamesFromPackageName(packageName);

  dependencyPackageNames.forEach((dependencyPackageName) => {
    const dependencyPackageVerified = globalContext.isPackageVerifiedByPackageName(dependencyPackageName);

    if (!dependencyPackageVerified) {
      verifyPackage(dependencyPackageName, globalContext, siblingDependencyPackageName, dependentPackageNames);
    }

    siblingDependencyPackageName = dependencyPackageName; ///
  });

  const packageNames = globalContext.getPackageNames(),
        filePaths = filePathsFromPackageName(packageName),
        start = 0,
        deleteCount = (siblingPackageName === undefined) ?
                        0 :
                          packageNames.indexOf(siblingPackageName) + 1;

  packageNames.splice(start, deleteCount);

  const packageContext = PackageContext.fromGlobalContextPackageNameAndPackageNames(globalContext, packageName, packageNames);

  verifyFiles(filePaths, packageContext);

  globalContext.addPackageContext(packageContext);
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
