"use strict";

import { EMPTY_STRING } from "../constants";

export function nodeAsString(node, tokens) {
  let string;

  tokens = nodeAsTokens(node, tokens);  ///

  string = tokensAsString(tokens);

  string = trimString(string);  ///

  return string;
}

export function nodesAsString(nodes, tokens) {
  const string = nodes.reduce((string, node) => {
    const nodeString = nodeAsString(node, tokens);

    string = (string === EMPTY_STRING) ?
               nodeString :
                `${string},${nodeString}`;

    return string;
  }, EMPTY_STRING);

  return string;
}

export function tokensAsString(tokens) {
  const string = tokens.reduce((string, token) => {
    const content = token.getContent();

    string = `${string}${content}`;

    return string;
  }, EMPTY_STRING);

  return string;
}

export function nodeAsTokens(node, tokens) {
  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {z
    const terminalNode = node;  ///

    tokens = terminalNodeAsTokens(terminalNode, tokens);
  } else {
    const nonTerminalNode = node; ///

    tokens = nonTerminalNodeAsTokens(nonTerminalNode, tokens);
  }

  return tokens;
}

function trimString(string) {
  string = string.replace(/\s+$/, EMPTY_STRING);  ///

  return string;
}

function terminalNodeAsTokens(terminalNode, tokens) {
  const significantToken = terminalNode.getSignificantToken(),
        token = significantToken; ///

  tokens = [  ///
    token
  ];

  return tokens;
}

function nonTerminalNodeAsTokens(nonTerminalNode, tokens) {
  const lastSignificantTokenIndex = nonTerminalNode.getLastSignificantTokenIndex(tokens),
        firstSignificantTokenIndex = nonTerminalNode.getFirstSignificantTokenIndex(tokens),
        start = firstSignificantTokenIndex, ///
        end = lastSignificantTokenIndex + 1;

  tokens = tokens.slice(start, end);  ///

  return tokens;
}
