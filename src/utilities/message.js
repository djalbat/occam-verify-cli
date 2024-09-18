"use strict";

export function leastLineIndexFromNodeAndTokens(node, tokens) {
  let leastLineIndex = undefined; ///

  const firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens);

  let lineIndex = 0;

  tokens.some((token, tokenIndex) => {  ///
    if (tokenIndex === firstSignificantTokenIndex) {
      leastLineIndex = lineIndex;  ///

      return true;
    }

    const tokenEndOfLineToken = token.isEndOfLineToken();

    if (tokenEndOfLineToken) {
      lineIndex += 1;
    }
  });

  return leastLineIndex;
}

export function greatestLineIndexFromNodeAndTokens(node, tokens) {
  let greatestLineIndex = undefined;  ///

  const lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens);

  let lineIndex = 0;

  tokens.some((token, tokenIndex) => {  ///
    if (tokenIndex === lastSignificantTokenIndex) {
      greatestLineIndex = lineIndex;  ///

      return true;
    }

    const tokenEndOfLineToken = token.isEndOfLineToken();

    if (tokenEndOfLineToken) {
      lineIndex += 1;
    }
  });

  return greatestLineIndex;
}
