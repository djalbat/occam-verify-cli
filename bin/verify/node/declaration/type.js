'use strict';

const dom = require('occam-dom');

const Type = require('../../../type'),
      Error = require('../../../error');

const { Query } = dom;

const typeNameQuery = Query.fromExpression('//typeName/@*');

function verifyTypeDeclarationNode(typeDeclarationNode, context) {
  const typeNameNodes = typeNameQuery.execute(typeDeclarationNode),
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
  } else {
    const subTypeName = typeNames.shift();

    if (subTypeName === undefined) {
      const type = Type.fromTypeName(typeName);

      context.addType(type);
    } else {
      const subTypeMissing = context.isSubTypeMissingBySubTypeName(subTypeName);

      if (subTypeMissing) {
        const node = typeDeclarationNode, ///
              message = `The sub-type '${subTypeName}' is missing.`;

        throw new Error(node, message);
      }

      const type = Type.fromTypeNameAndSubTypeName(typeName, subTypeName);

      context.addType(type);
    }
  }
}

module.exports = verifyTypeDeclarationNode;
