"use strict";

const nodeUtilities = require("../../utilities/node"),
      queryUtilities = require("../../utilities/query"),
      verifyVariable = require("../../verify/variable");

const { nameFromNameNameNode } = nodeUtilities,
      { nodeQuery, nodesQuery } = queryUtilities;

const typeNameNameNodeQuery = nodeQuery("/*/typeName!/@name!"),
      variableNamesNodeQuery = nodeQuery("/*/variableNames!"),
      variableNameNameNodesQuery = nodesQuery("/*/variableName/@name!");

function verifyVariablesDeclaration(typeDeclarationNode, fileContext) {
  let variablesDeclarationVerified;

  const typeNameNameNode = typeNameNameNodeQuery(typeDeclarationNode),
        typeName = nameFromNameNameNode(typeNameNameNode),
        variableNamesNode = variableNamesNodeQuery(typeDeclarationNode),
        variableNameNameNodes = variableNameNameNodesQuery(variableNamesNode),
        variableNames = variableNameNameNodes.map((variableNameNameNode) => nameFromNameNameNode(variableNameNameNode)),
        typesVerified = variableNames.every((variableName) => verifyVariable(variableName, typeName, fileContext));

  variablesDeclarationVerified = typesVerified; ///

  return variablesDeclarationVerified;
}

module.exports = verifyVariablesDeclaration;
