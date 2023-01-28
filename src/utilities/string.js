"use strict";

import { COMMA, EMPTY_STRING } from "../constants";

export function nodeAsString(node, tokens) {
  let string = null;

  if (node !== null) {
    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            content = terminalNode.getContent();

      string = content; ///
    } else {
      const nonTerminalNode = node, ///
            firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
            lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
            firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
            lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken),
            start = firstSignificantTokenIndex, ///
            end = lastSignificantTokenIndex + 1;

      tokens = tokens.slice(start, end);  ///

      string = tokens.reduce((string, token) => {
        const content = token.getContent();

        string = `${string}${content}`;

        return string;
      }, EMPTY_STRING);
    }
  }

  if (string !== null) {
    string = string.replace(/[\r\n]/, EMPTY_STRING)
  }

  return string;
}

export function nodesAsString(nodes, tokens) {
  const string = nodes.reduce((string, node) => {
    const nodeString = nodeAsString(node, tokens);

    string = (string === EMPTY_STRING) ?
               nodeString :
                `${string}${COMMA}${nodeString}`;

    return string;
  }, EMPTY_STRING);

  return string;
}

