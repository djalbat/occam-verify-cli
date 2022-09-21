"use strict";

const log = require("../log"),
      Variable = require("../variable");

const { typeNameFromTypeNode, variableNameFromVariableNode } = require("../utilities/query");

function verifyVariable(variableNode, typeNode, fileContext) {
  let variableVerified = false;

  const variableName = variableNameFromVariableNode(variableNode),
        variablePresent = fileContext.isVariablePresentByVariableName(variableName);

  if (variablePresent) {
    log.error(`The variable '${variableName}' is already present.`);
  } else {
    const typeName = typeNameFromTypeNode(typeNode),
          type = fileContext.findTypeByTypeName(typeName);

    if (type === undefined) {
      log.error(`The '${variableName}' variable's '${typeName}' type is missing.`);
    } else {
      const name = variableName,  ///
            variable = Variable.fromNameAndType(name, type),
            variableString = variable.asString();

      fileContext.addVariable(variable);

      variableVerified = true;

      log.info(`Verified the '${variableString}' variable.`);
    }
  }

  return variableVerified;
}

module.exports = verifyVariable;
