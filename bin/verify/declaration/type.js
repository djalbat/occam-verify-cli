'use strict';

const Type = require('../../type'),
      Error = require('../../error'),
      queries = require('../../queries');

const { typeNameNodesQuery } = queries;

function verifyTypeDeclaration(typeDeclarationNode, context, rules) {
  const typeNameNodes = typeNameNodesQuery(typeDeclarationNode),
        typeNames = typeNameNodes.map((typeNameNode) => {
          const typeNameNodeContent = typeNameNode.getContent(),
                typeName = typeNameNodeContent; ///

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
