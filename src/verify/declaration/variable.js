"use strict";

import verifyVariable from "../../verify/variable";

import { nodeQuery } from "../../utilities/query";

const typeNodeQuery = nodeQuery("/variableDeclaration/type"),
      variableNodeQuery = nodeQuery("/variableDeclaration/variable");

export default function verifyVariableDeclaration(variableDeclarationNode, context) {
  let variableDeclarationVerified;

  context.begin(variableDeclarationNode);

  const typeNode = typeNodeQuery(variableDeclarationNode),
        variableNode = variableNodeQuery(variableDeclarationNode),
        variableVVerified = verifyVariable(variableNode, typeNode, context);

  variableDeclarationVerified = variableVVerified;  ///

  variableDeclarationVerified ?
    context.complete(variableDeclarationNode) :
      context.halt(variableDeclarationNode);

  return variableDeclarationVerified;
}
