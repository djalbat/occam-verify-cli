"use strict";

const { loggingUtilities, fileSystemUtilities } = require("necessary");

const { ReleaseContext } = require("../../../lib/main");

const { filePathsFromReleaseName, dependencyReleaseNamesFromReleaseName } = require("../../utilities/fileSystem"),
      { TERM_BNF_FILE_NAME,
        STATEMENT_BNF_FILE_NAME,
        METASTATEMENT_BNF_FILE_NAME,
        TYPE_PATTERN_FILE_NAME,
        SYMBOL_PATTERN_FILE_NAME,
        OPERATOR_PATTERN_FILE_NAME } = require("../../fileNames");

const { log } = loggingUtilities,
      { readFile, checkFileExists } = fileSystemUtilities;

class FileSystemReleaseContext extends ReleaseContext {
  getFilePaths() {
    const releaseName = this.getReleaseName(),
          filePaths = filePathsFromReleaseName(releaseName);

    return filePaths;
  }

  getFileContent(filePath) {
    const fileContent = readFile(filePath);

    return fileContent;
  }

  getDependencyReleaseNames() {
    const releaseName = this.getReleaseName(),
          dependencyReleaseNames = dependencyReleaseNamesFromReleaseName(releaseName);

    return dependencyReleaseNames;
  }

  getTermBNF() {
    const releaseName = this.getReleaseName(),
          directoryName = releaseName,  ///
          fileName = TERM_BNF_FILE_NAME, ///
          fileContent = fileContentFromDirectoryNameAndFileName(directoryName, fileName),
          termBNF = fileContent;  ///

    return termBNF;
  }

  getStatementBNF() {
    const releaseName = this.getReleaseName(),
          directoryName = releaseName,  ///
          fileName = STATEMENT_BNF_FILE_NAME, ///
          fileContent = fileContentFromDirectoryNameAndFileName(directoryName, fileName),
          termBNF = fileContent;  ///

    return termBNF;
  }

  getMetastatementBNF() {
    const releaseName = this.getReleaseName(),
          directoryName = releaseName,  ///
          fileName = METASTATEMENT_BNF_FILE_NAME, ///
          fileContent = fileContentFromDirectoryNameAndFileName(directoryName, fileName),
          termBNF = fileContent;  ///

    return termBNF;
  }

  getTypePattern() {
    const releaseName = this.getReleaseName(),
          directoryName = releaseName,  ///
          fileName = TYPE_PATTERN_FILE_NAME, ///
          fileContent = fileContentFromDirectoryNameAndFileName(directoryName, fileName),
          termBNF = fileContent;  ///

    return termBNF;
  }

  getSymbolPattern() {
    const releaseName = this.getReleaseName(),
          directoryName = releaseName,  ///
          fileName = SYMBOL_PATTERN_FILE_NAME, ///
          fileContent = fileContentFromDirectoryNameAndFileName(directoryName, fileName),
          termBNF = fileContent;  ///

    return termBNF;
  }

  getOperatorPattern() {
    const releaseName = this.getReleaseName(),
          directoryName = releaseName,  ///
          fileName = OPERATOR_PATTERN_FILE_NAME, ///
          fileContent = fileContentFromDirectoryNameAndFileName(directoryName, fileName),
          termBNF = fileContent;  ///

    return termBNF;
  }

  trace(message) { log.trace(message); }

  debug(message) { log.debug(message); }

  info(message) { log.info(message); }

  warning(message) { log.warning(message); }

  error(message) { log.error(message); }

  fatal(message) { log.fatal(message); }

  static fromReleaseName(releaseName) { return ReleaseContext.fromReleaseName(FileSystemReleaseContext, releaseName); }
}

module.exports = FileSystemReleaseContext;

function fileContentFromDirectoryNameAndFileName(directoryName, fileName) {
  const filePath = `${directoryName}/${fileName}`,
        fileExists = checkFileExists(filePath),
        fileContent = fileExists ?
                        readFile(filePath) :
                          null;

  return fileContent;
}