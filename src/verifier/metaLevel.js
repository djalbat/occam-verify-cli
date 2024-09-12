"use strict";

import shim from "../shim";
import Verifier from "../verifier";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term!"),
      statementNodeQuery = nodeQuery("/statement!");

class MetaLevelVerifier extends Verifier {
  verifyStatement(statementNode, assignments, derived, localContext) {
    let verified;

    const nonTerminalNode = statementNode, ///
          childNodes = nonTerminalNode.getChildNodes(),
          nonTerminalNodeVerified = this.verifyChildNodes(childNodes, assignments, derived, localContext);

    verified = nonTerminalNodeVerified;  ///

    return verified;
  }

  static maps = [
    {
      nodeQuery: statementNodeQuery,
      verify: (statementNode, assignments, derived, localContext) => {
        const { verifyStatement } = shim,
              statementVerified = verifyStatement(statementNode, assignments, derived, localContext);

        return statementVerified;
      }
    },
    {
      nodeQuery: termNodeQuery,
      verify: (termNode, assignments, derived, localContext) => {
        const { verifyTerm } = shim,
              terms = [],
              termVerified = verifyTerm(termNode, terms, localContext, () => {
                const verifiedAhead = true;

                return verifiedAhead;
              });

        return termVerified;
      }
    }
  ];
}

const metaLevelVerifier = new MetaLevelVerifier();

export default metaLevelVerifier;
