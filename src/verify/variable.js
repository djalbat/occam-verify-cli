"use strict";

import Variable from "../variable";
import VariableAssignment from "../assignment/variable";

import { objectType } from "../type";

export default function verifyVariable(variableNode, typeNode, fileContext) {
  let variableVerified = false;

  const variableString = fileContext.nodeAsString(variableNode);

  fileContext.trace(`Verifying the '${variableString}' variable...`, variableNode);

  const variablePresent = fileContext.isVariablePresentByVariableNode(variableNode);

  if (variablePresent) {
    fileContext.debug(`The variable '${variableString}' is already present.`, variableNode);
  } else {
    let variable;

    if (typeNode === null) {
      const type = objectType;

      variable = Variable.fromVariableNodeAndType(variableNode, type);
    } else {
      const type = fileContext.findTypeByTypeNode(typeNode);

      if (type === null) {
        const typeString = fileContext.nodeAsString(typeNode);

        fileContext.debug(`The '${variableString}' variable's '${typeString}' type is not present.`, variableNode);
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

export function verifyStandaloneVariable(variableNode, localContext, verifyAhead) {
  let standaloneVariableVerified = false;

  const variableString = localContext.nodeAsString(variableNode);

  localContext.trace(`Verifying the '${variableString}' standalone variable...`, variableNode);

  const variablePresent = localContext.isVariablePresentByVariableNode(variableNode);

  if (variablePresent) {
    const verifiedAhead = verifyAhead();

    standaloneVariableVerified = verifiedAhead; ///
  }

  if (standaloneVariableVerified) {
    localContext.debug(`...verified the '${variableString}' standalone variable.`, variableNode);
  }

  return standaloneVariableVerified;
}
