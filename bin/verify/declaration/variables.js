"use strict";

const queries = require("../../miscellaneous/queries"),
      verifyVariableDeclaration = require("../../verify/declaration/variable");

const { variableDeclarationNodesQuery } = queries;

function verifyVariablesDeclaration(variablesDeclarationNode, context, ruleMap) {
  const variableDeclarationNodes = variableDeclarationNodesQuery(variablesDeclarationNode);

  variableDeclarationNodes.forEach((variableDeclarationNode) => verifyVariableDeclaration(variableDeclarationNode, context, ruleMap));
}

module.exports = verifyVariablesDeclaration;
