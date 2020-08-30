"use strict";

const dom = require("occam-dom"),
      necessary = require("necessary");

const verifyVariable = require("../../verify/variable"),
      typeUtilities = require("../../utilities/type"),
      variableUtilities = require("../../utilities/variable");

const { Query } = dom,
      { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { typeNameFromTypeNameNode } = typeUtilities,
      { variableNameFromVariableNameNode } = variableUtilities;

const typeNameNameNodesQuery = Query.fromExpression("/*/typeName/@name"),
      variableNamesNameNodesQuery = Query.fromExpression("/*/variableNames//@name");

function verifyVariablesDeclaration(variableDeclarationNode, fileContext) {
  let variablesDeclarationVerified;

  const variableNamesNameNodes = variableNamesNameNodesQuery.execute(variableDeclarationNode),
        typeNameNameNodes = typeNameNameNodesQuery.execute(variableDeclarationNode),
        variableNames = variableNamesNameNodes.map((variableNamesNameNode) => variableNameFromVariableNameNode(variableNamesNameNode)),
        typeNames = typeNameNameNodes.map((typeNameNameNode) => typeNameFromTypeNameNode(typeNameNameNode)),
        firstTypeName = first(typeNames),
        typeName = firstTypeName, ///
        variablesVerified = variableNames.every((variableName) => verifyVariable(variableName, typeName, fileContext));

  variablesDeclarationVerified = variablesVerified; ///

  return variablesDeclarationVerified;
}

module.exports = verifyVariablesDeclaration;
