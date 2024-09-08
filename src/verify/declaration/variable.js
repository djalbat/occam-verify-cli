"use strict";

import Variable from "../../variable";
import VariableAssignment from "../../assignment/variable";

import { nodeQuery } from "../../utilities/query";
import { objectType } from "../../type";
import { EMPTY_STRING } from "../../constants";

const typeNodeQuery = nodeQuery("/variableDeclaration/type"),
      variableNodeQuery = nodeQuery("/variableDeclaration/variable");

export default function verifyVariableDeclaration(variableDeclarationNode, fileContext) {
  let variableDeclarationVerified;

  const typeNode = typeNodeQuery(variableDeclarationNode),
        variableNode = variableNodeQuery(variableDeclarationNode),
        typeString = fileContext.nodeAsString(typeNode),
        variableString = fileContext.nodeAsString(variableNode);

  (typeString === EMPTY_STRING) ?
    fileContext.trace(`Verifying the '${variableString}' variable declaration...`, variableDeclarationNode) :
      fileContext.trace(`Verifying the '${variableString}:${typeString}' variable declaration...`, variableDeclarationNode);

  const variableVVerified = verifyVariable(variableNode, typeNode, fileContext);

  variableDeclarationVerified = variableVVerified;  ///

  if (variableDeclarationVerified) {
    (typeString === EMPTY_STRING) ?
      fileContext.debug(`...verified the '${variableString}' variable declaration.`, variableDeclarationNode) :
        fileContext.debug(`...verified the '${variableString}:${typeString}' variable declaration.`, variableDeclarationNode);
  }

  return variableDeclarationVerified;
}

function verifyVariable(variableNode, typeNode, fileContext) {
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
