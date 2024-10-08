"use strict";

import shim from "../shim";
import Verifier from "../verifier";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term!");

class IntrinsicLevelVerifier extends Verifier {
  verify(node, localContext) {
    let verified;

    const nonTerminalNode = node, ///
          nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNode, localContext);

    verified = nonTerminalNodeVerified;  ///

    return verified;
  }

  static maps = [
    {
      nodeQuery: termNodeQuery,
      verify: (termNode, localContext) => {
        const { Term } = shim,
              term = Term.fromTermNode(termNode, localContext),
              termVerified = term.verify(localContext, () => {
                const verifiedAhead = true;

                return verifiedAhead;
              });

        return termVerified;
      }
    }
  ];
}

const intrinsicLevelVerifier = new IntrinsicLevelVerifier();

export default intrinsicLevelVerifier;
