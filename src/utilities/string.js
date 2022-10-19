"use strict";

import { COMMA, EMPTY_STRING } from "../constants";

export function nodeAsString(node, string = EMPTY_STRING) {
  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node,
          content = terminalNode.getContent();

    string = `${string}${content}`;
  } else {
    const nonTerminalNode = node, ///
          childNodes = nonTerminalNode.getChildNodes();

    childNodes.forEach((childNode) => {
      string = nodeAsString(childNode, string);
    });
  }

  return string;
}

export function nodesAsString(nodes) {
  const string = nodes.reduce((string, node) => {
    const nodeString = nodeAsString(node);

    if (string === null) {
      string = nodeString;  ///
    } else {
      string = `${string}${COMMA}${nodeString}`;
    }

    return string;
  }, null);

  return string;
}

export function labelsAsString(labels) {
  const labelsString = labels.join(COMMA);

  return labelsString;
}
