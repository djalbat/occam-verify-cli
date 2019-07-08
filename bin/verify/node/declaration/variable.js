'use strict';

const Error = require('../../../error'),
      queries = require('../../../queries'),
      Variable = require('../../../variable');

const { typeNameNodeQuery, variableNameNodeQuery } = queries;

function verifyVariableDeclarationNode(variablesDeclarationNode, context) {
  const variableNameNode = variableNameNodeQuery(variablesDeclarationNode),
        variableNameNodeContent = variableNameNode.getContent(),
        variableName = variableNameNodeContent, ///
        variablePresent = context.isVariablePresentByVariableName(variableName);

  if (variablePresent) {
    const node = variablesDeclarationNode, ///
          message = `The variable '${variableName}' is already present.`;

    throw new Error(node, message);
  }

  const typeNameNode = typeNameNodeQuery(variablesDeclarationNode);

  if (typeNameNode === undefined) {
    const variable = Variable.fromVariableName(variableName);

    context.addVariable(variable);
  } else {
    const typeNameNodeContent = typeNameNode.getContent(),
          typeName = typeNameNodeContent, ///
          typeMissing = context.isTypeMissingByTypeName(typeName);

    if (typeMissing) {
      const node = variablesDeclarationNode, ///
            message = `The type '${typeName}' for the variable '${variableName}' is missing.`;

      throw new Error(node, message);
    }

    const variable = Variable.fromVariableNameAndTypeName(variableName, typeName);

    context.addVariable(variable);
  }
}

module.exports = verifyVariableDeclarationNode;
