'use strict';

const dom = require('occam-dom'),
      lexers = require('occam-lexers'),
      parsers = require('occam-parsers'),
      necessary = require('necessary');

const customgrammars = require('occam-custom-grammars');  ///;

const { Query } = dom,
      { MetaJSONLexer } = lexers,
      { MetaJSONParser } = parsers,
      { fileSystemUtilities } = necessary,
      { checkFileExists, readFile } = fileSystemUtilities,
      { CustomGrammar, CombinedCustomGrammars } = customgrammars;

const metaJSONLexer = MetaJSONLexer.fromNothing(),
      metaJSONParser = MetaJSONParser.fromNothing(),
      dependenciesStringLiteralsQuery = Query.fromExpression('//dependencies//@string-literal[1...]');

function dependenciesFromPackageName(packageName) {
  let dependencies = [];

  const directoryPath = packageName,  ///
        metaJSONFilePath = `${directoryPath}/meta.json`,
        metaJSONFileExists = checkFileExists(metaJSONFilePath);

  if (metaJSONFileExists) {
    const metaJSONFileContent = readFile(metaJSONFilePath),
          content = metaJSONFileContent,  ///
          tokens = metaJSONLexer.tokenise(content),
          node = metaJSONParser.parse(tokens),
          dependenciesStringLiterals = dependenciesStringLiteralsQuery.execute(node);

    dependencies = dependenciesStringLiterals.map((dependenciesStringLiteral) => {
      const dependenciesStringLiteralContent = dependenciesStringLiteral.getContent(),
            dependency = dependenciesStringLiteralContent;  ///

      return dependency;
    });
  }

  return dependencies;
}

function combinedCustomGrammarsFromPackageName(packageName) {
	const directoryPath = packageName,  ///
				customGrammar = CustomGrammar.fromDirectoryPath(directoryPath),
				customGrammars = [
					customGrammar
				],
				combinedCustomGrammars = CombinedCustomGrammars.fromCustomGrammars(customGrammars);

	return combinedCustomGrammars;
}

module.exports = {
  dependenciesFromPackageName,
	combinedCustomGrammarsFromPackageName
};
