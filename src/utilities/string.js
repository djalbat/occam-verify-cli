"use strict";

import { COMMA, EMPTY_STRING } from "../constants";

export function trim(string) {
  string = string.replace(/\s+$/, EMPTY_STRING);  ///

  return string;
}

export function nodeAsString(node, tokens) {
  let string;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node;  ///

    string = terminalNodeAsString(terminalNode);
  } else {
    const nonTerminalNode = node; ///

    string = nonTerminalNodeAsString(nonTerminalNode, tokens);
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

function terminalNodeAsString(terminalNode) {
  const content = terminalNode.getContent(),
        string = content; ///

  return string;
}

function nonTerminalNodeAsString(nonTerminalNode, tokens) {
  const lastSignificantTokenIndex = nonTerminalNode.getLastSignificantTokenIndex(tokens),
        firstSignificantTokenIndex = nonTerminalNode.getFirstSignificantTokenIndex(tokens),
        start = firstSignificantTokenIndex, ///
        end = lastSignificantTokenIndex + 1;

  tokens = tokens.slice(start, end);  ///

  const string = tokens.reduce((string, token) => {
    const content = token.getContent();

    string = `${string}${content}`;

    return string;
  }, EMPTY_STRING);

  return string;
}
