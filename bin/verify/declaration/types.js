"use strict";

const dom = require("occam-dom"),
  necessary = require("necessary");

const verifyType = require("../../verify/type"),
      typeUtilities = require("../../utilities/type");

const { Query } = dom,
      { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { typeNameFromTypeNameNode } = typeUtilities;

const typeNameNameNodesQuery = Query.fromExpression("/*/typeName/@name"),
      typeNamesNameNodesQuery = Query.fromExpression("/*/typeNames//@name");

function verifyTypesDeclaration(typeDeclarationNode, fileContext) {
  const typeNamesNameNodes = typeNamesNameNodesQuery.execute(typeDeclarationNode),
        typeNames = typeNamesNameNodes.map((typeNamesNameNode) => typeNameFromTypeNameNode(typeNamesNameNode)),
        typeNameNameNodes = typeNameNameNodesQuery.execute(typeDeclarationNode),
        superTypeNames = typeNameNameNodes.map((typeNameNameNode) => typeNameFromTypeNameNode(typeNameNameNode)),
        firstSuperTypeName = first(superTypeNames),
        superTypeName = firstSuperTypeName, ///
        typesVerified = typeNames.every((typeName) => {
          const typeVerified = verifyType(typeName, superTypeName, fileContext);

          return typeVerified;
        }),
        typeDeclarationVerified = typesVerified; ///

  return typeDeclarationVerified;
}

module.exports = verifyTypesDeclaration;
