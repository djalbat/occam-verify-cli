"use strict";

const queries = require("../../miscellaneous/queries"),
      verifyTypeDeclaration = require("../../verify/declaration/type");

const { typeDeclarationNodesQuery } = queries;

function verifyTypesDeclaration(typesDeclarationNode, context, ruleMap) {
  const typeDeclarationNodes = typeDeclarationNodesQuery(typesDeclarationNode);

  typeDeclarationNodes.forEach((typeDeclarationNode) => verifyTypeDeclaration(typeDeclarationNode, context, ruleMap));
}

module.exports = verifyTypesDeclaration;
