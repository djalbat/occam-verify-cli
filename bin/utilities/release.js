"use strict";

const { filePathUtilities } = require("occam-open-cli"),
      { fileSystemUtilities } = require("necessary"),
      { MetaJSONLexer, MetaJSONParser } = require("occam-grammars");

const { nodeQuery, nodesQuery } = require("../utilities/query");

const { isFilePathFlorenceFilePath } = filePathUtilities,
      { readFile, isEntryFile, readDirectory, isEntryDirectory, checkFileExists } = fileSystemUtilities;

const metaJSONLexer = MetaJSONLexer.fromNothing(),
      metaJSONParser = MetaJSONParser.fromNothing(),
      dependencyNodesQuery = nodesQuery("//dependencies/dependency"),
      dependencyNameTerminalNodeQuery = nodeQuery("/dependency/name!/@*!"),
      shortenedVersionNumberTerminalNodeQuery = nodeQuery("//dependency/shortenedVersionNumber/@*!");

function versionFromReleaseName(releaseName) {
  const version = [],
        directoryName = releaseName,  ///
        metaJSONFilePath = `${directoryName}/meta.json`,
        metaJSONFileExists = checkFileExists(metaJSONFilePath);

  if (metaJSONFileExists) {
    const metaJSONFileContent = readFile(metaJSONFilePath),
          content = metaJSONFileContent,  ///
          tokens = metaJSONLexer.tokenise(content),
          node = metaJSONParser.parse(tokens);

    if (node !== null) {
      const dependencyNodes = dependencyNodesQuery(node);

      dependencyNodes.forEach((dependencyNode) => {
        const dependencyNameTerminalNode = dependencyNameTerminalNodeQuery(dependencyNode),
            shortenedVersionNumberTerminalNode = shortenedVersionNumberTerminalNodeQuery(dependencyNode),
            dependencyNameTerminalNodeContent = dependencyNameTerminalNode.getContent(),
            shortenedVersionNumberTerminalNodeContent = shortenedVersionNumberTerminalNode.getContent(),
            string = trimDoubleQuotes(shortenedVersionNumberTerminalNodeContent),  ///
            name = trimDoubleQuotes(dependencyNameTerminalNodeContent),///
            shortenedVersion = ShortenedVersion.fromString(string),
            dependency = Dependency.fromNameAndShortenedVersion(name, shortenedVersion);

        version.push(dependency);
      });
    }
  }

  return version;
}

function filePathsFromReleaseName(releaseName) {
  const directoryName = releaseName,  ///
        filePaths = readFilePaths(directoryName, (filePath) => {
          const filePathFlorenceFilePath = isFilePathFlorenceFilePath(filePath);

          if (filePathFlorenceFilePath) {
            return true;
          }
        });

  return filePaths;
}

function dependenciesFromReleaseName(releaseName) {
  const dependencies = [],
        directoryName = releaseName,  ///
        metaJSONFilePath = `${directoryName}/meta.json`,
        metaJSONFileExists = checkFileExists(metaJSONFilePath);

  if (metaJSONFileExists) {
    const metaJSONFileContent = readFile(metaJSONFilePath),
          content = metaJSONFileContent,  ///
          tokens = metaJSONLexer.tokenise(content),
          node = metaJSONParser.parse(tokens);

    if (node !== null) {
      const dependencyNodes = dependencyNodesQuery(node);

      dependencyNodes.forEach((dependencyNode) => {
        const dependencyNameTerminalNode = dependencyNameTerminalNodeQuery(dependencyNode),
              shortenedVersionNumberTerminalNode = shortenedVersionNumberTerminalNodeQuery(dependencyNode),
              dependencyNameTerminalNodeContent = dependencyNameTerminalNode.getContent(),
              shortenedVersionNumberTerminalNodeContent = shortenedVersionNumberTerminalNode.getContent(),
              string = trimDoubleQuotes(shortenedVersionNumberTerminalNodeContent),  ///
              name = trimDoubleQuotes(dependencyNameTerminalNodeContent),///
              shortenedVersion = ShortenedVersion.fromString(string),
              dependency = Dependency.fromNameAndShortenedVersion(name, shortenedVersion);

        dependencies.push(dependency);
      });
    }
  }

  return dependencies;
}

module.exports = {
  filePathsFromReleaseName,
  dependenciesFromReleaseName
};

function readFilePaths(directoryPath, test, filePaths = []) {
  const subEntryNames = readDirectory(directoryPath);

  subEntryNames.forEach((subEntryName) => {
    const subEntryNameHiddenName = isNameHiddenName(subEntryName);

    if (!subEntryNameHiddenName) {
      const subEntryPath = `${directoryPath}/${subEntryName}`,
            subEntryFile = isEntryFile(subEntryPath),
            subEntryDirectory = isEntryDirectory(subEntryPath);

      if (subEntryFile) {
        const filePath = subEntryPath,  ///
              pass = test(filePath);

        if (pass) {
          filePaths.push(filePath);
        }
      }

      if (subEntryDirectory) {
        const subDirectoryPath = subEntryPath;  ///

        readFilePaths(subDirectoryPath, test, filePaths);
      }
    }
  });

  return filePaths;
}

function isNameHiddenName(name) {
  const nameHiddenName = /^\..+/.test(name);

  return nameHiddenName;
}

function trimDoubleQuotes(content) { return content.replace(/(^"|"$)/g, ""); } ///
