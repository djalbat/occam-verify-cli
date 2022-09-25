"use strict";

class ConsequentContext {
  constructor(context) {
    this.context = context;
  }

  getContext() {
    return this.context;
  }

  getRules() { return this.context.getRules(); }

  getTypes() { return this.context.getTypes(); }

  getAxioms() { return this.context.getAxioms(); }

  getCombinators() { return this.context.getCombinators(); }

  getConstructors() { return this.context.getConstructors(); }

  findTypeByTypeName(typeName) { return this.context.findTypeByTypeName(typeName); }

  findVariableByVariableName(variableName) { return this.context.findVariableByVariableName(variableName); }

  isAntecedent() {
    const antecedent = false;

    return antecedent;
  }

  isConsequent() {
    const consequent = true;

    return consequent;
  }

  isLabelPresent(label) { return this.context.isLabelPresent(label); }

  isTypePresentByTypeName(typeName) { return this.context.isTypePresentByTypeName(typeName); }

  isVariablePresentByVariableName(variableName) { return this.context.isVariablePresentByVariableName(variableName); }

  addAxiom(axiom) { this.context.addAxiom(axiom); }

  static fromContext(context) {
    const consequentContext = new ConsequentContext(context);

    return consequentContext;
  }
}

module.exports = ConsequentContext;
