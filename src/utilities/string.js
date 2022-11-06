"use strict";

import { COMMA } from "../constants";

export function nodeAsString(node) {
  let string = null;

  if (node !== null) {
    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            content = terminalNode.getContent();

      string = content; ///
    } else {
      const nonTerminalNode = node, ///
            childNodes = nonTerminalNode.getChildNodes();

      childNodes.forEach((childNode) => {
        string = nodeAsString(childNode, string);
      });
    }
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
