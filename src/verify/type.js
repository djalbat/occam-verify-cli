"use strict";

import Type from "../type";

import { nodeAsString } from "../utilities/string";
import { typeNameFromTypeNode } from "../utilities/query";

export default function verifyType(typeNode, superTypeNode, context = this) {
  let typeVerified = false;

  context.begin(typeNode);

  let type = null;

  const typeName = typeNameFromTypeNode(typeNode),
        typePresent = context.isTypePresentByTypeName(typeName);

  if (typePresent) {
    context.error(`The type '${typeName}' is already present.`);
  } else {
    const superTypeName = typeNameFromTypeNode(superTypeNode);

    if (superTypeName === null) {
      type = Type.fromTypeName(typeName);
    } else {
      const superType = context.findTypeByTypeName(superTypeName);

      if (superType === null) {
        context.error(`The super-type '${superTypeName}' is missing.`);
      } else {
        type = Type.fromTypeNameAndSuperType(typeName, superType);
      }
    }
  }

  if (type !== null) {
    const typeString = nodeAsString(typeNode);

    context.info(`Verified the '${typeString}' type.`);

    context.addType(type);

    typeVerified = true;
  }

  typeVerified ?
    context.complete(typeNode):
      context.halt(typeNode);

  return typeVerified;
}
