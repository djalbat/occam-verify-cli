"use strict";

const Type = require("../../type"),
      Error = require("../../error"),
      queries = require("../../miscellaneous/queries");

const { typeNameTerminalNodesQuery } = queries;

function verifyTypeDeclaration(typeDeclarationNode, context, rules) {
  const typeNameTerminalNodes = typeNameTerminalNodesQuery(typeDeclarationNode),
        typeNames = typeNameTerminalNodes.map((typeNameTerminalNode) => {
          const typeNameTerminalNodeContent = typeNameTerminalNode.getContent(),
                typeName = typeNameTerminalNodeContent; ///

          return typeName;
        }),
        typeName = typeNames.shift(), ///
        typePresent = context.isTypePresentByTypeName(typeName);

  if (typePresent) {
    const node = typeDeclarationNode, ///
          message = `The type '${typeName}' is already present.`;

    throw new Error(node, message);
  }

  const superTypeName = typeNames.shift();

  if (superTypeName === undefined) {
    const type = Type.fromTypeName(typeName);

    context.addType(type);
  } else {
    const superType = context.findTypeByTypeName(superTypeName);

    if (superType === undefined) {
      const node = typeDeclarationNode, ///
            message = `The super-type '${superTypeName}' is missing.`;

      throw new Error(node, message);
    }

    const type = Type.fromTypeNameAndSuperType(typeName, superType);

    context.addType(type);
  }
}

module.exports = verifyTypeDeclaration;
