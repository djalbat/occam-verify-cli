'use strict';

const necessary = require('necessary');

const Error = require('../error'),
      queries = require('../miscellaneous/queries'),
			grammarUtilities = require('../utilities/grammar'),
      lineIndexUtilities = require('../utilities/lineIndex'),
      verifyTopLevelInstruction = require('../verify/axiomOrDeclaration');

const { fileSystemUtilities } = necessary,
      { exit } = process,
      { readFile } = fileSystemUtilities,
      { lineIndexFromNodeAndTokens } = lineIndexUtilities,
      { axiomOrDeclarationNodesQuery } = queries,
			{ florenceLexerFromNothing, florenceParserFromNothing } = grammarUtilities;

function verifyFile(filePath, context, florenceLexer = florenceLexerFromNothing, florenceParser = florenceParserFromNothing) {
  try {
    const fileContent = readFile(filePath),
          tokens = florenceLexer.tokenise(fileContent),
          node = florenceParser.parse(tokens),
          rules = florenceParser.getRules(),
          documentNode = node,  ///
          axiomOrDeclarationNodes = axiomOrDeclarationNodesQuery(documentNode);

    axiomOrDeclarationNodes.forEach((axiomOrDeclarationNode) => verifyTopLevelInstruction(axiomOrDeclarationNode, context, rules));
  } catch (error) {
    if (!(error instanceof Error)) {
      throw error;
    } else {
      const node = error.getNode(),
            message = error.getMessage(),
            lineIndex = lineIndexFromNodeAndTokens(node, tokens),
            lineNumber = lineIndex + 1;

      console.log(`${filePath}:${lineNumber}: ${message}`);

      exit();
    }
  }
}

module.exports = verifyFile;
