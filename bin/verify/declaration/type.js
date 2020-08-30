"use strict";

const dom = require("occam-dom"),
      necessary = require("necessary");

const verifyType = require("../../verify/type"),
      typeUtilities = require("../../utilities/type");

const { Query } = dom,
      { arrayUtilities } = necessary,
      { first, second } = arrayUtilities,
      { typeNameFromTypeNameNode } = typeUtilities;

const typeNameNameNodesQuery = Query.fromExpression("/*/typeName/@name");

function verifyTypeDeclaration(typeDeclarationNode, fileContext) {
  const typeNameNameNodes = typeNameNameNodesQuery.execute(typeDeclarationNode),
        typeNames = typeNameNameNodes.map((typeNameNameNode) => typeNameFromTypeNameNode(typeNameNameNode)),
        firstTypeName = first(typeNames),
        secondTypeName = second(typeNames),
        typeName = firstTypeName, ///
        superTypeName = secondTypeName, ///
        typeVerified = verifyType(typeName, superTypeName, fileContext),
        typeDeclarationVerified = typeVerified; ///

  return typeDeclarationVerified;
}

module.exports = verifyTypeDeclaration;
