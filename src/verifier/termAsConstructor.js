"use strict";

import Verifier from "../verifier";

import { verify } from "../verifier";
import { nodeQuery } from "../utilities/query";
import { verifyStandaloneType } from "../verify/type";
import { verifyStandaloneTerm } from "../verify/term";

const termNodeQuery = nodeQuery("/term!"),
      typeNodeQuery = nodeQuery("/type!"),
      nonTerminalNodeQuery = nodeQuery("/*");

class TermAsConstructorVerifier extends Verifier {
  verifyNonTerminalNode(nonTerminalNode, localContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const nodeQueryMaps = [
      {
        nodeQuery: termNodeQuery,
        verify: (node, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const termNode = node, ///
            termNodeVerified = this.verifyTermNode(termNode, localContext, verifyAhead);

          nonTerminalNodeVerified = termNodeVerified; ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQuery: typeNodeQuery,
        verify: (node, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const typeNode = node, ///
            typeNodeVerified = this.verifyTypeNode(typeNode, localContext, verifyAhead);

          nonTerminalNodeVerified = typeNodeVerified; ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQuery: nonTerminalNodeQuery,
        verify: (node, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const nonTerminalNode = node; ///

          nonTerminalNodeVerified =

            super.verifyNonTerminalNode(nonTerminalNode, localContext, verifyAhead);

          return nonTerminalNodeVerified;
        }
      }
    ];

    const nodeVerified = verify(nodeQueryMaps, nonTerminalNode, localContext, verifyAhead);

    nonTerminalNodeVerified = nodeVerified; ///

    return nonTerminalNodeVerified;
  }

  verifyTermNode(termNode, localContext, verifyAhead) {
    const standaloneTermVerified = verifyStandaloneTerm(termNode, localContext, verifyAhead),
          termNodeVerified = standaloneTermVerified;  ///

    return termNodeVerified;
  }

  verifyTypeNode(typeNode, localContext, verifyAhead) {
    const standaloneTypeVerified = verifyStandaloneType(typeNode, localContext, verifyAhead),
          typeNodeVerified = standaloneTypeVerified;  ///

    return typeNodeVerified;
  }
}

const termAsConstructorVerifier = new TermAsConstructorVerifier();

export default termAsConstructorVerifier;
