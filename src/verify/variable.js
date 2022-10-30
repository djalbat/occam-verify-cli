"use strict";

import Variable from "../variable";

import { nodeAsString } from "../utilities/string";
import { typeNameFromTypeNode, variableNameFromVariableNode } from "../utilities/query";

export default function verifyVariable(variableNode, typeNode, context = this) {
  let variableVerified = false;

  context.begin(variableNode);

  let variable = null;

  const variableName = variableNameFromVariableNode(variableNode),
        variablePresent = context.isVariablePresentByVariableName(variableName);

  if (variablePresent) {
    context.error(`The variable '${variableName}' is already present.`);
  } else {
    const typeName = typeNameFromTypeNode(typeNode);
    
    if (typeName === null) {
      const type = null,
            name = variableName;  ///

      variable = Variable.fromTypeAndName(type, name);
    } else {
      const type = context.findTypeByTypeName(typeName);

      if (type === null) {
        context.error(`The '${variableName}' variable's '${typeName}' type is missing.`);
      } else {
        const name = variableName;  ///

        variable = Variable.fromTypeAndName(type, name);
      }
    }

    if (variable !== null) {
      const variableString = nodeAsString(variableName);

      context.info(`Verified the '${variableString}' variable.`);

      context.addVariable(variable);

      variableVerified = true;
    }
  }

  variableVerified ?
    context.complete(variableNode) :
      context.halt(variableNode);

  return variableVerified;
}
