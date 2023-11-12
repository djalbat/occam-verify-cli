"use strict";

import verifyVariable from "../../verify/variable";

import { nodeQuery } from "../../utilities/query";
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
