"use strict";

import Type from "../type";

import { typeNameFromTypeNode } from "../utilities/name";

export default function verifyType(typeNode, superTypeNode, fileContext) {
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

export function verifyStandaloneType(typeNode, localContext, verifyAhead) {
  let standaloneTypeVerified = false;

  const typeString = localContext.nodeAsString(typeNode);

  localContext.trace(`Verifying the '${typeString}' standalone type...`, typeNode);

  const typePresent = localContext.isTypePresentByTypeNode(typeNode);

  if (typePresent) {
    const verifiedAhead = verifyAhead();

    standaloneTypeVerified = verifiedAhead; ///
  }

  if (standaloneTypeVerified) {
    localContext.debug(`...verified the '${typeString}' standalone type.`, typeNode);
  }

  return standaloneTypeVerified;
}
