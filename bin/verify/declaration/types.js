"use strict";

const verifyType = require("../../verify/type");

const { nameFromNameNameNode } = require("../../utilities/node"),
      { nodeQuery, nodesQuery } = require("../../utilities/query");

const typeNamesNodeQuery = nodeQuery("/*/typeNames!"),
      typeNameNameNodeQuery = nodeQuery("/*/typeName!/@name"),
      typeNameNameNodesQuery = nodesQuery("/*/typeName/@name");

function verifyTypesDeclaration(typeDeclarationNode, fileContext) {
  let typesDeclarationVerified;

  const typeNameNameNode = typeNameNameNodeQuery(typeDeclarationNode),
        typeName = (typeNameNameNode !== undefined) ?
                      nameFromNameNameNode(typeNameNameNode) :
                         undefined,
        superTypeName = typeName, ///
        typeNamesNode = typeNamesNodeQuery(typeDeclarationNode),
        typeNameNameNodes = typeNameNameNodesQuery(typeNamesNode),
        typeNames = typeNameNameNodes.map((typeNameNameNode) => nameFromNameNameNode(typeNameNameNode)),
        typesVerified = typeNames.every((typeName) => verifyType(typeName, superTypeName, fileContext));

  typesDeclarationVerified = typesVerified; ///

  return typesDeclarationVerified;
}

module.exports = verifyTypesDeclaration;
