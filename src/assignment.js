"use strict";

export default class Assignment {
  constructor(variable) {
    this.variable = variable;
  }

  getVariable() {
    return this.variable;
  }

  assign(proofContext) {
    proofContext.addVariable(this.variable);
  }

  static fromVariable(variable) {
    const assignment = new Assignment(variable);

    return assignment;
  }
}
