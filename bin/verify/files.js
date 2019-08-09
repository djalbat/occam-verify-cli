'use strict';

const open = require('occam-open-cli'), ///
      necessary = require('necessary'),
      customgrammars = require('occam-custom-grammars');  ///;;

const Context = require('../context'),
      verifyFile = require('../verify/file'),
			grammarUtilities = require('../utilities/grammar'),
      packageUtilities = require('../utilities/package');

const { filePathUtilities } = open,
      { fileSystemUtilities } = necessary,
      { readDirectory } = fileSystemUtilities,
      { CombinedCustomGrammar } = customgrammars,
			{ isFilePathFlorenceFilePath } = filePathUtilities,
      { customGrammarsFromPackageNames } = packageUtilities,
			{ florenceLexerFromCombinedCustomGrammar, florenceParserFromCombinedCustomGrammar } = grammarUtilities;

function verifyFiles(packageName, context) {
  const parentContext = context;  ///

  context = Context.fromPackageNameAndParentContext(packageName, parentContext);

  const filePaths = filePathsFromPackageName(packageName),
        packageNames = context.getPackageNames(),
        customGrammars = customGrammarsFromPackageNames(packageNames),
        combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars),
        florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
        florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);

  filePaths.forEach((filePath) => verifyFile(filePath, context, florenceLexer, florenceParser));

  return context;
}

module.exports = verifyFiles;

function filePathsFromPackageName(packageName) {
	let filePaths;

	const directoryPath = packageName,  ///
				fileNames = readDirectory(directoryPath);

	filePaths = fileNames.map((fileName) => `${directoryPath}/${fileName}`);

	const florenceFilePaths = filePaths.filter(isFilePathFlorenceFilePath);

	filePaths = florenceFilePaths;  ///

	return filePaths;
}
