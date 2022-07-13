"use strict";

const dom = require("occam-dom"),
      necessary = require("necessary");

const nodeUtilities = require("../utilities/node");

const { Query } = dom,
      { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { nameFromNameNameNode } = nodeUtilities;

const termNameNameNodesQuery = Query.fromExpression("/term!/name!/@name"),
      expressionTermNameNameNodesQuery = Query.fromExpression("/expression!/term!/name!/@name");

function variableFromTermNode(termNode, fileContext) {
  let variable = undefined;

  const termNameNameNodes = termNameNameNodesQuery.execute(termNode),
        firmTermNameNameNode = first(termNameNameNodes),
        nameNameNode = firmTermNameNameNode;  ///

  if (nameNameNode !== undefined) {
    const name = nameFromNameNameNode(nameNameNode);

    variable = fileContext.findVariableByName(name);
  }

  return variable;
}

function variableFromExpressionNode(expressionNode, fileContext) {
  let variable = undefined;

  const expressionTermNameNameNodes = expressionTermNameNameNodesQuery.execute(expressionNode),
        firmExpressionTermNameNameNode = first(expressionTermNameNameNodes),
        nameNameNode = firmExpressionTermNameNameNode;  ///

  if (nameNameNode !== undefined) {
    const name = nameFromNameNameNode(nameNameNode);

    variable = fileContext.findVariableByName(name);
  }

  return variable;
}

module.exports = {
  variableFromTermNode,
  variableFromExpressionNode
};
