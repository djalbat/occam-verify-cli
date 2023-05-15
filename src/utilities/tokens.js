"use strict";

export function leastLineIndexFromNodeAndTokens(node, tokens) {
  let leastLineIndex = undefined; ///

  const firstSignificantToken = node.getFirstSignificantToken(),
        firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken);

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

  const lastSignificantToken = node.getLastSignificantToken(),
        lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken);

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
