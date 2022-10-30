"use strict";

import { nodeQuery } from "../../utilities/query";

const typeNodeQuery = nodeQuery("/variableDeclaration/type"),
      variableNodeQuery = nodeQuery("/variableDeclaration/variable");

export default function verifyVariableDeclaration(variableDeclarationNode, context = this) {
  let variableDeclarationVerified;

  context.begin(variableDeclarationNode);

  const typeNode = typeNodeQuery(variableDeclarationNode),
        variableNode = variableNodeQuery(variableDeclarationNode),
        variableVVerified = context.verifyVariable(variableNode, typeNode);

  variableDeclarationVerified = variableVVerified;  ///

  variableDeclarationVerified ?
    context.complete(variableDeclarationNode) :
      context.halt(variableDeclarationNode);

  return variableDeclarationVerified;
}
