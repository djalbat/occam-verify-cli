'use strict';

const queries = require('../../../queries'),
      verifyVariableDeclarationNode = require('../../../verify/node/declaration/variable');

const { variableDeclarationNodesQuery } = queries;

function verifyVariablesDeclarationNode(variablesDeclarationNode, context) {
  const variableDeclarationNodes = variableDeclarationNodesQuery(variablesDeclarationNode);

  variableDeclarationNodes.forEach((variableDeclarationNode) => verifyVariableDeclarationNode(variableDeclarationNode, context));
}

module.exports = verifyVariablesDeclarationNode;
