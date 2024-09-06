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
                termVerified = this.verifyTerm(termNode, localContext, verifyAhead);

          nonTerminalNodeVerified = termVerified; ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQuery: variableNodeQuery,
        verify: (node, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const variableNode = node, ///
                variableVerified = this.verifyVariable(variableNode, localContext, verifyAhead);

          nonTerminalNodeVerified = variableVerified; ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQuery: metavariableNodeQuery,
        verify: (node, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const metavariableNode = node, ///
                metavariableVerified = this.verifyMetavariable(metavariableNode, localContext, verifyAhead);

          nonTerminalNodeVerified = metavariableVerified; ///

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

  verifyMetavariable(metavariableNode, localContext, verifyAhead) {
    const standaloneMetavariableVerified = verifyStandaloneMetavariable(metavariableNode, localContext, verifyAhead),
          metavariableVerified = standaloneMetavariableVerified;  ///

    return metavariableVerified;
  }

  verifyVariable(variableNode, localContext, verifyAhead) {
    const standaloneVariableVerified = verifyStandaloneVariable(variableNode, localContext, verifyAhead),
          variableVerified = standaloneVariableVerified;  ///

    return variableVerified;
  }

  verifyTerm(termNode, localContext, verifyAhead) {
    const standaloneTermVerified = verifyStandaloneTerm(termNode, localContext, verifyAhead),
          termVerified = standaloneTermVerified;  ///

    return termVerified;
  }
}

const metaLevelVerifier = new MetaLevelVerifier();

export default metaLevelVerifier;
