"use strict";

import NodesVerifier from "../../verifier/nodes";

import { TERM_RULE_NAME } from "../../ruleNames";
import { areTermNodesEqual } from "../../utilities/equivalences";

class EqualityNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, equivalences, localContext, verifyAhead) {
    let nonTerminalNodeVerified = false;

    const ruleNameA = nonTerminalNodeA.getRuleName(), ///
          ruleNameB = nonTerminalNodeB.getRuleName(); ///

    if (ruleNameA === ruleNameB) {
      switch (ruleNameA) {
        case TERM_RULE_NAME: {
          const termNodeA = nonTerminalNodeA, ///
                termNodeB = nonTerminalNodeB, ///
                termNodeVerified = this.verifyTermNode(termNodeA, termNodeB, equivalences, localContext, verifyAhead);

          nonTerminalNodeVerified = termNodeVerified;  ///

          break;
        }

        default: {
          nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, equivalences, localContext, verifyAhead);

          break;
        }
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyTermNode(termNodeA, termNodeB, equivalences, localContext, verifyAhead) {
    let termNodeVerified;

    const leftTermNode = termNodeA, ///
          rightTermNode = termNodeB, ///
          termNodesEqual = areTermNodesEqual(leftTermNode, rightTermNode, equivalences);

    if (termNodesEqual) {
      const verifiedAhead = verifyAhead();

      termNodeVerified = verifiedAhead;  ///
    } else {
      const nonTerminalNodeA = termNodeA, ///
            nonTerminalNodeB = termNodeB; ///

      termNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, equivalences, localContext, verifyAhead);
    }

    return termNodeVerified;
  }
}

const equalityNodesVerifier = new EqualityNodesVerifier();

export default equalityNodesVerifier;
