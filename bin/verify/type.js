"use strict";

const log = require("../log"),
      Type = require("../type");

function verifyType(typeName, superTypeName, fileContext) {
  let typeVerified = false;

  const typePresent = fileContext.isTypePresentByTypeName(typeName);

  if (typePresent) {
    log.error(`The type '${typeName}' is already present.`);
  } else {
    if (superTypeName === undefined) {
      const type = Type.fromTypeName(typeName),
            typeString = type.asString();

      fileContext.addType(type);

      typeVerified = true;

      log.info(`Verified the '${typeString}' type.`);
    } else {
      const superType = fileContext.findTypeByTypeName(superTypeName);

      if (superType === undefined) {
        log.error(`The super-type '${superTypeName}' is missing.`);
      } else {
        const type = Type.fromTypeNameAndSuperType(typeName, superType),
              typeString = type.asString();

        fileContext.addType(type);

        typeVerified = true;

        log.info(`Verified the '${typeString}' type.`);
      }
    }
  }

  return typeVerified;
}

module.exports = verifyType;
