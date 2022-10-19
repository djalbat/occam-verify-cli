"use strict";

import Type from "../type";

import { typeNameFromTypeNode } from "../utilities/query";

export default function verifyType(typeNode, superTypeNode, context) {
  let typeVerified = false;

  const typeName = typeNameFromTypeNode(typeNode),
        typePresent = context.isTypePresentByTypeName(typeName);

  if (typePresent) {
    context.error(`The type '${typeName}' is already present.`);
  } else {
    const superTypeName = typeNameFromTypeNode(superTypeNode);

    if (superTypeName === null) {
      const type = Type.fromTypeName(typeName),
            typeString = type.asString();

      context.addType(type);

      typeVerified = true;

      context.info(`Verified the '${typeString}' type.`);
    } else {
      const superType = context.findTypeByTypeName(superTypeName);

      if (superType === null) {
        context.error(`The super-type '${superTypeName}' is missing.`);
      } else {
        const type = Type.fromTypeNameAndSuperType(typeName, superType),
              typeString = type.asString();

        context.addType(type);

        typeVerified = true;

        context.info(`Verified the '${typeString}' type.`);
      }
    }
  }

  return typeVerified;
}

