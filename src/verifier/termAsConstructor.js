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
                termVerified = this.verifyNode(termNode, localContext, verifyAhead);

          nonTerminalNodeVerified = termVerified; ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQuery: typeNodeQuery,
        verify: (node, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const typeNode = node, ///
                typeVerified = this.verifyType(typeNode, localContext, verifyAhead);

          nonTerminalNodeVerified = typeVerified; ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQuery: nonTerminalNodeQuery,
        verify: (node, localContext, verifyAhead) => {
          const verified = super.verify(node, localContext, verifyAhead);

          return verified;
        }
      }
    ];

    const verified = verify(nodeQueryMaps, nonTerminalNode, localContext, verifyAhead);

    nonTerminalNodeVerified = verified; ///

    return nonTerminalNodeVerified;
  }

  verifyNode(termNode, localContext, verifyAhead) {
    const standaloneTermVerified = verifyStandaloneTerm(termNode, localContext, verifyAhead),
          termVerified = standaloneTermVerified;  ///

    return termVerified;
  }

  verifyType(typeNode, localContext, verifyAhead) {
    const standaloneTypeVerified = verifyStandaloneType(typeNode, localContext, verifyAhead),
          typeVerified = standaloneTypeVerified;  ///

    return typeVerified;
  }
}

const termAsConstructorVerifier = new TermAsConstructorVerifier();

export default termAsConstructorVerifier;
