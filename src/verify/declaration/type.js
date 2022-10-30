"use strict";

import { nodeQuery } from "../../utilities/query";

const firstTypeNodeQuery = nodeQuery("/typeDeclaration/type[0]"),
      secondTypeNodeQuery = nodeQuery("/typeDeclaration/type[1]");

export default function verifyTypeDeclaration(typeDeclarationNode, context = this) {
  let typeDeclarationVerified;

  context.begin(typeDeclarationNode);

  const firstTypeNode = firstTypeNodeQuery(typeDeclarationNode),
        secondTypeNode = secondTypeNodeQuery(typeDeclarationNode),
        typeNode = firstTypeNode, ///
        superTypeNode = secondTypeNode; ///

  const typeVerified = context.verifyType(typeNode, superTypeNode);

  typeDeclarationVerified = typeVerified; ///

  typeDeclarationVerified ?
    context.complete(typeDeclarationNode) :
      context.halt(typeDeclarationNode);

  return typeDeclarationVerified;
}
