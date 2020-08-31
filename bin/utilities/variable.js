"use strict";

const dom = require("occam-dom"),
      necessary = require("necessary");

const nodeUtilities = require("../utilities/node");

const { Query } = dom,
      { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { nameFromNameNode } = nodeUtilities;

const termNameNameNodesQuery = Query.fromExpression("/term!/name!/@name!"),
      expressionTermNameNameNodesQuery = Query.fromExpression("/expression!/term!/name!/@name");

function variableFromTermNode(termNode, fileContext) {
  let variable = undefined;

  const termNameNameNodes = termNameNameNodesQuery.execute(termNode),
        firmTermNameNameNode = first(termNameNameNodes),
        nameNode = firmTermNameNameNode;  ///

  if (nameNode !== undefined) {
    const name = nameFromNameNode(nameNode);

    variable = fileContext.findVariableByName(name);
  }

  return variable;
}

function variableFromExpressionNode(expressionNode, fileContext) {
  let variable = undefined;

  const expressionTermNameNameNodes = expressionTermNameNameNodesQuery.execute(expressionNode),
        firmExpressionTermNameNameNode = first(expressionTermNameNameNodes),
        nameNode = firmExpressionTermNameNameNode;  ///

  if (nameNode !== undefined) {
    const name = nameFromNameNode(nameNode);

    variable = fileContext.findVariableByName(name);
  }

  return variable;
}

module.exports = {
  variableFromTermNode,
  variableFromExpressionNode
};
