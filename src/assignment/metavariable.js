"use strict";

export default class MetavariableAssignment {
  constructor(metavariable) {
    this.metavariable = metavariable;
  }

  getMetavariable() {
    return this.metavariable;
  }

  assign(fileContext) {
    const metavariableAdded = fileContext.addMetavariable(this.metavariable),
          metavariableNode = this.metavariable.getNode(),
          metavariableString = fileContext.nodeAsString(metavariableNode),
          metavariableAssigned = metavariableAdded; ///

    metavariableAssigned ?
      fileContext.debug(`Able to assign the '${metavariableString}' metavariable.`, metavariableNode) :
        fileContext.trace(`Unable to assign the '${metavariableString}' metavariable.`, metavariableNode);

    return metavariableAssigned;
  }

  static fromMetavariable(metavariable) {
    const metavariableAssignment = new MetavariableAssignment(metavariable);

    return metavariableAssignment;
  }
}
