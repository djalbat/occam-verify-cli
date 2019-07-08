'use strict';

const Error = require('../../../error'),
      queries = require('../../../queries'),
      Constructor = require('../../../constructor');

const { typeNameNodeQuery, typeNameNodesQuery, constructorNameNodeQuery, parenthesisedTypeNamesNodeQuery } = queries;

function verifyConstructorDeclarationNode(constructorsDeclarationNode, context) {
  const constructorNameNode = constructorNameNodeQuery(constructorsDeclarationNode),
        constructorNameNodeContent = constructorNameNode.getContent(),
        constructorName = constructorNameNodeContent, ///
        constructorPresent = context.isConstructorPresentByConstructorName(constructorName);

  if (constructorPresent) {
    const node = constructorsDeclarationNode, ///
          message = `The constructor '${constructorName}' is already present.`;

    throw new Error(node, message);
  }

  const typeNameNode = typeNameNodeQuery(constructorsDeclarationNode),
        typeNameNodeContent = typeNameNode.getContent(),
        typeName = typeNameNodeContent, ///
        typeMissing = context.isTypeMissingByTypeName(typeName);

  if (typeMissing) {
    const node = constructorsDeclarationNode, ///
          message = `The type '${typeName}' for the constructor '${constructorName}' is missing.`;

    throw new Error(node, message);
  }

  const parenthesisedTypeNamesNode = parenthesisedTypeNamesNodeQuery(constructorsDeclarationNode);

  if (parenthesisedTypeNamesNode === undefined) {
    const constructor = Constructor.fromConstructorNameAndTypeName(constructorName, typeName);

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
              message = `The type '${typeName}' for the constructor '${constructorName}' is missing.`;

        throw new Error(node, message);
      }
    });

    const constructor = Constructor.fromConstructorNameTypeNameAndTypeNames(constructorName, typeName, typeNames);

    context.addConstructor(constructor);
  }
}

module.exports = verifyConstructorDeclarationNode;
