"use strict";

const { loggingUtilities } = require("necessary");

const Type = require("../type");

const { typeNameFromTypeNode } = require("../utilities/query");

const { log } = loggingUtilities;

function verifyType(typeNode, superTypeNode, context) {
  let typeVerified = false;

  const typeName = typeNameFromTypeNode(typeNode),
        typePresent = context.isTypePresentByTypeName(typeName);

  if (typePresent) {
    log.error(`The type '${typeName}' is already present.`);
  } else {
    const superTypeName = typeNameFromTypeNode(superTypeNode);

    if (superTypeName === null) {
      const type = Type.fromTypeName(typeName),
            typeString = type.asString();

      context.addType(type);

      typeVerified = true;

      log.info(`Verified the '${typeString}' type.`);
    } else {
      const superType = context.findTypeByTypeName(superTypeName);

      if (superType === null) {
        log.error(`The super-type '${superTypeName}' is missing.`);
      } else {
        const type = Type.fromTypeNameAndSuperType(typeName, superType),
              typeString = type.asString();

        context.addType(type);

        typeVerified = true;

        log.info(`Verified the '${typeString}' type.`);
      }
    }
  }

  return typeVerified;
}

module.exports = verifyType;

