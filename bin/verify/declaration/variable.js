"use strict";

const verifyVariable = require("../../verify/variable");

const { nodeQuery } = require("../../utilities/query");

const typeNodeQuery = nodeQuery("/variableDeclaration/type"),
      variableNodeQuery = nodeQuery("/variableDeclaration/variable");

function verifyVariableDeclaration(variableDeclarationNode, context) {
  const typeNode = typeNodeQuery(variableDeclarationNode),
        variableNode = variableNodeQuery(variableDeclarationNode),
        variableVVerified = verifyVariable(variableNode, typeNode, context),
        variableDeclarationVerified = variableVVerified;  ///

  return variableDeclarationVerified;
}

module.exports = verifyVariableDeclaration;
