"use strict";

import { nodeQuery, variableNameFromVariableNode} from "../utilities/query";

const variableNodeQuery = nodeQuery("/term/variable!");

export default function verifyTermAsVariable(termNode, types, names, values, context = this) {
  let termVerifiedAsVariable = false;

  context.begin(termNode);

  const variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    const variableName = variableNameFromVariableNode(variableNode),
          variablePresent = context.isVariablePresentByVariableName(variableName);

    if (!variablePresent) {
      context.error(`The ${variableName} variable is not present.`)
    } else {
      const variable = context.findVariableByVariableName(variableName),
            type = variable.getType(),
            name = variableName,  ///
            value = variable.getValue();

      types.push(type);

      names.push(name);

      values.push(value);

      termVerifiedAsVariable = true;
    }
  }

  termVerifiedAsVariable ?
    context.complete(termNode) :
      context.halt(termNode);

  return termVerifiedAsVariable;
}
