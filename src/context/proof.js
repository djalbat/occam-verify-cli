"use strict";

import fileMixins from "../mixins/file";
import loggingMixins from "../mixins/logging";
import callbacksMixins from "../mixins/callbacks";

import { push } from "../utilities/array";

class ProofContext {
  constructor(context, derived, variables, assertions) {
    this.context = context;
    this.derived = derived;
    this.variables = variables;
    this.assertions = assertions;
  }

  getContext() {
    return this.context;
  }

  isDerived() {
    return this.derived;
  }

  getAssertions() {
    let assertions = this.context.getAssertions();

    assertions = [
      ...assertions,
      ...this.assertions
    ];

    return assertions;
  }

  getTypes() { return this.context.getTypes(); }

  getAxioms() { return this.context.getAxioms(); }

  getCombinators() { return this.context.getCombinators(); }

  getConstructors() { return this.context.getConstructors(); }

  getVariables() {
    const variables = [];

    push(variables, this.variables);

    const contextVariables = this.context.getVariables();

    push(variables, contextVariables);

    return variables;
  }

  setDerived(derived) {
    if (derived) {
      this.statementNodes.pop();
    }

    this.derived = derived;
  }

  addVariable(variable) {
    this.variables.push(variable);
  }

  addAssertion(assertion) {
    this.assertions.push(assertion);
  }

  matchAssertion(assertion) {
    let assertionMatches;

    const assertionB = assertion; ///

    assertionMatches = this.assertions.some((assertion) => {
      const assertionA = assertion, ///
            matches = assertionA.match(assertionB);

      if (matches) {
        return true;
      }
    });

    if (!assertionMatches) {
      assertionMatches = this.context.matchAssertion(assertion);
    }

    return assertionMatches;
  }

  findVariableByVariableName(variableName) {
    const name = variableName,  ///
          variables = this.getVariables(),
          variable = variables.find((variable) => {
            const matches = variable.matchName(name);

            if (matches) {
              return true;
            }
          }) || null;

    return variable;
  }

  isVariablePresentByVariableName(variableName) {
    const variable = this.findVariableByVariableName(variableName),
        variablePresent = (variable !== null);

    return variablePresent;
  }

  findTypeByTypeName(typeName) { return this.context.findTypeByTypeName(typeName); }

  findLabelByTypeName(labelName) { return this.context.findLabelByTypeName(labelName); }

  findRuleByReferenceName(referenceName) { return this.context.findRuleByReferenceName(referenceName); }

  findAxiomByReferenceName(referenceName) { return this.context.findAxiomByReferenceName(referenceName); }

  isLabelPresentByLabelName(labelName) { return this.context.isLabelPresentByLabelName(labelName); }

  isTypePresentByTypeName(typeName) { return this.context.isTypePresentByTypeName(typeName); }

  static fromFileContext(fileContext) {
    const context = fileContext,  ///
          derived = false,
          variables = [],
          assertions = [],
          proofContext = new ProofContext(context, derived, variables, assertions);

    return proofContext;
  }

  static fromProofContext(proofContext) {
    const context = proofContext,  ///
          derived = false,
          variables = [],
          assertions = [];

    proofContext = new ProofContext(context, derived, variables, assertions);

    return proofContext;
  }
}

Object.assign(ProofContext.prototype, fileMixins);
Object.assign(ProofContext.prototype, loggingMixins);
Object.assign(ProofContext.prototype, callbacksMixins);

export default ProofContext;
