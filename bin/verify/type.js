"use strict";

const log = require("../log"),
      Type = require("../type");

const { nodeQuery } = require("../utilities/query");
const { nameFromNameNode } = require("../utilities/node");

const nameNodeQuery = nodeQuery("/type/@name");

function verifyType(typeNode, superTypeNode, fileContext) {
  let typeVerified = false;

  const typeNameNode = nameNodeQuery(typeNode),
        superTypeNameNode = nameNodeQuery(superTypeNode),
        typeName = nameFromNameNode(typeNameNode),
        superTypeName = nameNodeQuery(superTypeNameNode);

  const typePresent = fileContext.isTypePresentByTypeName(typeName);

  if (typePresent) {
    log.error(`The type '${typeName}' is already present.`);
  } else {
    if (superTypeName === null) {
      const type = Type.fromTypeName(typeName),
            typeString = type.asString();

      fileContext.addType(type);

      typeVerified = true;

      log.info(`Verified the '${typeString}' type.`);
    } else {
      const superType = fileContext.findTypeByTypeName(superTypeName);

      if (superType === null) {
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
