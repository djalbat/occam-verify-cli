"use strict";

import Variable from "../variable";

import { objectType } from "../type";
import { typeNameFromTypeNode, variableNameFromVariableNode } from "../utilities/query";

export default function verifyVariable(variableNode, typeNode, fileContext) {
  let variableVerified = false;

  const variableName = variableNameFromVariableNode(variableNode),
        variableString = fileContext.nodeAsString(variableNode),
        variablePresent = fileContext.isVariablePresentByVariableName(variableName);

  if (variablePresent) {
    fileContext.error(`The variable '${variableName}' is already present.`, variableNode);
  } else {
    let variable;

    const typeName = typeNameFromTypeNode(typeNode);
    
    if (typeName === null) {
      const name = variableName,  ///
            type = objectType;

        variable = Variable.fromNameAndType(name, type);
    } else {
      const type = fileContext.findTypeByTypeName(typeName);

      if (type === null) {
        fileContext.error(`The '${variableName}' variable's '${typeName}' type is not present.`, variableNode);
      } else {
        const name = variableName;  ///

        variable = Variable.fromNameAndType(name, type);
      }
    }

    if (variable !== null) {
      fileContext.addVariable(variable);

      variableVerified = true;
    }
  }

  if (variableVerified) {
    fileContext.info(`Verified the '${variableString}' variable.`, variableNode);
  }

  return variableVerified;
}
