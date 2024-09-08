"use strict";

import Verifier from "../verifier";
import verifyTerm from "../verify/term";
import verifyVariable from "../verify/variable";
import verifyMetavariable from "../verify/metavariable";

import { nodeQuery } from "../utilities/query";

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
        const metavariableVerified = verifyMetavariable(metavariableNode, localContext, verifyAhead);

        return metavariableVerified;
      }
    },
    {
      nodeQuery: variableNodeQuery,
      verify: (variableNode, localContext, verifyAhead) => {
        const variableVerified = verifyVariable(variableNode, localContext, verifyAhead);

        return variableVerified;
      }
    },
    {
      nodeQuery: termNodeQuery,
      verify: (termNode, localContext, verifyAhead) => {
        const terms = [],
              termVerified = verifyTerm(termNode, terms, localContext, verifyAhead);

        return termVerified;
      }
    }
  ];
}

const metaLevelVerifier = new MetaLevelVerifier();

export default metaLevelVerifier;
