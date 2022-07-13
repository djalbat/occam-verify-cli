"use strict";

const verifyVariable = require("../../verify/variable");

const { nodeQuery } = require("../../utilities/query"),
      { nameFromNameNode } = require("../../utilities/node");

const firstNameNodeQuery = nodeQuery("/variableDeclaration/@name[0]"),
      secondNameNodeQuery = nodeQuery("/variableDeclaration/@name[1]");

function verifyVariableDeclaration(variableDeclarationNode, fileContext) {
  let variableDeclarationVerified;

  const firstNameNode = firstNameNodeQuery(variableDeclarationNode),
        secondNameNode = secondNameNodeQuery(variableDeclarationNode),
        firstName = nameFromNameNode(secondNameNode),
        secondName = nameFromNameNode(firstNameNode),
        typeName = firstName,  ///
        variableName = secondName, ///
        typeVerified = verifyVariable(variableName, typeName, fileContext);

  variableDeclarationVerified = typeVerified; ///

  return variableDeclarationVerified;
}

module.exports = verifyVariableDeclaration;
