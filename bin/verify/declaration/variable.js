"use strict";

const log = require("../../log"),
      Variable = require("../../variable");

const { nodeQuery } = require("../../utilities/query"),
      { nameFromNameNode } = require("../../utilities/node");

const firstNameNodeQuery = nodeQuery("/variableDeclaration/@name[0]"),
      secondNameNodeQuery = nodeQuery("/variableDeclaration/@name[1]");

function verifyVariableDeclaration(variableDeclarationNode, fileContext) {
  let variableDeclarationVerified;

  const firstNameNode = firstNameNodeQuery(variableDeclarationNode),
        secondNameNode = secondNameNodeQuery(variableDeclarationNode),
        firstName = nameFromNameNode(secondNameNode),
        secondName = nameFromNameNode(firstNameNode),
        typeName = firstName,  ///
        variableName = secondName, ///
        name = variableName,  ///
        variablePresent = fileContext.isVariablePresentByName(name);

  if (variablePresent) {
    log.error(`The variable '${variableName}' is already present.`);
  } else {
    const type = fileContext.findTypeByTypeName(typeName);

    if (type === undefined) {
      log.error(`The '${variableName}' variable's '${typeName}' type is missing.`);
    } else {
      const variable = Variable.fromNameAndType(name, type),
            variableString = variable.asString();

      fileContext.addVariable(variable);

      variableDeclarationVerified = true;

      log.info(`Verified the '${variableString}' variable declaration.`);
    }
  }

  return variableDeclarationVerified;
}

module.exports = verifyVariableDeclaration;
