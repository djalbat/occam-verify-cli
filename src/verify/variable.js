"use strict";

import Variable from "../variable";

import { objectType } from "../type";
import { nodeAsString } from "../utilities/string";
import { typeNameFromTypeNode, variableNameFromVariableNode } from "../utilities/query";

export default function verifyVariable(variableNode, typeNode, fileContext) {
  let variableVerified = false;

  fileContext.begin(variableNode);

  const variableString = nodeAsString(variableNode);

  fileContext.debug(`Verifying the '${variableString}' variable...`);

  const variableName = variableNameFromVariableNode(variableNode),
        variablePresent = fileContext.isVariablePresentByVariableName(variableName);

  if (variablePresent) {
    fileContext.error(`The variable '${variableName}' is already present.`);
  } else {
    let variable;

    const typeName = typeNameFromTypeNode(typeNode);
    
    if (typeName === null) {
      const type = objectType,
            name = variableName;  ///

      variable = Variable.fromTypeAndName(type, name);
    } else {
      const type = fileContext.findTypeByTypeName(typeName);

      if (type === null) {
        fileContext.error(`The '${variableName}' variable's '${typeName}' type is missing.`);
      } else {
        const name = variableName;  ///

        variable = Variable.fromTypeAndName(type, name);
      }
    }

    if (variable !== null) {
      fileContext.addVariable(variable);

      variableVerified = true;
    }
  }

  if (variableVerified) {
    fileContext.info(`Verified the '${variableString}' variable.`);
  }

  variableVerified ?
    fileContext.complete(variableNode) :
      fileContext.halt(variableNode);

  return variableVerified;
}
