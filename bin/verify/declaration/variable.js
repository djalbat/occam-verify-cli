'use strict';

const Error = require('../../error'),
      queries = require('../../queries'),
      Variable = require('../../variable');

const { nameNodeQuery, typeNameNodeQuery } = queries;

function verifyVariableDeclaration(variableDeclarationNode, context) {
  const nameNode = nameNodeQuery(variableDeclarationNode),
        nameNodeContent = nameNode.getContent(),
        name = nameNodeContent; ///

  const constructorPresent = context.isConstructorPresentByName(name);

  if (constructorPresent) {
    const node = variableDeclarationNode, ///
          message = `The constructor '${name}' is already present.`;

    throw new Error(node, message);
  }

  const variablePresent = context.isVariablePresentByName(name);

  if (variablePresent) {
    const node = variableDeclarationNode, ///
          message = `The variable '${name}' is already present.`;

    throw new Error(node, message);
  }

  const typeNameNode = typeNameNodeQuery(variableDeclarationNode);

  if (typeNameNode === undefined) {
    const variable = Variable.fromName(name);

    context.addVariable(variable);
  } else {
    const typeNameNodeContent = typeNameNode.getContent(),
          typeName = typeNameNodeContent, ///
          typeMissing = context.isTypeMissingByTypeName(typeName);

    if (typeMissing) {
      const node = variableDeclarationNode, ///
            message = `The type '${typeName}' for the variable '${name}' is missing.`;

      throw new Error(node, message);
    }

    const variable = Variable.fromNameAndTypeName(name, typeName);

    context.addVariable(variable);
  }
}

module.exports = verifyVariableDeclaration;
