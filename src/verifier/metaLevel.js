"use strict";

import Verifier from "../verifier";

import { nodeQuery } from "../utilities/query";
import { verifyStandaloneTerm } from "../verify/term";
import { verifyStandaloneVariable } from "../verify/variable";
import { verifyStandaloneMetavariable } from "../verify/metavariable";

const termNodeQuery = nodeQuery("/term!"),
      variableNodeQuery = nodeQuery("/variable!"),
      metavariableNodeQuery = nodeQuery("/metavariable!");

class MetaLevelVerifier extends Verifier {
  verify(node, localContext) {
    let verified;

    const nonTerminalNode = node, ///
          nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNode, localContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    verified = nonTerminalNodeVerified;  ///

    return verified;
  }

  static maps = [
    {
      nodeQuery: metavariableNodeQuery,
      verify: (metavariableNode, localContext, verifyAhead) => {
        const standaloneMetavariableVerified = verifyStandaloneMetavariable(metavariableNode, localContext, verifyAhead),
              metavariableVerified = standaloneMetavariableVerified;  ///

        return metavariableVerified;
      }
    },
    {
      nodeQuery: variableNodeQuery,
      verify: (variableNode, localContext, verifyAhead) => {
        const standaloneVariableVerified = verifyStandaloneVariable(variableNode, localContext, verifyAhead),
              variableVerified = standaloneVariableVerified;  ///

        return variableVerified;
      }
    },
    {
      nodeQuery: termNodeQuery,
      verify: (termNode, localContext, verifyAhead) => {
        const standaloneTermVerified = verifyStandaloneTerm(termNode, localContext, verifyAhead),
              termVerified = standaloneTermVerified;  ///

        return termVerified;
      }
    }
  ];
}

const metaLevelVerifier = new MetaLevelVerifier();

export default metaLevelVerifier;
