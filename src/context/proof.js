"use strict";

import fileMixins from "../mixins/file";
import loggingMixins from "../mixins/logging";
import callbacksMixins from "../mixins/callbacks";

class ProofContext {
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

  static fromFileContext(fileContext) {
    const context = fileContext,  ///
          derived = false,
          variables = [],
          statementNodes = [],
          proofContext = new ProofContext(context, derived, variables, statementNodes);

    return proofContext;
  }
}

Object.assign(ProofContext.prototype, fileMixins);
Object.assign(ProofContext.prototype, loggingMixins);
Object.assign(ProofContext.prototype, callbacksMixins);

export default ProofContext;
