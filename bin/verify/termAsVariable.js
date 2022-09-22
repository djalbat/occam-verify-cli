"use strict";

const log = require("../log");

const { nodeQuery, variableNameFromVariableNode} = require("../utilities/query");

const variableNodeQuery = nodeQuery("/term/variable!");

function verifyTermAsVariable(termNode, types, supposition, context) {
  let termVerifiedAsVariable = false;

  const variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    const variableName = variableNameFromVariableNode(variableNode),
          variablePresent = context.isVariablePresentByVariableName(variableName);

    if (!variablePresent) {
      log.error(`The ${variableName} variable is not present.`)
    } else {
      const variable = context.findVariableByVariableName(variableName),
            type = variable.getType();

      if (supposition) {
        if (type !== null) {
          log.error(`The type of the ${variableName} variable must be null in a supposition.`)
        } else {
          types.push(type);

          termVerifiedAsVariable = true;
        }
      } else {
        types.push(type);

        termVerifiedAsVariable = true;
      }
    }
  }

  return termVerifiedAsVariable;
}

module.exports = verifyTermAsVariable;
