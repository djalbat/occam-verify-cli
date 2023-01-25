"use strict";

export default class TypeAssertion {
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
    const typeAssertion = new TypeAssertion(variable);

    return typeAssertion;
  }
}
