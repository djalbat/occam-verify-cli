"use strict";

const { Query } = require("occam-dom"),
      { arrayUtilities } = require("necessary");

const { nameFromNameNameNode } = require("../utilities/node");

const { first } = arrayUtilities;

const termNameNameNodesQuery = Query.fromExpression("/term!/name!/@name"),
      expressionTermNameNameNodesQuery = Query.fromExpression("/expression!/term!/name!/@name");

function typeFromTermNode(termNode, fileContext) {
  let type = undefined;

  const termNameNameNodes = termNameNameNodesQuery.execute(termNode),
        firmTermNameNameNode = first(termNameNameNodes),
        nameNode = firmTermNameNameNode;  ///

  if (nameNode !== undefined) {
    const name = nameFromNameNameNode(nameNode);

    type = fileContext.findTypeByName(name);
  }

  return type;
}

function typeFromExpressionNode(expressionNode, fileContext) {
  let type = undefined;

  const expressionTermNameNameNodes = expressionTermNameNameNodesQuery.execute(expressionNode),
        firmExpressionTermNameNameNode = first(expressionTermNameNameNodes),
        nameNode = firmExpressionTermNameNameNode;  ///

  if (nameNode !== undefined) {
    const name = nameFromNameNameNode(nameNode);

    type = fileContext.findTypeByName(name);
  }

  return type;
}

function typeFromConstructorTermNode(constructorTermNode, fileContext) {
  const termNode = constructorTermNode  ,///
        type = typeFromTermNode(termNode, fileContext);

  return type;
}

function typeFromCombinatorExpressionNode(combinatorExpressionNode, fileContext) {
  const expressionNode = combinatorExpressionNode,  ///
        type = typeFromExpressionNode(expressionNode, fileContext);

  return type;
}

module.exports = {
  typeFromTermNode,
  typeFromExpressionNode,
  typeFromConstructorTermNode,
  typeFromCombinatorExpressionNode
};
