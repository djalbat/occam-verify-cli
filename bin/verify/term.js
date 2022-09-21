"use strict";

const log = require("../log"),
      verifyTermAgainstConstructor = require("../verify/termAgainstConstructor");

const { nodeQuery, variableNameFromVariableNode} = require("../utilities/query");

const variableNodeQuery = nodeQuery("/term/variable!");

function verifyTerm(termNode, types, context) {
  let termVerified = false;

  const variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    const variableName = variableNameFromVariableNode(variableNode),
          variablePresent = context.isVariablePresentByVariableName(variableName);

    if (!variablePresent) {
      log.error(`The ${variableName} variable is not present.`)
    } else {
      const variable = context.findVariableByVariableName(variableName),
            type = variable.getType();

      types.push(type);

      termVerified = true;
    }
  } else {
    const constructors = context.getConstructors(),
          constructor = constructors.find((constructor) => {
            const termVerifiedAgainstConstructor = verifyTermAgainstConstructor(termNode, constructor, context);

            if (termVerifiedAgainstConstructor) {
              return true;
            }
          }) || null;

    if (constructor !== null) {
      const type = constructor.getType();

      types.push(type);

      termVerified = true;
    }
  }

  return termVerified;
}

module.exports = verifyTerm;
