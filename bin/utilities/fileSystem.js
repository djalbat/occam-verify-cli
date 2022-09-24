"use strict";

const { Query } = require("occam-dom"),
      { filePathUtilities } = require("occam-open-cli"),
      { fileSystemUtilities } = require("necessary"),
      { MetaJSONLexer, MetaJSONParser } = require("occam-grammars");

const { isFilePathFlorenceFilePath } = filePathUtilities,
      { checkFileExists, readFile, readDirectory } = fileSystemUtilities;

const metaJSONLexer = MetaJSONLexer.fromNothing(),
      metaJSONParser = MetaJSONParser.fromNothing(),
      dependencyStringLiteralNodesQuery = Query.fromExpression("//dependency//@string-literal");

function filePathsFromPackageName(packageName) {
  let filePaths;

  const directoryName = packageName,  ///
        fileNames = readDirectory(directoryName);

  filePaths = fileNames.map((fileName) => {
    const filePath = `${directoryName}/${fileName}`;

    return filePath;
  });

  const florenceFilePaths = filePaths.filter((filePath) => {
    const filePathFlorenceFilePath = isFilePathFlorenceFilePath(filePath);

    if (filePathFlorenceFilePath) {
      return true;
    }
  });

  filePaths = florenceFilePaths;  ///

  return filePaths;
}

function dependencyPackageNamesFromPackageName(packageName) {
  let dependencyPackageNames = [];

  const directoryName = packageName,  ///
        metaJSONFilePath = `${directoryName}/meta.json`,
        metaJSONFileExists = checkFileExists(metaJSONFilePath);

  if (metaJSONFileExists) {
    const metaJSONFileContent = readFile(metaJSONFilePath),
          content = metaJSONFileContent,  ///
          tokens = metaJSONLexer.tokenise(content),
          node = metaJSONParser.parse(tokens),
          dependencyStringLiteralNodes = dependencyStringLiteralNodesQuery.execute(node);

    dependencyPackageNames = dependencyStringLiteralNodes.map((dependencyStringLiteralNode) => {
      const dependencyStringLiteralNodeContent = dependencyStringLiteralNode.getContent(),
            dependencyPackageName = trimDoubleQuotes(dependencyStringLiteralNodeContent); ///

      return dependencyPackageName;
    });
  }

  return dependencyPackageNames;
}

module.exports = {
  filePathsFromPackageName,
  dependencyPackageNamesFromPackageName
};

function trimDoubleQuotes(content) { return content.replace(/(^"|"$)/g, ""); } ///