'use strict';

const open = require('occam-open-cli'), ///
			necessary = require('necessary');

const verifyFile = require('../verify/file'),
			grammarUtilities = require('../utilities/grammar');

const { filePathUtilities } = open,
			{ fileSystemUtilities } = necessary,
			{ isFilePathFlorenceFilePath } = filePathUtilities,
			{ readDirectory } = fileSystemUtilities,
			{ combinedCustomGrammarsFromPackageName, florenceLexerFromCombinedCustomGrammars, florenceParserFromCombinedCustomGrammars } = grammarUtilities;

function verifyPackage(packageName, context) {
  const combinedCustomGrammars = combinedCustomGrammarsFromPackageName(packageName),
		    filePaths = filePathsFromPackageName(packageName),
        florenceLexer = florenceLexerFromCombinedCustomGrammars(combinedCustomGrammars),
        florenceParser = florenceParserFromCombinedCustomGrammars(combinedCustomGrammars);

  filePaths.forEach((filePath) => verifyFile(filePath, context, florenceLexer, florenceParser))
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