"use strict";

import Variable from "../variable";

import { typeNameFromTypeNode, variableNameFromVariableNode } from "../utilities/query";

export default function verifyVariable(variableNode, typeNode, context) {
  let variableVerified = false;

  const variableName = variableNameFromVariableNode(variableNode),
        variablePresent = context.isVariablePresentByVariableName(variableName);

  if (variablePresent) {
    context.error(`The variable '${variableName}' is already present.`);
  } else {
    let variable = null;

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
      const variableString = variable.asString();

      context.addVariable(variable);

      variableVerified = true;

      context.info(`Verified the '${variableString}' variable.`);
    }
  }

  return variableVerified;
}
