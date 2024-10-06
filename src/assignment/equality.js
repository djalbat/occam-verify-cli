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
          equalityString = this.equality.getString(),
          equalityAssigned = equalityAdded; ///

    equalityAssigned ?
      localContext.trace(`Assigned the '${equalityString}' equality.`) :
        localContext.debug(`Unable to assign the '${equalityString}' equality.`);

    return equalityAssigned;
  }

  static fromEquality(equality) {
    const equalityAssignment = new EqualityAssignment(equality);

    return equalityAssignment;
  }
}
