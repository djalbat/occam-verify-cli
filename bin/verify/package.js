'use strict';

const necessary = require('necessary');

const verifyFiles = require('../verify/files'),
      packageUtilities = require('../utilities/package');

const { exit } = process,
      { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { dependenciesFromPackageName } = packageUtilities;

function verifyPackage(packageName, context, packageNames = []) {
  checkForCyclicDependency(packageName, packageNames);

  const dependencies = dependenciesFromPackageName(packageName);

  dependencies.forEach((dependency) => {
    const packageName = dependency, ///
          packageNameMissing = context.isPackageNameMissing(packageName);

    if (packageNameMissing) {
      context = verifyPackage(packageName, context, packageNames);
    }
  });

  context = verifyFiles(packageName, context);

  return context;
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

    exit();
  }

  packageNames.push(packageName);
}
