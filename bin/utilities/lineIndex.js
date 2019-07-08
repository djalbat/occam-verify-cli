'use strict';

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

module.exports = {
  lineIndexFromNodeAndTokens
};
