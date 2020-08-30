"use strict";

const log = require("../log"),
      Variable = require("../variable");

function verifyVariable(variableName, typeName, fileContext) {
  let variableVerified = false;

  const name = variableName,  ///
        variablePresent = fileContext.isVariablePresentByName(name);

  if (variablePresent) {
    log.error(`The variable '${variableName}' is already present.`);
  } else {
    const type = fileContext.findTypeByTypeName(typeName);

    if (type === undefined) {
      log.error(`The variable '${variableName}''s type '${typeName}' is missing.`);
    } else {
      const variable = Variable.fromNameAndType(name, type),
            variableString = variable.asString();

      fileContext.addVariable(variable);

      variableVerified = true;

      log.info(`Verified the '${variableString}' variable.`);
    }
  }

  return variableVerified;
}

module.exports = verifyVariable;
