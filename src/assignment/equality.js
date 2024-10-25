"use strict";

export default class EqualityAssignment {
  constructor(equality) {
    this.equality = equality;
  }

  getEquality() {
    return this.equality;
  }

  assign(context) {
    const equalityAdded = context.addEquality(this.equality, context),
          equalityString = this.equality.getString(),
          equalityAssigned = equalityAdded; ///

    equalityAssigned ?
      context.trace(`Assigned the '${equalityString}' equality.`) :
        context.debug(`Unable to assign the '${equalityString}' equality.`);

    return equalityAssigned;
  }

  static fromEquality(equality) {
    const equalityAssignment = new EqualityAssignment(equality);

    return equalityAssignment;
  }
}
