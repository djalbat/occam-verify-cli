"use strict";

const necessary = require("necessary");

const queries = require("../miscellaneous/queries");

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { termNameNodesQuery, expressionTermNodesQuery, nameTerminalNodeQuery } = queries;

function typeNameFromTypeNameNode(typeNameNode) {
  const typeNameNodeContent = typeNameNode.getContent(),
    typeName = typeNameNodeContent; ///

  return typeName;
}

function typeFromTermNode(termNode, fileContext) {
  let type = undefined;

  const termNameNodes = termNameNodesQuery(termNode),
        termNameNodesLength = termNameNodes.length;

  if (termNameNodesLength === 1) {
    const firmTermNameNode = first(termNameNodes),
          nameNode = firmTermNameNode;  ///

    type = typeFromNameNode(nameNode, fileContext);
  }

  return type;
}

function typeFromExpressionNode(expressionNode, fileContext) {
  let type = undefined;

  const expressionTermNodes = expressionTermNodesQuery(expressionNode),
        expressionTermNodesLength = expressionTermNodes.length;

  if (expressionTermNodesLength === 1) {
    const firmTermNode = first(expressionTermNodes),
          termNode = firmTermNode;  ///

    type = typeFromTermNode(termNode, fileContext);
  }

  return type;
}

function typeFromConstructorTermNode(constructorTermNode, fileContext) {
  const termNode = constructorTermNode  ,///
        type = typeFromTermNode(termNode, fileContext);

  return type;
}

function typeFromOperatorExpressionNode(operatorExpressionNode, fileContext) {
  const expressionNode = operatorExpressionNode,  ///
        type = typeFromExpressionNode(expressionNode, fileContext);

  return type;
}

module.exports = {
  typeNameFromTypeNameNode,
  typeFromTermNode,
  typeFromExpressionNode,
  typeFromConstructorTermNode,
  typeFromOperatorExpressionNode
};

function typeFromNameNode(nameNode, fileContext) {
  const nameTerminalNode = nameTerminalNodeQuery(nameNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent,
        type = fileContext.findTypeByName(name);

  return type;
}
