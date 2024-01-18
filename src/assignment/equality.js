"use strict";

export default class EqualityAssignment {
  constructor(equality) {
    this.equality = equality;
  }

  getEquality() {
    return this.equality;
  }

  assign(localContext) {
    const equalityAdded = localContext.addEquality(this.equality),
          equalityNode = this.equality.getNode(),
          equalityString = localContext.nodeAsString(equalityNode),
          equalityAssigned = equalityAdded; ///

    equalityAssigned ?
      localContext.debug(`Able to assign the '${equalityString}' equality.`, equalityNode) :
        localContext.trace(`Unable to assign the '${equalityString}' equality.`, equalityNode);

    return equalityAssigned;
  }

  static fromEquality(equality) {
    const equalityAssignment = new EqualityAssignment(equality);

    return equalityAssignment;
  }
}
