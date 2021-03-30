"use strict";

const { CustomGrammar } = require("occam-custom-grammars");
const { fileSystemUtilities } = require("necessary");

const { readFile, checkFileExists } = fileSystemUtilities;

function customGrammarFromDirectoryPath(directoryPath) {
  const name = directoryPath, ///
        lexicalPattern = lexicalPatternFromDirectoryPath(directoryPath),
        termBNF = termBNFFromDirectoryPath(directoryPath),
        expressionBNF = expressionBNFFromDirectoryPath(directoryPath),
        statementBNF = statementBNFFromDirectoryPath(directoryPath),
        metastatementBNF = metastatementBNFFromDirectoryPath(directoryPath),
        customGrammar = new CustomGrammar(name, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);

  return customGrammar;
}

module.exports = {
  customGrammarFromDirectoryPath
};

function lexicalPatternFromDirectoryPath(directoryPath) {
  const lexicalPatternFilePath = `${directoryPath}/pattern.lex`,
        lexicalPatternFileExists = checkFileExists(lexicalPatternFilePath),
        lexicalPatternContent = lexicalPatternFileExists ?
                                  readFile(lexicalPatternFilePath) :
                                    null,
        lexicalPattern = lexicalPatternContent; ///

  return lexicalPattern;
}

function metastatementBNFFromDirectoryPath(directoryPath) {
  const metastatementBNFFilePath = `${directoryPath}/metastatement.bnf`,
        metastatementBNF = bnfFromBNFFilePath(metastatementBNFFilePath);

  return metastatementBNF;
}

function statementBNFFromDirectoryPath(directoryPath) {
  const statementBNFFilePath = `${directoryPath}/statement.bnf`,
        statementBNF = bnfFromBNFFilePath(statementBNFFilePath);

  return statementBNF;
}

function expressionBNFFromDirectoryPath(directoryPath) {
  const expressionBNFFilePath = `${directoryPath}/expression.bnf`,
        expressionBNF = bnfFromBNFFilePath(expressionBNFFilePath);

  return expressionBNF;
}

function termBNFFromDirectoryPath(directoryPath) {
  const termBNFFilePath = `${directoryPath}/term.bnf`,
        termBNF = bnfFromBNFFilePath(termBNFFilePath);

  return termBNF;
}

function bnfFromBNFFilePath(bnfFilePath) {
  const bnfFileExists = checkFileExists(bnfFilePath),
        bnfContent = bnfFileExists ?
                       readFile(bnfFilePath) :
                         null,
        bnf = bnfContent; ///

  return bnf;
}
