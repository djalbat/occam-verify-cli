"use strict";

const { Query } = require("occam-dom");

const typeTerminalNodeQuery = nodeQuery("/type/@type"),
      labelNameTerminalNodeQuery = nodeQuery("/label/@name"),
      variableNameTerminalNodeQuery = nodeQuery("/variable/@name"),
      referenceNameTerminalNodeQuery = nodeQuery("/reference/@name"),
      metavariableNameTerminalNodeQuery = nodeQuery("/metavariable/@name");

function nodeQuery(expression) {
  const query = Query.fromExpression(expression);

  return function(node) {
    if (node !== null) {
      const nodes = query.execute(node);

      node = nodes.shift() || null; ///
    }

    return node;
  };
}

function nodesQuery(expression) {
  const query = Query.fromExpression(expression);

  return function(node) {
    let nodes = null;

    if (node !== null) {
      nodes = query.execute(node);
    }

    return nodes;
  };
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

function labelNameFromLabelNode(labelNode) {
  const labelNameTerminalNode = labelNameTerminalNodeQuery(labelNode),
        labelNameTerminalNodeContent = labelNameTerminalNode.getContent(),
        labelName = labelNameTerminalNodeContent; ///

  return labelName;
}

function variableNameFromVariableNode(variableNode) {
  const variableNameTerminalNode = variableNameTerminalNodeQuery(variableNode),
        variableNameTerminalNodeContent = variableNameTerminalNode.getContent(),
        variableName = variableNameTerminalNodeContent; ///

  return variableName;
}

function referenceNameFromReferenceNode(referenceNode) {
  const referenceNameTerminalNode = referenceNameTerminalNodeQuery(referenceNode),
        referenceNameTerminalNodeContent = referenceNameTerminalNode.getContent(),
        referenceName = referenceNameTerminalNodeContent; ///

  return referenceName;
}

function metavariableNameFromMetavariableNode(metavariableNode) {
  const metavariableNameTerminalNode = metavariableNameTerminalNodeQuery(metavariableNode),
        metavariableNameTerminalNodeContent = metavariableNameTerminalNode.getContent(),
        metavariableName = metavariableNameTerminalNodeContent; ///

  return metavariableName;
}

module.exports = {
  nodeQuery,
  nodesQuery,
  typeNameFromTypeNode,
  labelNameFromLabelNode,
  variableNameFromVariableNode,
  referenceNameFromReferenceNode,
  metavariableNameFromMetavariableNode
};
