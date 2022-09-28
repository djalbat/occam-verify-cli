"use strict";

const { loggingUtilities } = require("necessary");

const { nodeQuery, variableNameFromVariableNode} = require("../utilities/query");

const variableNodeQuery = nodeQuery("/term/variable!");

const { log } = loggingUtilities;

function verifyTermAsVariable(termNode, types, values, context) {
  let termVerifiedAsVariable = false;

  const variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    const variableName = variableNameFromVariableNode(variableNode),
          variablePresent = context.isVariablePresentByVariableName(variableName);

    if (!variablePresent) {
      log.error(`The ${variableName} variable is not present.`)
    } else {
      const inAntecedent = context.isInAntecedent(),
            variable = context.findVariableByVariableName(variableName),
            type = variable.getType();

      if (inAntecedent && (type !== null)) {
        log.error(`The type of the ${variableName} variable must be null in an antecedent.`)
      } else {
        const value = variable.getValue();

        types.push(type);

        values.push(value);

        termVerifiedAsVariable = true;
      }
    }
  }

  return termVerifiedAsVariable;
}

module.exports = verifyTermAsVariable;
