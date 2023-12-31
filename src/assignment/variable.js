"use strict";

export default class VariableAssignment {
  constructor(variable) {
    this.variable = variable;
  }

  getVariable() {
    return this.variable;
  }

  assign(localContext) {
    localContext.addVariable(this.variable);
  }

  static fromVariable(variable) {
    const assignmentAssignment = new VariableAssignment(variable);

    return assignmentAssignment;
  }
}
