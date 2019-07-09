'use strict';

const lexers = require('occam-lexers'),
      parsers = require('occam-parsers'),
      necessary = require('necessary');

const Error = require('../error'),
      queries = require('../queries'),
      verifyDeclaration = require('../verify/declaration'),
      lineIndexUtilities = require('../utilities/lineIndex');

const { fileSystemUtilities } = necessary,
      { FlorenceParser } = parsers,
      { FlorenceLexer } = lexers,
      { exit } = process,
      { readFile } = fileSystemUtilities,
      { declarationNodesQuery } = queries,
      { lineIndexFromNodeAndTokens } = lineIndexUtilities;

const florenceLexer = FlorenceLexer.fromNothing(),
      florenceParser = FlorenceParser.fromNothing();

function verifyFile(fileName, context) {
  const fileContent = readFile(fileName),
        tokens = florenceLexer.tokenise(fileContent),
        topmostNode = florenceParser.parse(tokens);

  try {
    const declarationNodes = declarationNodesQuery(topmostNode);

    declarationNodes.forEach((declarationNode) => verifyDeclaration(declarationNode, context));
  } catch (error) {
    if (!(error instanceof Error)) {
      throw error;
    }

    const node = error.getNode(),
          message = error.getMessage(),
          lineIndex = lineIndexFromNodeAndTokens(node, tokens),
          lineNumber = lineIndex + 1;

    console.log(`${fileName}:${lineNumber}: ${message}`);

    exit();
  }
}

module.exports = verifyFile;
