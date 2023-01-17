"use strict";

import Variable from "../variable";

export default class TypeAssertion {
  constructor(type, termNode, variableName) {
    this.type = type;
    this.termNode = termNode;
    this.variableName = variableName;
  }

  getType() {
    return this.type;
  }

  getTermNode() {
    return this.termNode;
  }

  getVariableName() {
    return this.variableName;
  }

  assert(proofContext) {
    if (this.variableName !== null) {
      const name = this.variableName,  ///
            variable = Variable.fromTypeAndName(this.type, name);

      proofContext.addVariable(variable);
    }
  }

  static fromTypeAndTermNode(type, termNode) {
    const variableName = null,
          typeAssertion = new TypeAssertion(type, termNode, variableName);

    return typeAssertion;
  }

  static fromTypeAndVariableName(type, variableName) {
    const termNode = null,
          typeAssertion = new TypeAssertion(type, termNode, variableName);

    return typeAssertion;
  }
}
