"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export function lineIndexFromLabelsAndTokens(labels, tokens) {
  const firstLabel = first(labels),
        label = firstLabel, ///
        node = label.getNode(),
        leastLineIndex = leastLineIndexFromNodeAndTokens(node, tokens),
        lineIndex = leastLineIndex; ///

  return lineIndex;
}

export function leastLineIndexFromNodeAndTokens(node, tokens) {
  let leastLineIndex = undefined; ///

  const firstSignificantToken = node.getFirstSignificantToken(),
        firstSignificantTokenIndex = significantTokenIndexFromSignificantTokenAndTokens(firstSignificantToken, tokens); ///

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
        lastSignificantTokenIndex = significantTokenIndexFromSignificantTokenAndTokens(lastSignificantToken, tokens);

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

function significantTokenIndexFromSignificantTokenAndTokens(significantToken, tokens) {
  let significantTokenIndex = -1;

  tokens.some((token) => {
    significantTokenIndex++;

    const tokenEqualToSignificantToken = token.isEqualTo(significantToken);

    if (tokenEqualToSignificantToken) {
      return true;
    }
  });

  return significantTokenIndex;
}
