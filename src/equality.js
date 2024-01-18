"use strict";

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
          reflexive = leftTermMatchesRightTerm;

    return reflexive;
  }

  static fromEqualityNodeLeftTermAndRightTerm(equalityNode, leftTerm, rightTerm) {
    let equality = null;

    const leftTermType = leftTerm.getType(),
          rightTermType = rightTerm.getType(),
          leftTermTypeEqualToSubTypeOfOrSuperTypeOfRightTermType = leftTermType.isEqualToSubTypeOfOrSuperTypeOf(rightTermType);

    if (leftTermTypeEqualToSubTypeOfOrSuperTypeOfRightTermType) {
      const node = equalityNode;  ///

      equality = new Equality(node, leftTerm, rightTerm);
    }

    return equality;
  }
}
