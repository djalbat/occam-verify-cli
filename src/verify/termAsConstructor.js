"use strict";

import Constructor from "../constructor";
import LocalContext from "../context/local";
import termAsConstructorNodeVerifier from "../verifier/node/termAsConstructor";

export default function verifyTermAsConstructor(termNode, typeNode, fileContext) {
  let termVerifiedAsConstructor = false;

  const termString = fileContext.nodeAsString(termNode);

  fileContext.debug(`Verifying the '${termString}' term as a constructor...`, termNode);

  const localContext = LocalContext.fromFileContext(fileContext),
        nonTerminalNode = termNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
        childNodesVerified = termAsConstructorNodeVerifier.verifyChildNodes(childNodes, localContext, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

  if (childNodesVerified) {
    let type = null;

    if (typeNode === null) {
      termVerifiedAsConstructor = true;
    } else {
      type = fileContext.findTypeByTypeNode(typeNode);

      if (type !== null) {
        termVerifiedAsConstructor = true;
      } else {
        const typeString = fileContext.nodeAsString(typeNode);

        fileContext.debug(`The '${termString}' constructor's '${typeString}' type is not present.`, termNode);
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
