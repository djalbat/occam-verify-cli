"use strict";

const { EMPTY_STRING } = require("../constants");

function nodeAsString(node, string = EMPTY_STRING) {
  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node,  ///
          terminalNodeEpsilonNode = terminalNode.isEpsilonNode();

    if (!terminalNodeEpsilonNode) {
      const content = terminalNode.getContent();

      string = `${string}${content}`;
    }
  } else {
    const nonTerminalNode = node, ///
          childNodes = nonTerminalNode.getChildNodes();

    childNodes.forEach((childNode) => {
      string = nodeAsString(childNode, string);
    });
  }

  return string;
}

function nameFromNameNameNode(nameNameNode) {
  const nameNameNodeContent = nameNameNode.getContent(),
        name = nameNameNodeContent; ///

  return name;
}

module.exports = {
  nodeAsString,
  nameFromNameNameNode
};
