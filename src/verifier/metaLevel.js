"use strict";

import Verifier from "../verifier";

import { verify } from "../verifier";
import { nodeQuery } from "../utilities/query";
import { verifyStandaloneTerm } from "../verify/term";
import { verifyStandaloneVariable } from "../verify/variable";
import { verifyStandaloneMetavariable } from "../verify/metavariable";

const termNodeQuery = nodeQuery("/term!"),
      variableNodeQuery = nodeQuery("/variable!"),
      nonTerminalNodeQuery = nodeQuery("/*"),
      metavariableNodeQuery = nodeQuery("/metavariable!");

class MetaLevelVerifier extends Verifier {
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
        nodeQuery: variableNodeQuery,
        verify: (node, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const variableNode = node, ///
                variableNodeVerified = this.verifyVariableNode(variableNode, localContext, verifyAhead);

          nonTerminalNodeVerified = variableNodeVerified; ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQuery: metavariableNodeQuery,
        verify: (node, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const metavariableNode = node, ///
                metavariableNodeVerified = this.verifyMetavariableNode(metavariableNode, localContext, verifyAhead);

          nonTerminalNodeVerified = metavariableNodeVerified; ///

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

  verifyMetavariableNode(metavariableNode, localContext, verifyAhead) {
    const standaloneMetavariableVerified = verifyStandaloneMetavariable(metavariableNode, localContext, verifyAhead),
          metavariableNodeVerified = standaloneMetavariableVerified;  ///

    return metavariableNodeVerified;
  }

  verifyVariableNode(variableNode, localContext, verifyAhead) {
    const standaloneVariableVerified = verifyStandaloneVariable(variableNode, localContext, verifyAhead),
          variableNodeVerified = standaloneVariableVerified;  ///

    return variableNodeVerified;
  }

  verifyTermNode(termNode, localContext, verifyAhead) {
    const standaloneTermVerified = verifyStandaloneTerm(termNode, localContext, verifyAhead),
          termNodeVerified = standaloneTermVerified;  ///

    return termNodeVerified;
  }
}

const metaLevelVerifier = new MetaLevelVerifier();

export default metaLevelVerifier;
