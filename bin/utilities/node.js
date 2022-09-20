"use strict";

const { nodeQuery } = require("./query"),
      { EMPTY_STRING } = require("../constants");

const typeTerminalNodeQuery = nodeQuery("/type/@type"),
      singleNonTerminalChildNodeQuery = nodeQuery("/*/*!");


function nodeAsString(node, string = EMPTY_STRING) {
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

function isNodeSingular(node) {
  let nodeSingular = false;

  const singleNonTerminalChildNode = singleNonTerminalChildNodeQuery(node);

  if (singleNonTerminalChildNode === null) {
    debugger
  } else {
    node = singleNonTerminalChildNode;  ///

    nodeSingular = isNodeSingular(node);
  }

  return nodeSingular;
}

function nameFromNameNode(nameNode) {
  let name = null;

  if (nameNode !== null) {
    const nameNodeContent = nameNode.getContent();

    name = nameNodeContent; ///
  }

  return name;
}

function typeNameFromTypeNode(typeNode) {
  let typeName = null;

  if (typeNode !== null) {
    const typeTerminalNode = typeTerminalNodeQuery(typeNode),
          typeTerminalNodeContent = typeTerminalNode.getContent();

    typeName = typeTerminalNodeContent; ///
  }

  return typeName;
}

module.exports = {
  nodeAsString,
  isNodeSingular,
  nameFromNameNode,
  typeNameFromTypeNode
};
