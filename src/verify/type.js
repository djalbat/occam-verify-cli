"use strict";

import Type from "../type";

import { typeNameFromTypeNode } from "../utilities/query";

export default function verifyType(typeNode, superTypeNode, fileContext) {
  let typeVerified = false;

  const typeString = fileContext.nodeAsString(typeNode);

  fileContext.trace(`Verifying the '${typeString}' type.`);

  const typeName = typeNameFromTypeNode(typeNode),
        typePresent = fileContext.isTypePresentByTypeName(typeName);

  if (typePresent) {
    fileContext.info(`The type '${typeName}' is already present.`, typeNode);
  } else {
    let type;

    const superTypeName = typeNameFromTypeNode(superTypeNode);

    if (superTypeName === null) {
      type = Type.fromTypeName(typeName);
    } else {
      const superType = fileContext.findTypeByTypeName(superTypeName);

      if (superType === null) {
        fileContext.info(`The super-type '${superTypeName}' is not present.`, typeNode);
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
