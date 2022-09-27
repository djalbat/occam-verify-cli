"use strict";

const { COMMA, EMPTY_STRING } = require("../constants");

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

function nodesAsString(nodes) {
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

function labelsAsString(labels) {
  const labelsString = labels.join(COMMA);

  return labelsString;
}

module.exports = {
  nodeAsString,
  nodesAsString,
  labelsAsString
};
