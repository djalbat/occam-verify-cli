"use strict";

const necessary = require("necessary");

const queries = require("../miscellaneous/queries");

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { expressionTermNodesQuery, termNameNodesQuery, nameTerminalNodeQuery } = queries;

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

  const expressionTermNameNodes = expressionTermNodesQuery(expressionNode),
        expressionTermNameNodesLength = expressionTermNameNodes.length;

  if (expressionTermNameNodesLength === 1) {
    const firmExpressionTermNameNode = first(expressionTermNameNodes),
          nameNode = firmExpressionTermNameNode;  ///

    variable = variableFromNameNode(nameNode, fileContext);
  }

  return variable;
}

module.exports = {
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
