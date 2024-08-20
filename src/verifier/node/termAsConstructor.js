"use strict";

import NodeVerifier from "../../verifier/node";

import { nodeQuery } from "../../utilities/query";
import { verifyNode } from "../../utilities/verifier";
import { verifyStandaloneType } from "../../verify/type";
import { verifyStandaloneTerm } from "../../verify/term";

const termNodeQuery = nodeQuery("/term!"),
      typeNodeQuery = nodeQuery("/type!");

class TermAsConstructorNodeVerifier extends NodeVerifier {
  verifyNonTerminalNode(nonTerminalNode, localContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const nodeQueryMaps = [
      {
        nodeQuery: termNodeQuery,
        verifyNode: this.verifyTermNode
      },
      {
        nodeQuery: typeNodeQuery,
        verifyNode: this.verifyTypeNode
      }
    ];

    const nodeVerified = verifyNode(nodeQueryMaps, nonTerminalNode, localContext, verifyAhead);

    nonTerminalNodeVerified = nodeVerified ?
                                true :
                                  super.verifyNonTerminalNode(nonTerminalNode, localContext, verifyAhead);

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

const termAsConstructorNodeVerifier = new TermAsConstructorNodeVerifier();

export default termAsConstructorNodeVerifier;
