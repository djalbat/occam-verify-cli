"use strict";

import Type from "../type";

import { typeNameFromTypeNode } from "../utilities/query";

export default function verifyType(typeNode, superTypeNode, fileContext) {
  let typeVerified = false;

  const typeName = typeNameFromTypeNode(typeNode),
        typeString = fileContext.nodeAsString(typeNode),
        typePresent = fileContext.isTypePresentByTypeName(typeName);

  if (typePresent) {
    fileContext.error(typeNode, `The type '${typeName}' is already present.`);
  } else {
    let type;

    const superTypeName = typeNameFromTypeNode(superTypeNode);

    if (superTypeName === null) {
      type = Type.fromTypeName(typeName);
    } else {
      const superType = fileContext.findTypeByTypeName(superTypeName);

      if (superType === null) {
        fileContext.error(typeNode, `The super-type '${superTypeName}' is missing.`);
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
    fileContext.info(typeNode, `Verified the '${typeString}' type.`);
  }

  return typeVerified;
}
