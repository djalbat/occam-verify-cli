'use strict';

const necessary = require('necessary');

const Error = require('../error'),
      queries = require('../queries'),
			grammarUtilities = require('../utilities/grammar'),
      lineIndexUtilities = require('../utilities/lineIndex'),
      verifyTopLevelInstruction = require('../verify/topLevelInstruction');

const { fileSystemUtilities } = necessary,
      { exit } = process,
      { readFile } = fileSystemUtilities,
      { topLevelInstructionNodesQuery } = queries,
      { lineIndexFromNodeAndTokens } = lineIndexUtilities,
			{ florenceLexerFromNothing, florenceParserFromNothing } = grammarUtilities;

function verifyFile(filePath, context, florenceLexer = florenceLexerFromNothing, florenceParser = florenceParserFromNothing) {
  const fileContent = readFile(filePath),
        tokens = florenceLexer.tokenise(fileContent),
        topmostNode = florenceParser.parse(tokens);

  try {
    const rules = florenceParser.getRules(),
          topLevelInstructionNodes = topLevelInstructionNodesQuery(topmostNode);

    topLevelInstructionNodes.forEach((topLevelInstructionNode) => verifyTopLevelInstruction(topLevelInstructionNode, context, rules));
  } catch (error) {
    if (!(error instanceof Error)) {
      throw error;
    }

    const node = error.getNode(),
          message = error.getMessage(),
          lineIndex = lineIndexFromNodeAndTokens(node, tokens),
          lineNumber = lineIndex + 1;

    console.log(`${filePath}:${lineNumber}: ${message}`);

    exit();
  }
}

module.exports = verifyFile;
