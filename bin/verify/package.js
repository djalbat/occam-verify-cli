'use strict';

const verifyFiles = require('../verify/files'),
      packageUtilities = require('../utilities/package');

const { dependenciesFromPackageName } = packageUtilities;

function verifyPackage(packageName, context) {
  const dependencies = dependenciesFromPackageName(packageName);

  dependencies.forEach((dependency) => {
    const packageName = dependency, ///
          packageNameMissing = context.isPackageNameMissing(packageName);

    if (packageNameMissing) {
      context = verifyPackage(packageName, context);
    }
  });

  // const packageNamesIncludesPackageName = packageNames.includes(packageName);
  //
  // if (packageNamesIncludesPackageName) {
  //   const firstPackageName = first(packageNames),
  //         packageName = firstPackageName; ///
  //
  //   context = packageNames.concat(packageName);
  //
  //   const packageNamesString = packageNames.join(' -> ');
  //
  //   console.log(`There is a cyclic dependency: ${packageNamesString}`);
  //
  //   exit();
  // }

  context = verifyFiles(packageName, context);

  return context;
}

module.exports = verifyPackage;
