"use strict";

import Type from "../../type";

import { nodeQuery } from "../../utilities/query";
import { EMPTY_STRING } from "../../constants";
import { typeNameFromTypeNode } from "../../utilities/name";

const firstTypeNodeQuery = nodeQuery("/typeDeclaration/type[0]"),
      secondTypeNodeQuery = nodeQuery("/typeDeclaration/type[1]");

export default function verifyTypeDeclaration(typeDeclarationNode, fileContext) {
  let typeDeclarationVerified;

  const firstTypeNode = firstTypeNodeQuery(typeDeclarationNode),
        secondTypeNode = secondTypeNodeQuery(typeDeclarationNode),
        typeNode = firstTypeNode, ///
        superTypeNode = secondTypeNode, ///
        typeString = fileContext.nodeAsString(typeNode),
        superTypeString = (superTypeNode === null) ?
                            EMPTY_STRING :
                              fileContext.nodeAsString(superTypeNode);

  (superTypeString === EMPTY_STRING) ?
    fileContext.trace(`Verifying the '${typeString}' type declaration...`, typeDeclarationNode) :
      fileContext.trace(`Verifying the '${typeString}:${superTypeString}' type declaration...`, typeDeclarationNode);

  const typeVerified = verifyType(typeNode, superTypeNode, fileContext);

  typeDeclarationVerified = typeVerified; ///

  if (typeDeclarationVerified) {
    (superTypeString === EMPTY_STRING) ?
      fileContext.trace(`...verified the '${typeString}' type declaration.`, typeDeclarationNode) :
        fileContext.trace(`...verified the '${typeString}:${superTypeString}' type declaration.`, typeDeclarationNode);
  }

  return typeDeclarationVerified;
}

function verifyType(typeNode, superTypeNode, fileContext) {
  let typeVerified = false;

  const typeString = fileContext.nodeAsString(typeNode);

  fileContext.trace(`Verifying the '${typeString}' type...`, typeNode);

  const typePresent = fileContext.isTypePresentByTypeNode(typeNode);

  if (typePresent) {
    const typeString = fileContext.nodeAsString(typeNode);

    fileContext.debug(`The type '${typeString}' is already present.`, typeNode);
  } else {
    let type;

    const typeName = typeNameFromTypeNode(typeNode);

    if (superTypeNode === null) {
      type = Type.fromTypeName(typeName);
    } else {
      const superType = fileContext.findTypeByTypeNode(superTypeNode);

      if (superType === null) {
        const superTypeString = fileContext.nodeAsString(superTypeNode);

        fileContext.debug(`The super-type '${superTypeString}' is not present.`, typeNode);
      } else {
        type = Type.fromTypeNameAndSuperType(typeName, superType);
      }
    }

    if (type !== null) {
      fileContext.addType(type);

      typeVerified = true;
    }
  }

  if (typeVerified) {
    fileContext.debug(`...verified the '${typeString}' type.`, typeNode);
  }

  return typeVerified;
}
