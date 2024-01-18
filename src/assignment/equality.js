"use strict";

export default class EqualityAssignment {
  constructor(equality) {
    this.equality = equality;
  }

  getEquality() {
    return this.equality;
  }

  assign(context) {
    const equalityAdded = context.addEquality(this.equality),
          equalityNode = this.equality.getNode(),
          equalityString = context.nodeAsString(equalityNode),
          equalityAssigned = equalityAdded; ///

    equalityAssigned ?
      context.debug(`Able to assign the '${equalityString}' equality.`, equalityNode) :
        context.trace(`Unable to assign the '${equalityString}' equality.`, equalityNode);

    return equalityAssigned;
  }

  static fromEquality(equality) {
    const equalityAssignment = new EqualityAssignment(equality);

    return equalityAssignment;
  }
}
