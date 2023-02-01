"use strict";

import Type from "../type";

import { typeNameFromTypeNode } from "../utilities/query";

export default function verifyType(typeNode, superTypeNode, fileContext) {
  let typeVerified = false;

  const typeName = typeNameFromTypeNode(typeNode),
        typeString = fileContext.nodeAsString(typeNode),
        typePresent = fileContext.isTypePresentByTypeName(typeName);

  if (typePresent) {
    fileContext.error(`The type '${typeName}' is already present.`, typeNode);
  } else {
    let type;

    const superTypeName = typeNameFromTypeNode(superTypeNode);

    if (superTypeName === null) {
      type = Type.fromTypeName(typeName);
    } else {
      const superType = fileContext.findTypeByTypeName(superTypeName);

      if (superType === null) {
        fileContext.error(`The super-type '${superTypeName}' is not present.`, typeNode);
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
    fileContext.info(`Verified the '${typeString}' type.`, typeNode);
  }

  return typeVerified;
}
