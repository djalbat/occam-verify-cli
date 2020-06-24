"use strict";

const queries = require("../../miscellaneous/queries"),
      verifyOperatorDeclaration = require("../../verify/declaration/operator");

const { operatorDeclarationNodesQuery } = queries;

function verifyOperatorsDeclaration(operatorsDeclarationNode, context, ruleMap) {
  const operatorDeclarationNodes = operatorDeclarationNodesQuery(operatorsDeclarationNode);

  operatorDeclarationNodes.forEach((operatorDeclarationNode) => verifyOperatorDeclaration(operatorDeclarationNode, context, ruleMap));
}

module.exports = verifyOperatorsDeclaration;
