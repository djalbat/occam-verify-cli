"use strict";

import verifyTermAsConstructor from "../../verify/termAsConstructor";

import { nodeQuery } from "../../utilities/query";

const termNodeQuery = nodeQuery("/constructorDeclaration/term"),
      typeNodeQuery = nodeQuery("/constructorDeclaration/type");

export default function verifyConstructorDeclaration(constructorDeclarationNode, fileContext) {
  let constructorDeclarationVerified;

  const termNode = termNodeQuery(constructorDeclarationNode),
        typeNode = typeNodeQuery(constructorDeclarationNode),
        termVerifiedAsConstructor = verifyTermAsConstructor(termNode, typeNode, fileContext);

  constructorDeclarationVerified = termVerifiedAsConstructor; ///

  return constructorDeclarationVerified;
}
