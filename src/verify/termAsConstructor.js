"use strict";

import Constructor from "../constructor";
import termAsConstructorVerifier from "../verifier/termAsConstructor";

import { first } from "../utilities/array";

export default function verifyTermAsConstructor(termNode, typeNode, fileContext) {
  let termVerifiedAsConstructor = false;

  const termString = fileContext.nodeAsString(termNode);

  fileContext.debug(`Verifying the '${termString}' term as a constructor...`, termNode);

  const types = [],
        typeVerified = verifyType(typeNode, types, fileContext);

  let type;

  if (typeVerified) {
    const firstType = first(types);

    type = firstType; ///

    termVerifiedAsConstructor = termAsConstructorVerifier.verify(termNode, fileContext);
  }

  if (termVerifiedAsConstructor) {
    const tokens = fileContext.getTokens(),
          constructor = Constructor.fromTermNodeTypeAndTokens(termNode, type, tokens);

    fileContext.addConstructor(constructor);
  }

  if (termVerifiedAsConstructor) {
    fileContext.debug(`...verified the '${termString}' term as a constructor.`, termNode);
  }

  return termVerifiedAsConstructor;
}

function verifyType(typeNode, types, fileContext) {
  let typeVerified = false;

  if (typeNode === null) {
    const type = null;

    types.push(type);

    typeVerified = true;
  } else {
    const type = fileContext.findTypeByTypeNode(typeNode);

    if (type !== null) {
      types.push(type);

      typeVerified = true;
    } else {
      const typeString = fileContext.nodeAsString(typeNode);

      fileContext.debug(`The '${typeString}' type is not present.`, typeNode);
    }
  }

  return typeVerified;
}
