'use strict';

const queries = require('../../queries'),
      verifyVariableDeclaration = require('../../verify/declaration/variable');

const { variableDeclarationNodesQuery } = queries;

function verifyVariablesDeclaration(variablesDeclarationNode, context) {
  const variableDeclarationNodes = variableDeclarationNodesQuery(variablesDeclarationNode);

  variableDeclarationNodes.forEach((variableDeclarationNode) => verifyVariableDeclaration(variableDeclarationNode, context));
}

module.exports = verifyVariablesDeclaration;
