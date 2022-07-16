"use strict";

const verifyType = require("../../verify/type");

const { nodeQuery } = require("../../utilities/query");

const firstTypeNodeQuery = nodeQuery("/typeDeclaration/type[0]"),
      secondTypeNodeQuery = nodeQuery("/typeDeclaration/type[1]");

function verifyTypeDeclaration(typeDeclarationNode, fileContext) {
  const firstTypeNode = firstTypeNodeQuery(typeDeclarationNode),
        secondTypeNode = secondTypeNodeQuery(typeDeclarationNode),
        typeNode = firstTypeNode, ///
        superTypeNode = secondTypeNode, ///
        typeVerified = verifyType(typeNode, superTypeNode, fileContext),
        typeDeclarationVerified = typeVerified; ///

  return typeDeclarationVerified;
}

module.exports = verifyTypeDeclaration;
