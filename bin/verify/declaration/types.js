"use strict";

const queries = require("../../miscellaneous/queries"),
      verifyTypeDeclaration = require("../../verify/declaration/type");

const { typeDeclarationNodesQuery } = queries;

function verifyTypesDeclaration(typesDeclarationNode, context, rules) {
  const typeDeclarationNodes = typeDeclarationNodesQuery(typesDeclarationNode);

  typeDeclarationNodes.forEach((typeDeclarationNode) => verifyTypeDeclaration(typeDeclarationNode, context, rules));
}

module.exports = verifyTypesDeclaration;
