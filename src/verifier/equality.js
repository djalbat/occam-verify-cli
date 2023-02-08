"use strict";

import Verifier from "../verifier";

import { TERM_RULE_NAME } from "../ruleNames";

class EqualityVerifier extends Verifier {
  verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context) {
    let nonTerminalNodeVerified = false;

    const leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(),
          rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName();

    if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
      const ruleName = leftNonTerminalNodeRuleName, ///
            ruleNameTermRuleName = (ruleName === TERM_RULE_NAME);

      if (ruleNameTermRuleName) {
        const leftTermNode = leftNonTerminalNode, ///
              rightTermNode = rightNonTerminalNode, ///
              termNodeVerified = this.verifyTermNode(leftTermNode, rightTermNode, equalities, context);

        nonTerminalNodeVerified = termNodeVerified;  ///
      }

      if (!nonTerminalNodeVerified) {
        const leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(),
              rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(),
              leftNodes = leftNonTerminalNodeChildNodes, ///
              rightNodes = rightNonTerminalNodeChildNodes, ///
              nodesEquate = this.verifyNodes(leftNodes, rightNodes, equalities, context);

        nonTerminalNodeVerified = nodesEquate; ///
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyTermNode(leftTermNode, rightTermNode, equalities, context) {
    let termNodeVerified = false;

    const equality = equalityFromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, equalities, context);

    if (equality !== null) {
      const equalityA = equality, ///
            equalitiesB = equalities, ///
            equalityMatches = equalitiesB.some((equalityB) => { ///
              const equalityAMatchesEqualityB = equalityA.match(equalityB, equalitiesB, equalities, context);

              if (equalityAMatchesEqualityB) {
                return true;
              }
            });

      termNodeVerified = equalityMatches;  ///
    }

    return termNodeVerified;
  }
}

const equalityVerifier = new EqualityVerifier();

export default equalityVerifier;

