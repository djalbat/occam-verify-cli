'use strict';

const queries = require('../../miscellaneous/queries'),
      verifyVariableDeclaration = require('../../verify/declaration/variable');

const { variableDeclarationNodesQuery } = queries;

function verifyVariablesDeclaration(variablesDeclarationNode, context, rules) {
  const variableDeclarationNodes = variableDeclarationNodesQuery(variablesDeclarationNode);

  variableDeclarationNodes.forEach((variableDeclarationNode) => verifyVariableDeclaration(variableDeclarationNode, context, rules));
}

module.exports = verifyVariablesDeclaration;
