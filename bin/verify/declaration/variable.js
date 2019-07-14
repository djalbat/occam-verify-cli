'use strict';

const Error = require('../../error'),
      queries = require('../../queries'),
      Variable = require('../../variable'),
      verifyTypeName = require('../../verify/typeName');

const { nameNodeQuery, typeNameNodeQuery } = queries;

function verifyVariableDeclaration(variableDeclarationNode, context, rules) {
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

  const typeNameNode = typeNameNodeQuery(variableDeclarationNode),
        typeName = verifyTypeName(typeNameNode, context, rules),
        variable = Variable.fromNameAndTypeName(name, typeName);

  context.addVariable(variable);
}

module.exports = verifyVariableDeclaration;
