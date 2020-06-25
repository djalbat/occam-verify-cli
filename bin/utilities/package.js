"use strict";

const dom = require("occam-dom"),
      open = require("occam-open-cli"), ///
      lexers = require("occam-lexers"),
      parsers = require("occam-parsers"),
      necessary = require("necessary"),
      customgrammars = require("occam-custom-grammars");  ///;

const contentUtilities = require("../utilities/content");

const { Query } = dom,
      { CustomGrammar } = customgrammars,
      { MetaJSONLexer } = lexers,
      { MetaJSONParser } = parsers,
      { trimDoubleQuotes } = contentUtilities,
      { filePathUtilities } = open,
      { fileSystemUtilities } = necessary,
      { isFilePathFlorenceFilePath } = filePathUtilities,
      { checkFileExists, readFile, readDirectory } = fileSystemUtilities;

const metaJSONLexer = MetaJSONLexer.fromNothing(),
      metaJSONParser = MetaJSONParser.fromNothing(),
      dependencyStringLiteralNodesQuery = Query.fromExpression("//dependency//@string-literal");

function filePathsFromPackageName(packageName) {
  let filePaths;

  const directoryPath = packageName,  ///
        fileNames = readDirectory(directoryPath);

  filePaths = fileNames.map((fileName) => `${directoryPath}/${fileName}`);

  const florenceFilePaths = filePaths.filter(isFilePathFlorenceFilePath);

  filePaths = florenceFilePaths;  ///

  return filePaths;
}

function customGrammarsFromPackageNames(packageNames) {
	const customGrammars = packageNames.map((packageName) => {
          const directoryPath = packageName,  ///
                customGrammar = CustomGrammar.fromDirectoryPath(directoryPath);

          return customGrammar;
        });

	return customGrammars;
}

function dependencyPackageNamesFromPackageName(packageName) {
  let dependencyPackageNames = [];

  const directoryPath = packageName,  ///
        metaJSONFilePath = `${directoryPath}/meta.json`,
        metaJSONFileExists = checkFileExists(metaJSONFilePath);

  if (metaJSONFileExists) {
    const metaJSONFileContent = readFile(metaJSONFilePath),
          content = metaJSONFileContent,  ///
          tokens = metaJSONLexer.tokenise(content),
          node = metaJSONParser.parse(tokens),
          dependencyStringLiteralNodes = dependencyStringLiteralNodesQuery.execute(node);

    dependencyPackageNames = dependencyStringLiteralNodes.map((dependencyStringLiteralNode) => {
      const dependencyStringLiteralNodeContent = dependencyStringLiteralNode.getContent(),
            dependencyPackageName = trimDoubleQuotes(dependencyStringLiteralNodeContent);

      return dependencyPackageName;
    });
  }

  return dependencyPackageNames;
}

module.exports = {
  filePathsFromPackageName,
  customGrammarsFromPackageNames,
  dependencyPackageNamesFromPackageName
};
