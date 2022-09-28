"use strict";

class ProofContext {
  constructor(context, variables, inAntecedent) {
    this.context = context;
    this.variables = variables;
    this.inAntecedent = inAntecedent;
  }

  getContext() {
    return this.context;
  }

  getVariables() {
    return this.variables;
  }

  isInAntecedent() {
    return this.inAntecedent;
  }

  getRules() { return this.context.getRules(); }

  getTypes() { return this.context.getTypes(); }

  getAxioms() { return this.context.getAxioms(); }

  getCombinators() { return this.context.getCombinators(); }

  getConstructors() { return this.context.getConstructors(); }

  findTypeByTypeName(typeName) { return this.context.findTypeByTypeName(typeName); }

  findVariableByVariableName(variableName) {
    const name = variableName,  ///
          variable = this.variables.find((variable) => {
            const matches = variable.matchName(name);

            if (matches) {
              return true;
            }
          }) || this.context.findVariableByVariableName(variableName);  ///

    return variable;
  }

  isLabelPresent(label) { return this.context.isLabelPresent(label); }

  isTypePresentByTypeName(typeName) { return this.context.isTypePresentByTypeName(typeName); }

  isVariablePresentByVariableName(variableName) {
    const variable = this.findVariableByVariableName(variableName),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  setInAntecedent(inAntecedent) {
    this.inAntecedent = inAntecedent;
  }

  addAxiom(axiom) { this.context.addAxiom(axiom); }

  addVariable(variable) {
    this.variables.push(variable);
  }

  static fromContext(context) {
    const variables = [],
          inAntecedent = true,
          proofContext = new ProofContext(context, variables, inAntecedent);

    return proofContext;
  }
}

module.exports = ProofContext;
