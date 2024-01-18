"use strict";

export default class MetavariableAssignment {
  constructor(metavariable) {
    this.metavariable = metavariable;
  }

  getMetavariable() {
    return this.metavariable;
  }

  assign(localContext) {
    const metavariableAdded = localContext.addMetavariable(this.metavariable),
          metavariableNode = this.metavariable.getNode(),
          metavariableString = localContext.nodeAsString(metavariableNode),
          metavariableAssigned = metavariableAdded; ///

    metavariableAssigned ?
      localContext.debug(`Able to assign the '${metavariableString}' metavariable.`, metavariableNode) :
        localContext.trace(`Unable to assign the '${metavariableString}' metavariable.`, metavariableNode);

    return metavariableAssigned;
  }

  static fromMetavariable(metavariable) {
    const metavariableAssignment = new MetavariableAssignment(metavariable);

    return metavariableAssignment;
  }
}
