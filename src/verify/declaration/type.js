"use strict";

import verifyType from "../../verify/type";

import { nodeQuery } from "../../utilities/query";
import { EMPTY_STRING } from "../../constants";

const firstTypeNodeQuery = nodeQuery("/typeDeclaration/type[0]"),
      secondTypeNodeQuery = nodeQuery("/typeDeclaration/type[1]");

export default function verifyTypeDeclaration(typeDeclarationNode, fileContext) {
  let typeDeclarationVerified;

  const firstTypeNode = firstTypeNodeQuery(typeDeclarationNode),
        secondTypeNode = secondTypeNodeQuery(typeDeclarationNode),
        typeNode = firstTypeNode, ///
        superTypeNode = secondTypeNode, ///
        typeString = fileContext.nodeAsString(typeNode),
        superTypeString = fileContext.nodeAsString(superTypeNode);

  (superTypeString === EMPTY_STRING) ?
    fileContext.trace(`Verifying the '${typeString}' type declaration...`, typeDeclarationNode) :
      fileContext.trace(`Verifying the '${typeString}:${superTypeString}' type declaration...`, typeDeclarationNode);

  const typeVerified = verifyType(typeNode, superTypeNode, fileContext);

  typeDeclarationVerified = typeVerified; ///

  if (typeDeclarationVerified) {
    (superTypeString === EMPTY_STRING) ?
      fileContext.trace(`...verifying the '${typeString}' type declaration.`, typeDeclarationNode) :
        fileContext.trace(`...verifying the '${typeString}:${superTypeString}' type declaration.`, typeDeclarationNode);
  }

  return typeDeclarationVerified;
}
