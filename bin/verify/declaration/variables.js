"use strict";

const verifyVariable = require("../../verify/variable");

const { nameFromNameNameNode } = require("../../utilities/node"),
      { nodeQuery, nodesQuery } = require("../../utilities/query");

const typeNameNameNodeQuery = nodeQuery("/*/typeName!/@name"),
      variableNamesNodeQuery = nodeQuery("/*/variableNames!"),
      variableNameNameNodesQuery = nodesQuery("/*/variableName/@name");

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
