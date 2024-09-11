"use strict";

import verifyTermAsConstructor from "../../verify/termAsConstructor";

import { nodeQuery } from "../../utilities/query";
import { EMPTY_STRING } from "../../constants";

const termNodeQuery = nodeQuery("/constructorDeclaration/term"),
      typeNodeQuery = nodeQuery("/constructorDeclaration/type");

export default function verifyConstructorDeclaration(constructorDeclarationNode, fileContext) {
  let constructorDeclarationVerified;

  const termNode = termNodeQuery(constructorDeclarationNode),
        typeNode = typeNodeQuery(constructorDeclarationNode),
        termString = fileContext.nodeAsString(termNode),
        typeString = (typeNode === null) ?
                       EMPTY_STRING :
                         fileContext.nodeAsString(typeNode);

  (typeString === EMPTY_STRING) ?
    fileContext.trace(`Verifying the '${termString}' constructor declaration...`, constructorDeclarationNode) :
      fileContext.trace(`Verifying the '${termString}:${typeString}' constructor declaration...`, constructorDeclarationNode);

  const termVerifiedAsConstructor = verifyTermAsConstructor(termNode, typeNode, fileContext);

  constructorDeclarationVerified = termVerifiedAsConstructor; ///

  if (constructorDeclarationVerified) {
    (typeString === EMPTY_STRING) ?
      fileContext.debug(`...verified the '${termString}' constructor declaration.`, constructorDeclarationNode) :
        fileContext.debug(`...verified the '${termString}:${typeString}' constructor declaration.`, constructorDeclarationNode);
  }

  return constructorDeclarationVerified;
}
