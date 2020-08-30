"use strict";

const necessary = require("necessary");

const queries = require("../miscellaneous/queries");

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { termNameNodesQuery, expressionTermNodesQuery, nameTerminalNodeQuery } = queries;

function variableNameFromVariableNameNode(variableNameNode) {
  const variableNameNodeContent = variableNameNode.getContent(),
        variableName = variableNameNodeContent; ///

  return variableName;
}

function variableFromTermNode(termNode, fileContext) {
  let variable = undefined;

  const termNameNodes = termNameNodesQuery(termNode),
        termNameNodesLength = termNameNodes.length;

  if (termNameNodesLength === 1) {
    const firmTermNameNode = first(termNameNodes),
          nameNode = firmTermNameNode;  ///

    variable = variableFromNameNode(nameNode, fileContext);
  }

  return variable;
}

function variableFromExpressionNode(expressionNode, fileContext) {
  let variable = undefined;

  const expressionTermNodes = expressionTermNodesQuery(expressionNode),
        expressionTermNodesLength = expressionTermNodes.length;

  if (expressionTermNodesLength === 1) {
    const firmExpressionTermNode = first(expressionTermNodes),
          termNode = firmExpressionTermNode;  ///

    variable = variableFromTermNode(termNode, fileContext);
  }

  return variable;
}

module.exports = {
  variableNameFromVariableNameNode,
  variableFromTermNode,
  variableFromExpressionNode
};

function variableFromNameNode(nameNode, fileContext) {
  const nameTerminalNode = nameTerminalNodeQuery(nameNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent, ///
        variable = fileContext.findVariableByName(name);

  return variable;
}
