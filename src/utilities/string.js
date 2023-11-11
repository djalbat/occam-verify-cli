"use strict";

import { COMMA, EMPTY_STRING } from "../constants";

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

  string = string.replace(/[\r\n]/, EMPTY_STRING);

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

export function terminalNodeAsString(terminalNode) {
  const content = terminalNode.getContent(),
        string = content; ///

  return string;
}

export function nonTerminalNodeAsString(nonTerminalNode, tokens) {
  const firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
        lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
        firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
        lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken),
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
