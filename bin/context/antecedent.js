"use strict";

class AntecedentContext {
  constructor(context, variables) {
    this.context = context;
    this.variables = variables;
  }

  getContext() {
    return this.context;
  }

  getVariables() {
    return this.variables;
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

  isAntecedent() {
    const antecedent = true;

    return antecedent;
  }

  isConsequent() {
    const consequent = false;

    return consequent;
  }

  isLabelPresent(label) { return this.context.isLabelPresent(label); }

  isTypePresentByTypeName(typeName) { return this.context.isTypePresentByTypeName(typeName); }

  isVariablePresentByVariableName(variableName) {
    const variable = this.findVariableByVariableName(variableName),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  addVariable(variable) {
    this.variables.push(variable);
  }

  static fromContext(context) {
    const variables = [],
          antecedentContext = new AntecedentContext(context, variables);

    return antecedentContext;
  }
}

module.exports = AntecedentContext;
