'use strict';

const Error = require('../../../error'),
      queries = require('../../../queries'),
      Constructor = require('../../../constructor');

const { nameNodeQuery,
        typeNameNodeQuery,
        typeNameNodesQuery,
        parenthesisedTypeNamesNodeQuery } = queries;

function verifyNameConstructorDeclaration(constructorDeclarationNode, context) {
  const nameNode = nameNodeQuery(constructorDeclarationNode),
        nameNodeContent = nameNode.getContent(),
        name = nameNodeContent; ///

  const variablePresent = context.isVariablePresentByName(name);

  if (variablePresent) {
    const node = variableDeclarationNode, ///
          message = `The variable '${name}' is already present.`;

    throw new Error(node, message);
  }

  const constructorPresent = context.isConstructorPresentByName(name);

  if (constructorPresent) {
    const node = constructorDeclarationNode, ///
          message = `The constructor '${name}' is already present.`;

    throw new Error(node, message);
  }

  const typeNameNode = typeNameNodeQuery(constructorDeclarationNode),
        typeNameNodeContent = typeNameNode.getContent(),
        typeName = typeNameNodeContent, ///
        typeMissing = context.isTypeMissingByTypeName(typeName);

  if (typeMissing) {
    const node = constructorDeclarationNode, ///
          message = `The type '${typeName}' for the constructor '${name}' is missing.`;

    throw new Error(node, message);
  }

  const parenthesisedTypeNamesNode = parenthesisedTypeNamesNodeQuery(constructorDeclarationNode);

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
        const node = constructorDeclarationNode, ///
              message = `The type '${typeName}' for the constructor '${name}' is missing.`;

        throw new Error(node, message);
      }
    });

    const constructor = Constructor.fromNameTypeNameAndTypeNames(name, typeName, typeNames);

    context.addConstructor(constructor);
  }
}

module.exports = verifyNameConstructorDeclaration;
