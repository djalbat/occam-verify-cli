"use strict";

import Variable from "../variable";
import VariableAssignment from "../assignment/variable";

import { objectType } from "../type";
import { typeNameFromTypeNode } from "../utilities/query";

export default function verifyVariable(variableNode, typeNode, fileContext) {
  let variableVerified = false;

  const variableString = fileContext.nodeAsString(variableNode);

  fileContext.trace(`Verifying the '${variableString}' variable...`, variableNode);

  const variablePresent = fileContext.isVariablePresentByVariableNode(variableNode);

  if (variablePresent) {
    fileContext.debug(`The variable '${variableString}' is already present.`, variableNode);
  } else {
    let variable;

    const typeName = typeNameFromTypeNode(typeNode);
    
    if (typeName === null) {
      const type = objectType;

      variable = Variable.fromVariableNodeAndType(variableNode, type);
    } else {
      const type = fileContext.findTypeByTypeName(typeName);

      if (type === null) {
        fileContext.debug(`The '${variableString}' variable's '${typeName}' type is not present.`, variableNode);
      } else {
        variable = Variable.fromVariableNodeAndType(variableNode, type);
      }
    }

    if (variable !== null) {
      const variableAssignment = VariableAssignment.fromVariable(variable),
            variableAssigned = variableAssignment.assign(fileContext);

      if (variableAssigned) {
        variableVerified = true;
      }
    }
  }

  if (variableVerified) {
    fileContext.debug(`...verified the '${variableString}' variable.`, variableNode);
  }

  return variableVerified;
}

export function verifyStandaloneVariable(variableNode, localMetaContext, verifyAhead) {
  let standaloneVariableVerified = false;

  const variableString = localMetaContext.nodeAsString(variableNode);

  localMetaContext.trace(`Verifying the '${variableString}' standalone variable...`, variableNode);

  const variablePresent = localMetaContext.isVariablePresentByVariableNode(variableNode);

  if (variablePresent) {
    const verifiedAhead = verifyAhead();

    standaloneVariableVerified = verifiedAhead; ///
  }

  if (standaloneVariableVerified) {
    localMetaContext.debug(`...verified the '${variableString}' standalone variable.`, variableNode);
  }

  return standaloneVariableVerified;
}
