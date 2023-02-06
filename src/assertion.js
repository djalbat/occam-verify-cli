"use strict";

export default class Assertion {
  constructor(variable) {
    this.variable = variable;
  }

  getVariable() {
    return this.variable;
  }

  assert(proofContext) {
    proofContext.addVariable(this.variable);
  }

  static fromVariable(variable) {
    const assertion = new Assertion(variable);

    return assertion;
  }
}
