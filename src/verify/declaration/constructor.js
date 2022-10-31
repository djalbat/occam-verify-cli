"use strict";

import verifyTermAsConstructor from "../../verify/termAsConstructor";

import { nodeQuery } from "../../utilities/query";

const termNodeQuery = nodeQuery("/constructorDeclaration/term"),
      typeNodeQuery = nodeQuery("/constructorDeclaration/type");

export default function verifyConstructorDeclaration(constructorDeclarationNode, fileContext) {
  let constructorDeclarationVerified;

  fileContext.begin(constructorDeclarationNode);

  const termNode = termNodeQuery(constructorDeclarationNode),
        typeNode = typeNodeQuery(constructorDeclarationNode),
        termVerifiedAsConstructor = verifyTermAsConstructor(termNode, typeNode, fileContext);

  constructorDeclarationVerified = termVerifiedAsConstructor; ///

  constructorDeclarationVerified ?
    fileContext.complete(constructorDeclarationNode) :
      fileContext.halt(constructorDeclarationNode);

  return constructorDeclarationVerified;
}
