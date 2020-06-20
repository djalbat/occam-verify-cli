"use strict";

const dom = require("occam-dom"),
      lexers = require("occam-lexers"),
      parsers = require("occam-parsers"),
      necessary = require("necessary"),
      customgrammars = require("occam-custom-grammars");  ///;

const contentUtilities = require("../utilities/content");

const { Query } = dom,
      { MetaJSONLexer } = lexers,
      { MetaJSONParser } = parsers,
      { CustomGrammar } = customgrammars,
      { trimDoubleQuotes } = contentUtilities,
      { fileSystemUtilities } = necessary,
      { checkFileExists, readFile } = fileSystemUtilities;

const metaJSONLexer = MetaJSONLexer.fromNothing(),
      metaJSONParser = MetaJSONParser.fromNothing(),
      dependencyStringLiteralNodesQuery = Query.fromExpression("//dependency//@string-literal");

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
          dependencyStringLiteralNodes = dependencyStringLiteralNodesQuery.execute(node);

    dependencies = dependencyStringLiteralNodes.map((dependencyStringLiteralNode) => {
      const dependencyStringLiteralNodeContent = dependencyStringLiteralNode.getContent(),
            dependency = trimDoubleQuotes(dependencyStringLiteralNodeContent);

      return dependency;
    });
  }

  return dependencies;
}

function customGrammarsFromPackageNames(packageNames) {
	const customGrammars = packageNames.map((packageName) => {
          const directoryPath = packageName,  ///
                customGrammar = CustomGrammar.fromDirectoryPath(directoryPath);

          return customGrammar;
        });

	return customGrammars;
}

module.exports = {
  dependenciesFromPackageName,
	customGrammarsFromPackageNames
};
