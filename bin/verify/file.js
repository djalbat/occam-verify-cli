"use strict";

const necessary = require("necessary");

const Error = require("../error"),
      queries = require("../miscellaneous/queries"),
			grammarUtilities = require("../utilities/grammar"),
      lineIndexUtilities = require("../utilities/lineIndex"),
      verifyAxiomOrDeclaration = require("../verify/axiomOrDeclaration");

const { exit } = process,
      { fileSystemUtilities } = necessary,
      { readFile } = fileSystemUtilities,
      { lineIndexFromNodeAndTokens } = lineIndexUtilities,
      { axiomOrDeclarationNodesQuery } = queries,
			{ florenceLexerFromNothing, florenceParserFromNothing } = grammarUtilities;

function verifyFile(filePath, context, florenceLexer = florenceLexerFromNothing, florenceParser = florenceParserFromNothing) {
  const fileContent = readFile(filePath),
        tokens = florenceLexer.tokenise(fileContent),
        node = florenceParser.parse(tokens);

  try {
    const rules = florenceParser.getRules(),
          documentNode = node,  ///
          axiomOrDeclarationNodes = axiomOrDeclarationNodesQuery(documentNode);

    axiomOrDeclarationNodes.forEach((axiomOrDeclarationNode) => verifyAxiomOrDeclaration(axiomOrDeclarationNode, context, rules));
  } catch (error) {
    if (!(error instanceof Error)) {
      throw error;
    } else {
      const errorNode = error.getNode(),
            errorMessage = error.getMessage(),
            lineIndex = lineIndexFromNodeAndTokens(errorNode, tokens),
            lineNumber = lineIndex + 1;

      console.log(`${filePath}:${lineNumber}: ${errorMessage}`);

      exit();
    }
  }
}

module.exports = verifyFile;
