'use strict';

const Error = require('../../../error'),
      queries = require('../../../queries'),
      Constructor = require('../../../constructor');

const { nameNodeQuery, typeNameNodeQuery, typeNameNodesQuery, parenthesisedTypeNamesNodeQuery } = queries;

function verifyConstructorDeclarationNode(constructorsDeclarationNode, context) {
  const nameNode = nameNodeQuery(constructorsDeclarationNode),
        nameNodeContent = nameNode.getContent(),
        name = nameNodeContent, ///
        constructorPresent = context.isConstructorPresentByName(name);

  if (constructorPresent) {
    const node = constructorsDeclarationNode, ///
          message = `The constructor '${name}' is already present.`;

    throw new Error(node, message);
  }

  const typeNameNode = typeNameNodeQuery(constructorsDeclarationNode),
        typeNameNodeContent = typeNameNode.getContent(),
        typeName = typeNameNodeContent, ///
        typeMissing = context.isTypeMissingByTypeName(typeName);

  if (typeMissing) {
    const node = constructorsDeclarationNode, ///
          message = `The type '${typeName}' for the constructor '${name}' is missing.`;

    throw new Error(node, message);
  }

  const parenthesisedTypeNamesNode = parenthesisedTypeNamesNodeQuery(constructorsDeclarationNode);

  if (parenthesisedTypeNamesNode === undefined) {
    const constructor = Constructor.fromNameAndTypeName(name, typeName);

    context.addConstructor(constructor);
  } else {
    const typeNameNodes = typeNameNodesQuery(parenthesisedTypeNamesNode),
          typeNames = typeNameNodes.map((typeNameNode) => {
            const typeNameNodeContent = typeNameNode.getContent(),
                  typeName = typeNameNodeContent; ///

            return typeName;
          });

    typeNames.forEach((typeName) => {
      const typeMissing = context.isTypeMissingByTypeName(typeName);

      if (typeMissing) {
        const node = constructorsDeclarationNode, ///
              message = `The type '${typeName}' for the constructor '${name}' is missing.`;

        throw new Error(node, message);
      }
    });

    const constructor = Constructor.fromNameTypeNameAndTypeNames(name, typeName, typeNames);

    context.addConstructor(constructor);
  }
}

module.exports = verifyConstructorDeclarationNode;
