'use strict';

const dom = require('occam-dom'),
      necessary = require('necessary');

const Type = require('../../../type'),
      Error = require('../../../error');

const { Query } = dom,
      { arrayUtilities } = necessary,
      { first, second } = arrayUtilities;

const typeNameQuery = Query.fromExpression('//typeName/@*');

function verifyTypeDeclarationNode(typeDeclarationNode, context) {
  const typeNameNodes = typeNameQuery.execute(typeDeclarationNode),
        typeNames = typeNameNodes.map((typeNameNode) => {
          const typeNameNodeContent = typeNameNode.getContent(),
                typeName = typeNameNodeContent; ///

          return typeName;
        }),
        firstTypeName = first(typeNames),
        typeName = firstTypeName,
        typePresent = context.isTypePresentByTypeName(typeName);

    if (typePresent) {
      const node = typeDeclarationNode, ///
            message = `The type ${typeName} already exists.`;

      throw new Error(node, message);
    } else {
      const typeNamesLength = typeNames.length,
            firstTypeName = first(typeNames),
            typeName = firstTypeName;

      if (false) {
        ///
      } else if (typeNamesLength === 1) {
        const type = Type.fromTypeName(typeName);

        context.addType(type);
      } else if (typeNamesLength === 2) {
        const secondTypeName = second(typeNames),
              subTypeName = secondTypeName,
              type = Type.fromTypeNameAndSubTypeName(typeName, subTypeName);

        context.addType(type);
      }
    }
}

module.exports = verifyTypeDeclarationNode;
