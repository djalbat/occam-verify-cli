"use strict";

const { CustomGrammar } = require("occam-custom-grammars");
const { fileSystemUtilities } = require("necessary");

const { readFile, checkFileExists } = fileSystemUtilities;

function customGrammarFromDirectoryName(directoryName) {
  const name = directoryName, ///
        typePattern = typePatternFromDirectoryPath(directoryName),
        operatorPattern = operatorPatternFromDirectoryPath(directoryName),
        termBNF = termBNFFromDirectoryPath(directoryName),
        statementBNF = statementBNFFromDirectoryPath(directoryName),
        metastatementBNF = metastatementBNFFromDirectoryPath(directoryName),
        customGrammar = new CustomGrammar(name, typePattern, operatorPattern, termBNF, statementBNF, metastatementBNF);

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
