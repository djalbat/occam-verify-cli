"use strict";

import Type from "../type";

import { nodeAsString } from "../utilities/string";
import { typeNameFromTypeNode } from "../utilities/query";

export default function verifyType(typeNode, superTypeNode, fileContext) {
  let typeVerified = false;

  fileContext.begin(typeNode);

  const typeString = nodeAsString(typeNode);

  fileContext.debug(`Verifying the '${typeString}' type...`);

  const typeName = typeNameFromTypeNode(typeNode),
        typePresent = fileContext.isTypePresentByTypeName(typeName);

  if (typePresent) {
    fileContext.error(`The type '${typeName}' is already present.`);
  } else {
    let type;

    const superTypeName = typeNameFromTypeNode(superTypeNode);

    if (superTypeName === null) {
      type = Type.fromTypeName(typeName);
    } else {
      const superType = fileContext.findTypeByTypeName(superTypeName);

      if (superType === null) {
        fileContext.error(`The super-type '${superTypeName}' is missing.`);
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
    fileContext.info(`Verified the '${typeString}' type.`);
  }

  typeVerified ?
    fileContext.complete(typeNode):
      fileContext.halt(typeNode);

  return typeVerified;
}
