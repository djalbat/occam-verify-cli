"use strict";

const dom = require("occam-dom"),
      necessary = require("necessary");

const typeUtilities = require("../../utilities/type"),
      verifyVariable = require("../../verify/variable"),
      variableUtilities = require("../../utilities/variable");

const { Query } = dom,
      { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { typeNameFromTypeNameNode } = typeUtilities,
      { variableNameFromVariableNameNode } = variableUtilities;

const typeNameNameNodesQuery = Query.fromExpression("/*/typeName/@name"),
      variableNameNameNodesQuery = Query.fromExpression("/*/variableName/@name");

function verifyVariableDeclaration(variableDeclarationNode, fileContext) {
  let variableDeclarationVerified;

  const variableNameNameNodes = variableNameNameNodesQuery.execute(variableDeclarationNode),
        typeNameNameNodes = typeNameNameNodesQuery.execute(variableDeclarationNode),
        variableNames = variableNameNameNodes.map((variableNameNameNode) => variableNameFromVariableNameNode(variableNameNameNode)),
        typeNames = typeNameNameNodes.map((typeNameNameNode) => typeNameFromTypeNameNode(typeNameNameNode)),
        firstVariableName = first(variableNames),
        firstTypeName = first(typeNames),
        variableName = firstVariableName, ///
        typeName = firstTypeName, ///
        variableVerified = verifyVariable(variableName, typeName, fileContext);

  variableDeclarationVerified = variableVerified; ///

  return variableDeclarationVerified;
}

module.exports = verifyVariableDeclaration;
