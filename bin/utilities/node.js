'use strict';

function nodeAsString(node, string = '') {
  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node,
          content = terminalNode.getContent();

    string = `${string}${content}`;
  } else {
    const nonTerminalNode = node,
          childNodes = nonTerminalNode.getChildNodes();

    childNodes.forEach((childNode) => {
      string = nodeAsString(childNode, string);
    });
  }

  return string;
}

function getChildNodes(node) {
	let childNodes = node.getChildNodes();

	childNodes = childNodes.slice();  ///

	return childNodes;
}

module.exports = {
  nodeAsString,
	getChildNodes
};
