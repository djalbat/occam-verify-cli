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
          const leftTermNode = nonTerminalNodeA, ///
                rightTermNode = nonTerminalNodeB, ///
                termNodesEqual = areTermNodesEqual(leftTermNode, rightTermNode, collections);

          if (termNodesEqual) {
            const verifiedAhead = verifyAhead();

            nonTerminalNodeVerified = verifiedAhead;  ///
          } else {
            nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, collections, localContext, verifyAhead);
          }

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
}

const equalityNodesVerifier = new EqualityNodesVerifier();

export default equalityNodesVerifier;
