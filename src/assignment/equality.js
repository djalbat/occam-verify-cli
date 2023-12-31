"use strict";

export default class EqualityAssignment {
  constructor(equality) {
    this.equality = equality;
  }

  getEquality() {
    return this.equality;
  }

  assign(localContext) {
    localContext.addEquality(this.equality);
  }

  static fromEquality(equality) {
    const assignmentAssignment = new EqualityAssignment(equality);

    return assignmentAssignment;
  }
}
