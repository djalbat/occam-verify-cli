"use strict";

const log = require("../log"),
      Variable = require("../variable");

const { nodeQuery } = require("../utilities/query");
const {nameFromNameNode} = require("../utilities/node");

const nameNodeQuery = nodeQuery("/*/@name");

function verifyVariable(variableNode, typeNode, fileContext) {
  let variableVerified = false;

  const variableNameNode = nameNodeQuery(variableNode),
        typeNameNode = nameNodeQuery(typeNode),
        variableName = nameFromNameNode(variableNameNode),
        typeName = nameFromNameNode(typeNameNode),
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

      variableVerified = true;

      log.info(`Verified the '${variableString}' variable.`);
    }
  }

  return variableVerified;
}

module.exports = verifyVariable;
