"use strict";

import Equality from "../../equality";
import verifyTerms from "../../verify/terms";
import NodesVerifier from "../../verifier/nodes";

import { TERM_RULE_NAME } from "../../ruleNames";

class EqualityNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context, verifyAhead) {
    let nonTerminalNodeVerified = false;

    const leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(),
          rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName();

    if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
      const leftNonTerminalNodeRuleNameTermRuleName = (leftNonTerminalNodeRuleName === TERM_RULE_NAME),
            rightNonTerminalNodeRuleNameTermRuleName = (rightNonTerminalNodeRuleName === TERM_RULE_NAME);

      if (leftNonTerminalNodeRuleNameTermRuleName && rightNonTerminalNodeRuleNameTermRuleName) {
        const leftTermNode = leftNonTerminalNode, ///
              rightTermNode = rightNonTerminalNode, ///
              termNodeVerified = this.verifyTermNode(leftTermNode, rightTermNode, equalities, context, verifyAhead);

        nonTerminalNodeVerified = termNodeVerified;  ///
      }

      if (!nonTerminalNodeVerified) {
        const leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(),
              rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(),
              leftChildNodes = leftNonTerminalNodeChildNodes, ///
              rightChildNodes = rightNonTerminalNodeChildNodes, ///
              childNodesVerified = this.verifyChildNodes(leftChildNodes, rightChildNodes, equalities, context, verifyAhead);

        nonTerminalNodeVerified = childNodesVerified; ///
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyTermNode(leftTermNode, rightTermNode, equalities, context, verifyAhead) {
    let termNodeVerified = false;

    debugger

    // const types = [],
    //       termsVerified = verifyTerms(leftTermNode, rightTermNode, types, context, verifyAhead);
    //
    // if (termsVerified) {
    //   const equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode),
    //         equalityA = equality, ///
    //         equalitiesB = equalities, ///
    //         equalityMatches = equalitiesB.some((equalityB) => { ///
    //           const equalityAMatchesEqualityB = equalityA.match(equalityB, equalitiesB, context);
    //
    //           if (equalityAMatchesEqualityB) {
    //             return true;
    //           }
    //         });
    //
    //   termNodeVerified = equalityMatches;  ///
    // }

    return termNodeVerified;
  }
}

const equalityNodesVerifier = new EqualityNodesVerifier();

export default equalityNodesVerifier;
