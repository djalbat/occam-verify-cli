"use strict";

import { nodeQuery } from "../../utilities/query";

const termNodeQuery = nodeQuery("/constructorDeclaration/term"),
      typeNodeQuery = nodeQuery("/constructorDeclaration/type");

export default function verifyConstructorDeclaration(constructorDeclarationNode, context = this) {
  let constructorDeclarationVerified;

  context.begin(constructorDeclarationNode);

  const termNode = termNodeQuery(constructorDeclarationNode),
        typeNode = typeNodeQuery(constructorDeclarationNode),
        termVerifiedAsConstructor = context.verifyTermAsConstructor(termNode, typeNode);

  constructorDeclarationVerified = termVerifiedAsConstructor; ///

  constructorDeclarationVerified ?
    context.complete(constructorDeclarationNode) :
      context.halt(constructorDeclarationNode);

  return constructorDeclarationVerified;
}
