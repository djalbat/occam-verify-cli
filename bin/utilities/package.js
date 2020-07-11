"use strict";

const dom = require("occam-dom"),
      open = require("occam-open-cli"), ///
      lexers = require("occam-lexers"),
      parsers = require("occam-parsers"),
      necessary = require("necessary"),
      customgrammars = require("occam-custom-grammars");  ///;

const contentUtilities = require("../utilities/content");

const { Query } = dom,
      { MetaJSONLexer } = lexers,
      { MetaJSONParser } = parsers,
      { trimDoubleQuotes } = contentUtilities,
      { filePathUtilities } = open,
      { fileSystemUtilities } = necessary,
      { isFilePathFlorenceFilePath } = filePathUtilities,
      { CombinedCustomGrammar, CustomGrammar } = customgrammars,
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

function combinedCustomGrammarFromPackageNames(packageNames) {
  const customGrammars = customGrammarsFromPackageNames(packageNames),
        combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars);

  return combinedCustomGrammar;
}

module.exports = {
  filePathsFromPackageName,
  dependencyPackageNamesFromPackageName,
  combinedCustomGrammarFromPackageNames
};

function customGrammarFromPackageName(packageName) {
  const directoryPath = packageName,  ///
        customGrammar = CustomGrammar.fromDirectoryPath(directoryPath);

  return customGrammar;
}

function customGrammarsFromPackageNames(packageNames) {
  const customGrammars = packageNames.map((packageName) => customGrammarFromPackageName(packageName));

  return customGrammars;
}
