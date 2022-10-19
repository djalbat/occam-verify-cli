"use strict";

const { loggingUtilities, fileSystemUtilities } = require("necessary");

const { PackageContext } = require("../../../lib/main");

const { filePathsFromPackageName, dependencyPackageNamesFromPackageName } = require("../../utilities/fileSystem"),
      { TERM_BNF_FILE_NAME,
        STATEMENT_BNF_FILE_NAME,
        METASTATEMENT_BNF_FILE_NAME,
        TYPE_PATTERN_FILE_NAME,
        SYMBOL_PATTERN_FILE_NAME,
        OPERATOR_PATTERN_FILE_NAME } = require("../../fileNames");

const { log } = loggingUtilities,
      { readFile, checkFileExists } = fileSystemUtilities;

class FileSystemPackageContext extends PackageContext {
  getFilePaths() {
    const packageName = this.getPackageName(),
          filePaths = filePathsFromPackageName(packageName);

    return filePaths;
  }

  getFileContent(filePath) {
    const fileContent = readFile(filePath);

    return fileContent;
  }

  getDependencyPackageNames() {
    const packageName = this.getPackageName(),
          dependencyPackageNames = dependencyPackageNamesFromPackageName(packageName);

    return dependencyPackageNames;
  }

  getTermBNF() {
    const packageName = this.getPackageName(),
          directoryName = packageName,  ///
          fileName = TERM_BNF_FILE_NAME, ///
          fileContent = fileContentFromDirectoryNameAndFileName(directoryName, fileName),
          termBNF = fileContent;  ///

    return termBNF;
  }

  getStatementBNF() {
    const packageName = this.getPackageName(),
          directoryName = packageName,  ///
          fileName = STATEMENT_BNF_FILE_NAME, ///
          fileContent = fileContentFromDirectoryNameAndFileName(directoryName, fileName),
          termBNF = fileContent;  ///

    return termBNF;
  }

  getMetastatementBNF() {
    const packageName = this.getPackageName(),
          directoryName = packageName,  ///
          fileName = METASTATEMENT_BNF_FILE_NAME, ///
          fileContent = fileContentFromDirectoryNameAndFileName(directoryName, fileName),
          termBNF = fileContent;  ///

    return termBNF;
  }

  getTypePattern() {
    const packageName = this.getPackageName(),
          directoryName = packageName,  ///
          fileName = TYPE_PATTERN_FILE_NAME, ///
          fileContent = fileContentFromDirectoryNameAndFileName(directoryName, fileName),
          termBNF = fileContent;  ///

    return termBNF;
  }

  getSymbolPattern() {
    const packageName = this.getPackageName(),
          directoryName = packageName,  ///
          fileName = SYMBOL_PATTERN_FILE_NAME, ///
          fileContent = fileContentFromDirectoryNameAndFileName(directoryName, fileName),
          termBNF = fileContent;  ///

    return termBNF;
  }

  getOperatorPattern() {
    const packageName = this.getPackageName(),
          directoryName = packageName,  ///
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

  static fromPackageName(packageName) { return PackageContext.fromPackageName(FileSystemPackageContext, packageName); }
}

module.exports = FileSystemPackageContext;

function fileContentFromDirectoryNameAndFileName(directoryName, fileName) {
  const filePath = `${directoryName}/${fileName}`,
        fileExists = checkFileExists(filePath),
        fileContent = fileExists ?
                        readFile(filePath) :
                          null;

  return fileContent;
}