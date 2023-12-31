"use strict";

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
          reflexive = leftTermMatchesRightTerm;

    return reflexive;
  }

  static fromLeftTermAndRightTerm(leftTerm, rightTerm) {
    let equality = null;

    const leftTermType = leftTerm.getType(),
          rightTermType = rightTerm.getType(),
          leftTermTypeEqualToSubTypeOfOrSuperTypeOfRightTermType = leftTermType.isEqualToSubTypeOfOrSuperTypeOf(rightTermType);

    if (leftTermTypeEqualToSubTypeOfOrSuperTypeOfRightTermType) {
      equality = new Equality(leftTerm, rightTerm);
    }

    return equality;
  }
}
