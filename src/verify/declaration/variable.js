"use strict";

import verifyVariable from "../../verify/variable";

import { nodeQuery } from "../../utilities/query";

const typeNodeQuery = nodeQuery("/variableDeclaration/type"),
      variableNodeQuery = nodeQuery("/variableDeclaration/variable");

export default function verifyVariableDeclaration(variableDeclarationNode, context) {
  const typeNode = typeNodeQuery(variableDeclarationNode),
        variableNode = variableNodeQuery(variableDeclarationNode),
        variableVVerified = verifyVariable(variableNode, typeNode, context),
        variableDeclarationVerified = variableVVerified;  ///

  return variableDeclarationVerified;
}
