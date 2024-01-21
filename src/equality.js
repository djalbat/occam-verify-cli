"use strict";

import equalityNodesVerifier from "./verifier/nodes/equality";

import { areTermNodesEqual } from "./utilities/collection";

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
    let equal;

    const leftTerm = this.getLeftTerm(),
          rightTerm = this.getRightTerm(),
          collections = context.getCollections(),
          leftTermNode = leftTerm.getNode(),
          rightTermNode = rightTerm.getNode(),
          termNodesEqual = areTermNodesEqual(leftTermNode, rightTermNode, collections);

    if (termNodesEqual) {
      equal = true;
    } else {
      const leftNonTerminalNode = leftTermNode, ///
            rightNonTerminalNode = rightTermNode, ///
            leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(),
            rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(),
            childNodesA = leftNonTerminalNodeChildNodes,  ///
            childNodesB = rightNonTerminalNodeChildNodes, ///
            localContext = this,  ///
            childNodesVerify = equalityNodesVerifier.verifyChildNodes(childNodesA, childNodesB, collections, localContext, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      equal = childNodesVerify;  ///
    }

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
