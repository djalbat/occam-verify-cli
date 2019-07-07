'use strict';

const lexers = require('occam-lexers'),
      parsers = require('occam-parsers'),
      necessary = require('necessary');

const verifyTopmostNode = require('../verify/node/topmost');

const { fileSystemUtilities } = necessary,
      { FlorenceParser } = parsers,
      { FlorenceLexer } = lexers,
      { readFile } = fileSystemUtilities;

const florenceLexer = FlorenceLexer.fromNothing(),
      florenceParser = FlorenceParser.fromNothing();

function verifyFile(fileName, context) {
  const fileContent = readFile(fileName),
        tokens = florenceLexer.tokenise(fileContent),
        topmostNode = florenceParser.parse(tokens);

  try {
    verifyTopmostNode(topmostNode, context);
  } catch (error) {
    const node = error.getNode(),
          message = error.getMessage(),
          lineIndex = lineIndexFromNodeAndTokens(node, tokens),
          lineNumber = lineIndex + 1;

    console.log(`${fileName}:${lineNumber}: ${message}`);
  }
}

module.exports = verifyFile;

function lineIndexFromNodeAndTokens(node, tokens) {
  let lineIndex = 0,
      significantToken;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node;  ///

    significantToken = terminalNode.getSignificantToken();
  } else {
    const nonTerminalNode = node,
          firstSignificantToken = nonTerminalNode.getFirstSignificantToken();

    significantToken = firstSignificantToken; ///
  }

  tokens.some((token) => {
    const tokenEndOfLineToken = token.isEndOfLineToken();

    if (tokenEndOfLineToken) {
      lineIndex++;
    } else {
      const significantTokenEqualToken = significantToken.isEqualTo(token);

      if (significantTokenEqualToken) {
        return true;
      }
    }
  });

  return lineIndex;
}
