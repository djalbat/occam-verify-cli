"use strict";

const dom = require("occam-dom"),
      necessary = require("necessary");

const nodeUtilities = require("../../utilities/node"),
      verifyVariable = require("../../verify/variable");

const { Query } = dom,
      { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { nameFromNameNameNode } = nodeUtilities;

const typeNameNameNodesQuery = Query.fromExpression("/*/typeName/@name!"),
      variableNamesNameNodesQuery = Query.fromExpression("/*/variableNames//@name");

function verifyVariablesDeclaration(variableDeclarationNode, fileContext) {
  let variablesDeclarationVerified;

  const variableNamesNameNodes = variableNamesNameNodesQuery.execute(variableDeclarationNode),
        typeNameNameNodes = typeNameNameNodesQuery.execute(variableDeclarationNode),
        variableNames = variableNamesNameNodes.map((variableNamesNameNode) => nameFromNameNameNode(variableNamesNameNode)),
        typeNames = typeNameNameNodes.map((typeNameNameNode) => nameFromNameNameNode(typeNameNameNode)),
        firstTypeName = first(typeNames),
        typeName = firstTypeName, ///
        variablesVerified = variableNames.every((variableName) => verifyVariable(variableName, typeName, fileContext));

  variablesDeclarationVerified = variablesVerified; ///

  return variablesDeclarationVerified;
}

module.exports = verifyVariablesDeclaration;
