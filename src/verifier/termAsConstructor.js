"use strict";

import Verifier from "../verifier";
import LocalContext from "../context/local";

import { nodeQuery } from "../utilities/query";
import { verifyStandaloneType } from "../verify/type";
import { verifyStandaloneTerm } from "../verify/term";

const termNodeQuery = nodeQuery("/term!"),
      typeNodeQuery = nodeQuery("/type!");

class TermAsConstructorVerifier extends Verifier {
  verify(termNode, fileContext) {
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
        const localContext = LocalContext.fromFileContext(fileContext),
              standaloneTermVerified = verifyStandaloneTerm(termNode, localContext, verifyAhead),
              termVerified = standaloneTermVerified;  ///

        return termVerified;
      }
    },
    {
      nodeQuery: typeNodeQuery,
      verify: (typeNode, fileContext, verifyAhead) => {
        const localContext = LocalContext.fromFileContext(fileContext),
              standaloneTypeVerified = verifyStandaloneType(typeNode, localContext, verifyAhead),
              typeVerified = standaloneTypeVerified;  ///

        return typeVerified;
      }
    }
  ];
}

const termAsConstructorVerifier = new TermAsConstructorVerifier();

export default termAsConstructorVerifier;
