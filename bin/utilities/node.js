"use strict";

function nodeAsString(node, string = "") {
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

function nameFromNameNode(nameNode) {
  const nameNodeContent = nameNode.getContent(),
        name = nameNodeContent; ///

  return name;
}

module.exports = {
  nodeAsString,
  nameFromNameNode
};
