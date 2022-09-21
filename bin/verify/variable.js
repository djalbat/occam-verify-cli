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
    let variable = null;

    const typeName = typeNameFromTypeNode(typeNode);
    
    if (typeName === null) {
      const name = variableName,  ///
            type = null;

      variable = Variable.fromNameAndType(name, type);
    } else {
      const type = fileContext.findTypeByTypeName(typeName);

      if (type === null) {
        log.error(`The '${variableName}' variable's '${typeName}' type is missing.`);
      } else {
        const name = variableName;  ///

        variable = Variable.fromNameAndType(name, type);
      }
    }

    if (variable !== null) {
      const variableString = variable.asString();

      fileContext.addVariable(variable);

      variableVerified = true;

      log.info(`Verified the '${variableString}' variable.`);
    }
  }

  return variableVerified;
}

module.exports = verifyVariable;
