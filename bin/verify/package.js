'use strict';

const open = require('occam-open-cli'), ///
			necessary = require('necessary');

const verifyFile = require('../verify/file'),
			grammarUtilities = require('../utilities/grammar'),
      packageUtilities = require('../utilities/package');

const { filePathUtilities } = open,
			{ fileSystemUtilities } = necessary,
      { readDirectory } = fileSystemUtilities,
			{ isFilePathFlorenceFilePath } = filePathUtilities,
      { dependenciesFromPackageName, combinedCustomGrammarsFromPackageName } = packageUtilities,
			{ florenceLexerFromCombinedCustomGrammars, florenceParserFromCombinedCustomGrammars } = grammarUtilities;

function verifyPackage(packageName, context) {
  const dependencies = dependenciesFromPackageName(packageName);

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
