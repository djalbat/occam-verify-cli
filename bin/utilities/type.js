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

function typeFromTermNode(termNode, fileContext) {
  let type = undefined;

  const termNameNameNodes = termNameNameNodesQuery.execute(termNode),
        firmTermNameNameNode = first(termNameNameNodes),
        nameNode = firmTermNameNameNode;  ///

  if (nameNode !== undefined) {
    const name = nameFromNameNode(nameNode);

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
    const name = nameFromNameNode(nameNode);

    type = fileContext.findTypeByName(name);
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
  typeFromTermNode,
  typeFromExpressionNode,
  typeFromConstructorTermNode,
  typeFromOperatorExpressionNode
};
