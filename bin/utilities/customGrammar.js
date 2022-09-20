"use strict";

const { CustomGrammar } = require("occam-custom-grammars");
const { fileSystemUtilities } = require("necessary");

const { readFile, checkFileExists } = fileSystemUtilities;

function customGrammarFromDirectoryName(directoryName) {
  const name = directoryName, ///
        termBNF = termBNFFromDirectoryPath(directoryName),
        statementBNF = statementBNFFromDirectoryPath(directoryName),
        metastatementBNF = metastatementBNFFromDirectoryPath(directoryName),
        typePattern = typePatternFromDirectoryPath(directoryName),
        symbolPattern = symbolPatternFromDirectoryPath(directoryName),
        operatorPattern = operatorPatternFromDirectoryPath(directoryName),
        customGrammar = new CustomGrammar(name, termBNF, statementBNF, metastatementBNF, typePattern, symbolPattern, operatorPattern);

  return customGrammar;
}

module.exports = {
  customGrammarFromDirectoryName
};

function typePatternFromDirectoryPath(directoryName) {
  const typePatternFilePath = `${directoryName}/type.ptn`,
        typePattern = patternFromBNFFilePath(typePatternFilePath);

  return typePattern;
}

function symbolPatternFromDirectoryPath(directoryName) {
  const symbolPatternFilePath = `${directoryName}/symbol.ptn`,
        symbolPattern = patternFromBNFFilePath(symbolPatternFilePath);

  return symbolPattern;
}

function operatorPatternFromDirectoryPath(directoryName) {
  const operatorPatternFilePath = `${directoryName}/operator.ptn`,
        operatorPattern = patternFromBNFFilePath(operatorPatternFilePath); ///

  return operatorPattern;
}

function metastatementBNFFromDirectoryPath(directoryName) {
  const metastatementBNFFilePath = `${directoryName}/metastatement.bnf`,
        metastatementBNF = bnfFromBNFFilePath(metastatementBNFFilePath);

  return metastatementBNF;
}

function statementBNFFromDirectoryPath(directoryName) {
  const statementBNFFilePath = `${directoryName}/statement.bnf`,
        statementBNF = bnfFromBNFFilePath(statementBNFFilePath);

  return statementBNF;
}

function termBNFFromDirectoryPath(directoryName) {
  const termBNFFilePath = `${directoryName}/term.bnf`,
        termBNF = bnfFromBNFFilePath(termBNFFilePath);

  return termBNF;
}

function patternFromBNFFilePath(patternFilePath) {
  const patternFileExists = checkFileExists(patternFilePath),
        patternContent = patternFileExists ?
                           readFile(patternFilePath) :
                             null,
        pattern = patternContent; ///

  return pattern;
}

function bnfFromBNFFilePath(bnfFilePath) {
  const bnfFileExists = checkFileExists(bnfFilePath),
        bnfContent = bnfFileExists ?
                       readFile(bnfFilePath) :
                         null,
        bnf = bnfContent; ///

  return bnf;
}
