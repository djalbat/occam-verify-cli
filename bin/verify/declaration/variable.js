"use strict";

const nodeUtilities = require("../../utilities/node"),
      queryUtilities = require("../../utilities/query"),
      verifyVariable = require("../../verify/variable");

const { nodeQuery } = queryUtilities,
      { nameFromNameNameNode } = nodeUtilities;

const typeNameNameNodeQuery = nodeQuery("/*/typeName!/@name!"),
      variableNameNameNodeQuery = nodeQuery("/*/variableName!/@name!");

function verifyVariableDeclaration(typeDeclarationNode, fileContext) {
  let variableDeclarationVerified;

  const variableNameNameNode = variableNameNameNodeQuery(typeDeclarationNode),
        typeNameNameNode = typeNameNameNodeQuery(typeDeclarationNode),
        variableName = nameFromNameNameNode(variableNameNameNode),
        typeName = nameFromNameNameNode(typeNameNameNode),
        typeVerified = verifyVariable(variableName, typeName, fileContext);

  variableDeclarationVerified = typeVerified; ///

  return variableDeclarationVerified;
}

module.exports = verifyVariableDeclaration;
