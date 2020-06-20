"use strict";

const queries = require("../../miscellaneous/queries"),
      verifyConstructorDeclaration = require("../../verify/declaration/constructor");

const { constructorDeclarationNodesQuery } = queries;

function verifyConstructorsDeclaration(constructorsDeclarationNode, context, ruleMap) {
  const constructorDeclarationNodes = constructorDeclarationNodesQuery(constructorsDeclarationNode);

  constructorDeclarationNodes.forEach((constructorDeclarationNode) => verifyConstructorDeclaration(constructorDeclarationNode, context, ruleMap));
}

module.exports = verifyConstructorsDeclaration;
