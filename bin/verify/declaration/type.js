"use strict";

const verifyType = require("../../verify/type");

const { nodeQuery } = require("../../utilities/query"),
      { nameFromNameNode } = require("../../utilities/node");

const firstNameNodeQuery = nodeQuery("/typeDeclaration/@name[0]"),
      secondNameNodeQuery = nodeQuery("/typeDeclaration/@name[1]");

function verifyTypeDeclaration(typeDeclarationNode, fileContext) {
  let typeDeclarationVerified;

  const firstNameNode = firstNameNodeQuery(typeDeclarationNode),
        secondNameNode = secondNameNodeQuery(typeDeclarationNode),
        firstTypeName = nameFromNameNode(firstNameNode),
        secondTypeName = nameFromNameNode(secondNameNode),
        typeName = firstTypeName, ///
        superTypeName = secondTypeName, ///
        typeVerified = verifyType(typeName, superTypeName, fileContext);

  typeDeclarationVerified = typeVerified; ///

  return typeDeclarationVerified;
}

module.exports = verifyTypeDeclaration;
