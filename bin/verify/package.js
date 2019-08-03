'use strict';

const open = require('occam-open-cli'), ///
			necessary = require('necessary');

const verifyFile = require('../verify/file'),
			grammarUtilities = require('../utilities/grammar'),
      packageUtilities = require('../utilities/package');

const { exit } = process,
      { filePathUtilities } = open,
			{ arrayUtilities, fileSystemUtilities } = necessary,
      { first } = arrayUtilities,
      { readDirectory } = fileSystemUtilities,
			{ isFilePathFlorenceFilePath } = filePathUtilities,
      { dependenciesFromPackageName, combinedCustomGrammarsFromPackageName } = packageUtilities,
			{ florenceLexerFromCombinedCustomGrammars, florenceParserFromCombinedCustomGrammars } = grammarUtilities;

function verifyPackage(packageName, packageNames, context) {
  packageNames = packageNames.concat(packageName);

  const dependencies = dependenciesFromPackageName(packageName);

  dependencies.forEach((dependency) => {
    const packageName = dependency, ///
          packageNamesIncludesPackageName = packageNames.includes(packageName);

    if (packageNamesIncludesPackageName) {
      const firstPackageName = first(packageNames),
            packageName = firstPackageName; ///

      packageNames = packageNames.concat(packageName);

      const packageNamesString = packageNames.join(' -> ');

      console.log(`There is a cyclic dependency: ${packageNamesString}`);

      exit();
    }

    verifyPackage(packageName, packageNames, context);
  });

  /*      combinedCustomGrammars = combinedCustomGrammarsFromPackageName(packageName),
		    filePaths = filePathsFromPackageName(packageName),
        florenceLexer = florenceLexerFromCombinedCustomGrammars(combinedCustomGrammars),
        florenceParser = florenceParserFromCombinedCustomGrammars(combinedCustomGrammars);

  filePaths.forEach((filePath) => verifyFile(filePath, context, florenceLexer, florenceParser))
  */
}

module.exports = verifyPackage;

function filePathsFromPackageName(packageName) {
	let filePaths;

	const directoryPath = packageName,  ///
				fileNames = readDirectory(directoryPath);

	filePaths = fileNames.map((fileName) => `${directoryPath}/${fileName}`);

	const florenceFilePaths = filePaths.filter(isFilePathFlorenceFilePath);

	filePaths = florenceFilePaths;  ///

	return filePaths;
}
