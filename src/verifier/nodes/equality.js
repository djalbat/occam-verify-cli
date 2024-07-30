"use strict";

import NodesVerifier from "../../verifier/nodes";

import { TERM_RULE_NAME } from "../../ruleNames";
import { areTermNodesEqual } from "../../utilities/collection";

class EqualityNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, collections, localContext, verifyAhead) {
    let nonTerminalNodeVerified = false;

    const ruleNameA = nonTerminalNodeA.getRuleName(), ///
          ruleNameB = nonTerminalNodeB.getRuleName(); ///

    if (ruleNameA === ruleNameB) {
      switch (ruleNameA) {
        case TERM_RULE_NAME: {
          const termNodeA = nonTerminalNodeA, ///
                termNodeB = nonTerminalNodeB, ///
                termNodeVerified = this.verifyTermNode(termNodeA, termNodeB, collections, localContext, verifyAhead);

          nonTerminalNodeVerified = termNodeVerified;  ///

          break;
        }

        default: {
          nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, collections, localContext, verifyAhead);

          break;
        }
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyTermNode(termNodeA, termNodeB, collections, localContext, verifyAhead) {
    let termNodeVerified;

    const leftTermNode = termNodeA, ///
          rightTermNode = termNodeB, ///
          termNodesEqual = areTermNodesEqual(leftTermNode, rightTermNode, collections);

    if (termNodesEqual) {
      const verifiedAhead = verifyAhead();

      termNodeVerified = verifiedAhead;  ///
    } else {
      const nonTerminalNodeA = termNodeA, ///
            nonTerminalNodeB = termNodeB; ///

      termNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, collections, localContext, verifyAhead);
    }

    return termNodeVerified;
  }
}

const equalityNodesVerifier = new EqualityNodesVerifier();

export default equalityNodesVerifier;
