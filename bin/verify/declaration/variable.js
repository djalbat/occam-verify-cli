"use strict";

const verifyVariable = require("../../verify/variable");

const { nodeQuery } = require("../../utilities/query"),
      { nameFromNameNameNode } = require("../../utilities/node");

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
