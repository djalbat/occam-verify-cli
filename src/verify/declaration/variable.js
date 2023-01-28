"use strict";

import verifyVariable from "../../verify/variable";

import { nodeQuery } from "../../utilities/query";

const typeNodeQuery = nodeQuery("/variableDeclaration/type"),
      variableNodeQuery = nodeQuery("/variableDeclaration/variable");

export default function verifyVariableDeclaration(variableDeclarationNode, fileContext) {
  let variableDeclarationVerified;

  const typeNode = typeNodeQuery(variableDeclarationNode),
        variableNode = variableNodeQuery(variableDeclarationNode),
        variableVVerified = verifyVariable(variableNode, typeNode, fileContext);

  variableDeclarationVerified = variableVVerified;  ///

  return variableDeclarationVerified;
}
