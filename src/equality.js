"use strict";

import equalityUnifier from "./unifier/equality";

import { first, second } from "./utilities/array";

export default class Equality {
  constructor(leftTerm, rightTerm) {
    this.leftTerm = leftTerm;
    this.rightTerm = rightTerm;
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

  isEqual(localContext) {
    const leftTermNode = this.leftTerm.getNode(),
          rightTermNode = this.rightTerm.getNode(),
          equalityUnified = equalityUnifier.unify(leftTermNode, rightTermNode, localContext),
          equal = equalityUnified;  ///

    return equal;
  }

  static fromTermsAndEqualityNode(terms, equalityNode) {
    let equality = null;

    const firstTerm = first(terms),
          secondTerm = second(terms),
          leftTerm = firstTerm, ///
          rightTerm = secondTerm, ///
          leftTermType = leftTerm.getType(),
          rightTermType = rightTerm.getType(),
          leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);

    if (leftTermTypeComparableToRightTermType) {
      const node = equalityNode;  ///

      equality = new Equality(node, leftTerm, rightTerm);
    }

    return equality;
  }

  static fromLeftTermRightTermAndEqualityNode(leftTerm, rightTerm, equalityNode) {
    let equality = null;

    const leftTermType = leftTerm.getType(),
          rightTermType = rightTerm.getType(),
          leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);

    if (leftTermTypeComparableToRightTermType) {
      equality = new Equality(leftTerm, rightTerm);
    }

    return equality;
  }
}
