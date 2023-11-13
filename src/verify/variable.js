"use strict";

import Variable from "../variable";

import { objectType } from "../type";
import { typeNameFromTypeNode, variableNameFromVariableNode } from "../utilities/query";

export default function verifyVariable(variableNode, typeNode, fileContext) {
  let variableVerified = false;

  const variableString = fileContext.nodeAsString(variableNode);

  fileContext.trace(`Verifying the '${variableString}' variable...`, variableNode);

  const variableName = variableNameFromVariableNode(variableNode),
        variablePresent = fileContext.isVariablePresentByVariableName(variableName);

  if (variablePresent) {
    fileContext.info(`The variable '${variableName}' is already present.`, variableNode);
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
        fileContext.info(`The '${variableName}' variable's '${typeName}' type is not present.`, variableNode);
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
    fileContext.debug(`...verified the '${variableString}' variable.`, variableNode);
  }

  return variableVerified;
}
