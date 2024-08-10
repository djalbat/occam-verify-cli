"use strict";

import Constructor from "../constructor";
import LocalContext from "../context/local";
import termAsConstructorNodeVerifier from "../verifier/node/termAsConstructor";

import { typeNameFromTypeNode } from "../utilities/query";

export default function verifyTermAsConstructor(termNode, typeNode, fileContext) {
  let termVerifiedAsConstructor = false;

  const termString = fileContext.nodeAsString(termNode);

  fileContext.debug(`Verifying the '${termString}' term as a constructor...`, termNode);

  const nonTerminalNode = termNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
        localContext = LocalContext.fromFileContext(fileContext),
        childNodesVerified = termAsConstructorNodeVerifier.verifyChildNodes(childNodes, localContext, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

  if (childNodesVerified) {
    let type = null;

    if (typeNode === null) {
      termVerifiedAsConstructor = true;
    } else {
      const typeName = typeNameFromTypeNode(typeNode);

      type = fileContext.findTypeByTypeName(typeName);

      if (type !== null) {
        termVerifiedAsConstructor = true;
      } else {
        fileContext.debug(`The '${termString}' constructor's '${typeName}' type is not present.`, termNode);
      }
    }

    if (termVerifiedAsConstructor) {
      const tokens = fileContext.getTokens(),
            constructor = Constructor.fromTermNodeTypeAndTokens(termNode, type, tokens);

      fileContext.addConstructor(constructor);
    }
  }

  if (termVerifiedAsConstructor) {
    fileContext.debug(`...verified the '${termString}' term as a constructor.`, termNode);
  }

  return termVerifiedAsConstructor;
}
