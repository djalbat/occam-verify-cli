"use strict";

import shim from "../shim";
import Verifier from "../verifier";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term!"),
      statementNodeQuery = nodeQuery("/statement!");

class MetaLevelVerifier extends Verifier {
  verify(node, assignments, stated, localContext) {
    let verified;

    const nonTerminalNode = node, ///
          childNodes = nonTerminalNode.getChildNodes(),
          nonTerminalNodeVerified = this.verifyChildNodes(childNodes, assignments, stated, localContext);

    verified = nonTerminalNodeVerified;  ///

    return verified;
  }

  static maps = [
    {
      nodeQuery: statementNodeQuery,
      verify: (statementNode, assignments, stated, localContext) => {
        const { verifyStatement } = shim,
              statementVerified = verifyStatement(statementNode, assignments, stated, localContext);

        return statementVerified;
      }
    },
    {
      nodeQuery: termNodeQuery,
      verify: (termNode, assignments, stated, localContext) => {
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
