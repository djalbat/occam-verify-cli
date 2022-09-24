"use strict";

const { arrayUtilities, loggingUtilities } = require("necessary");

const FileSystemPackageContext = require("./context/package/fileSystem");

const { log } = loggingUtilities,
      { first } = arrayUtilities;

function loadPackageContexts(packageName, packageContextMap = {}, dependentPackageNames = []) {
  const cyclicDependencyExists = checkCyclicDependencyExists(packageName, dependentPackageNames);

  if (!cyclicDependencyExists) {
    const packageContext = packageContextMap[packageName] || null;

    if (packageContext === null) {
      const fileSystemPackageContext = FileSystemPackageContext.fromPackageName(packageName),
            packageContext = fileSystemPackageContext;  ///

      packageContextMap[packageName] = packageContext;

      const dependencyPackageNames = packageContext.getDependencyPackageNames(packageName);

      dependentPackageNames = [ ...dependentPackageNames, packageName ];  ///

      dependencyPackageNames.forEach((dependencyPackageName) => {
        const packageName = dependencyPackageName;  ///

        loadPackageContexts(packageName, packageContextMap, dependentPackageNames);
      });
    }
  }

  return packageContextMap;
}

module.exports = loadPackageContexts;

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
