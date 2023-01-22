"use strict";

import fileMixins from "../mixins/file";
import loggingMixins from "../mixins/logging";
import callbacksMixins from "../mixins/callbacks";

import { push, last } from "../utilities/array";

class ProofContext {
  constructor(context, variables, proofSteps) {
    this.context = context;
    this.variables = variables;
    this.proofSteps = proofSteps;
  }

  getContext() {
    return this.context;
  }

  getProofSteps() {
    let proofSteps = this.context.getProofSteps();

    proofSteps = [
      ...proofSteps,
      ...this.proofSteps
    ];

    return proofSteps;
  }

  getTypes() { return this.context.getTypes(); }

  getAxioms() { return this.context.getAxioms(); }

  getLemmas() { return this.context.getLemmas(); }

  getTheorems() { return this.context.getTheorems(); }

  getCombinators() { return this.context.getCombinators(); }

  getConstructors() { return this.context.getConstructors(); }

  getVariables() {
    const variables = [];

    push(variables, this.variables);

    const contextVariables = this.context.getVariables();

    push(variables, contextVariables);

    return variables;
  }

  getLastProofStep() {
    const lastProofStep = last(this.proofSteps);

    return lastProofStep;
  }

  addVariable(variable) {
    this.variables.push(variable);
  }

  addProofStep(proofStep) {
    this.proofSteps.push(proofStep);
  }

  matchStatement(statementNode) {
    let statementMatches;

    statementMatches = this.proofSteps.some((proofStep) => {
      statementMatches = proofStep.matchStatement(statementNode);

      if (statementMatches) {
        return true;
      }
    });

    if (!statementMatches) {
      statementMatches = this.context.matchStatement(statementNode);
    }

    return statementMatches;
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

  findLemmaByReferenceName(referenceName) { return this.context.findLemmaByReferenceName(referenceName); }

  findTheoremByReferenceName(referenceName) { return this.context.findTheoremByReferenceName(referenceName); }

  isLabelPresentByLabelName(labelName) { return this.context.isLabelPresentByLabelName(labelName); }

  isTypePresentByTypeName(typeName) { return this.context.isTypePresentByTypeName(typeName); }

  nodeAsString(node) { return this.context.nodeAsString(node); }

  nodesAsString(node) { return this.context.nodesAsString(node); }

  static fromFileContext(fileContext) {
    const context = fileContext,  ///
          variables = [],
          proofSteps = [],
          proofContext = new ProofContext(context, variables, proofSteps);

    return proofContext;
  }

  static fromProofContext(proofContext) {
    const context = proofContext,  ///
          variables = [],
          proofSteps = [];

    proofContext = new ProofContext(context, variables, proofSteps);

    return proofContext;
  }
}

Object.assign(ProofContext.prototype, fileMixins);
Object.assign(ProofContext.prototype, loggingMixins);
Object.assign(ProofContext.prototype, callbacksMixins);

export default ProofContext;
