"use strict";

import shim from "../shim";
import Verifier from "../verifier";
import verifyType from "../verify/type";
import LocalContext from "../context/local";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term!"),
      typeNodeQuery = nodeQuery("/type!");

class TermAsConstructorVerifier extends Verifier {
  verifyTerm(termNode, fileContext) {
    let termVerifiedAsConstructor;

    const nonTerminalNode = termNode, ///
          childNodes = nonTerminalNode.getChildNodes(),
          childNodesVerified = this.verifyChildNodes(childNodes, fileContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    termVerifiedAsConstructor = childNodesVerified;  ///

    return termVerifiedAsConstructor;
  }

  static maps = [
    {
      nodeQuery: termNodeQuery,
      verify: (termNode, fileContext, verifyAhead) => {
        const { verifyTerm } = shim,
              terms = [],
              localContext = LocalContext.fromFileContext(fileContext),
              termVerified = verifyTerm(termNode, terms, localContext, verifyAhead);

        return termVerified;
      }
    },
    {
      nodeQuery: typeNodeQuery,
      verify: (typeNode, fileContext, verifyAhead) => {
        const localContext = LocalContext.fromFileContext(fileContext),
              typeVerified = verifyType(typeNode, localContext, verifyAhead);

        return typeVerified;
      }
    }
  ];
}

const termAsConstructorVerifier = new TermAsConstructorVerifier();

export default termAsConstructorVerifier;
