"use strict";

const verifyTermAsConstructor = require("../../verify/termAsConstructor");

const { nodeQuery } = require("../../utilities/query");

const termNodeQuery = nodeQuery("/constructorDeclaration/term"),
      typeNodeQuery = nodeQuery("/constructorDeclaration/type");

function verifyConstructorDeclaration(constructorDeclarationNode, fileContext) {
  const termNode = termNodeQuery(constructorDeclarationNode),
        typeNode = typeNodeQuery(constructorDeclarationNode),
        termVerifiedAsConstructor = verifyTermAsConstructor(termNode, typeNode, fileContext),
        constructorDeclarationVerified = termVerifiedAsConstructor; ///

  return constructorDeclarationVerified;
}

module.exports = verifyConstructorDeclaration;
