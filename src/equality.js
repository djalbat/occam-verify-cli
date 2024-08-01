"use strict";

import equalityNodesVerifier from "./verifier/nodes/equality";

export default class Equality {
  constructor(node, leftTerm, rightTerm) {
    this.node = node;
    this.leftTerm = leftTerm;
    this.rightTerm = rightTerm;
  }

  getNode() {
    return this.node;
  }

  getLeftTerm() {
    return this.leftTerm;
  }

  getRightTerm() {
    return this.rightTerm;
  }

  isReflexive() {
    const leftTermMatchesRightTerm = this.leftTerm.match(this.rightTerm),
          reflexive = leftTermMatchesRightTerm; ///

    return reflexive;
  }

  isEqual(context) {
    const leftTerm = this.getLeftTerm(),
          rightTerm = this.getRightTerm(),
          leftTermNode = leftTerm.getNode(),
          rightTermNode = rightTerm.getNode(),
          nonTerminalNodeA = leftTermNode,  ///
          nonTerminalNodeB = rightTermNode, ///
          equivalences = context.getEquivalences(),
          localContext = this,  ///
          nonTerminalNodeVerified = equalityNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, equivalences, localContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          }),
          equal = nonTerminalNodeVerified;  ///

    return equal;
  }

  static fromLeftTermRightTermAndEqualityNode(leftTerm, rightTerm, equalityNode) {
    let equality = null;

    const leftTermType = leftTerm.getType(),
          rightTermType = rightTerm.getType(),
          leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);

    if (leftTermTypeComparableToRightTermType) {
      const node = equalityNode;  ///

      equality = new Equality(node, leftTerm, rightTerm);
    }

    return equality;
  }
}
