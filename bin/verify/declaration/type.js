"use strict";

const dom = require("occam-dom");

const { Query } = dom;

const Type = require("../../type"),
      Error = require("../../error");

const typeNameNodesQuery = Query.fromExpression("//typeName/@*");

function verifyTypeDeclaration(typeDeclarationNode, fileContext) {
  const typeNameNodes = typeNameNodesQuery.execute(typeDeclarationNode),
        typeNames = typeNameNodes.map((typeNameNode) => {
          const typeNameNodeContent = typeNameNode.getContent(),
                typeName = typeNameNodeContent; ///

          return typeName;
        }),
        typeName = typeNames.shift(), ///
        typePresent = fileContext.isTypePresentByTypeName(typeName);

  if (typePresent) {
    const node = typeDeclarationNode, ///
          message = `The type '${typeName}' is already present.`;

    throw new Error(node, message);
  }

  const superTypeName = typeNames.shift();

  if (superTypeName === undefined) {
    const type = Type.fromTypeName(typeName),
          typeString = type.asString();

    fileContext.addType(type);

    console.log(`Verified the '${typeString}' type.`);
  } else {
    const superType = fileContext.findTypeByTypeName(superTypeName);

    if (superType === undefined) {
      const node = typeDeclarationNode, ///
            message = `The super-type '${superTypeName}' is missing.`;

      throw new Error(node, message);
    }

    const type = Type.fromTypeNameAndSuperType(typeName, superType),
          typeString = type.asString();

    fileContext.addType(type);

    console.log(`Verified the '${typeString}' type.`);
  }
}

module.exports = verifyTypeDeclaration;
