"use strict";

const dom = require("occam-dom"),
      necessary = require("necessary");

const nodeUtilities = require("../../utilities/node"),
      verifyVariable = require("../../verify/variable");

const { Query } = dom,
      { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { nameFromNameNameNode } = nodeUtilities;

const typeNameNameNodesQuery = Query.fromExpression("/*/typeName/@name"),
      variableNameNameNodesQuery = Query.fromExpression("/*/variableName/@name");

function verifyVariableDeclaration(variableDeclarationNode, fileContext) {
  let variableDeclarationVerified;

  const variableNameNameNodes = variableNameNameNodesQuery.execute(variableDeclarationNode),
        typeNameNameNodes = typeNameNameNodesQuery.execute(variableDeclarationNode),
        variableNames = variableNameNameNodes.map((variableNameNameNode) => nameFromNameNameNode(variableNameNameNode)),
        typeNames = typeNameNameNodes.map((typeNameNameNode) => nameFromNameNameNode(typeNameNameNode)),
        firstVariableName = first(variableNames),
        firstTypeName = first(typeNames),
        variableName = firstVariableName, ///
        typeName = firstTypeName, ///
        variableVerified = verifyVariable(variableName, typeName, fileContext);

  variableDeclarationVerified = variableVerified; ///

  return variableDeclarationVerified;
}

module.exports = verifyVariableDeclaration;
