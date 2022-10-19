"use strict";

export default class ProofContext {
  constructor(context, derived, variables, statementNodes) {
    this.context = context;
    this.derived = derived;
    this.variables = variables;
    this.statementNodes = statementNodes;
  }

  getContext() {
    return this.context;
  }

  isDerived() {
    return this.derived;
  }

  getVariables() {
    return this.variables;
  }

  getStatementNodes() {
    return this.statementNodes;
  }

  getRules() { return this.context.getRules(); }

  getTypes() { return this.context.getTypes(); }

  getAxioms() { return this.context.getAxioms(); }

  getCombinators() { return this.context.getCombinators(); }

  getConstructors() { return this.context.getConstructors(); }

  findTypeByTypeName(typeName) { return this.context.findTypeByTypeName(typeName); }

  findRuleByReferenceName(referenceName) { return this.context.findRuleByReferenceName(referenceName); }

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

  setDerived(derived) {
    if (derived) {
      this.statementNodes.pop();
    }

    this.derived = derived;
  }

  addAxiom(axiom) { this.context.addAxiom(axiom); }

  addVariable(variable) {
    this.variables.push(variable);
  }

  addStatementNode(statementNode) {
    this.statementNodes.push(statementNode);
  }

  trace(message) { this.context.trace(message); }

  debug(message) { this.context.debug(message); }

  info(message) { this.context.info(message); }

  warning(message) { this.context.warning(message); }

  error(message) { this.context.error(message); }

  fatal(message) { this.context.fatal(message); }

  static fromContext(context) {
    const derived = false,
          variables = [],
          statementNodes = [],
          proofContext = new ProofContext(context, derived, variables, statementNodes);

    return proofContext;
  }
}
