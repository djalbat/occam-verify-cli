"use strict";

export default class Substitution {
  constructor(context, string, node, tokens) {
    this.context = context;
    this.string = string;
    this.node = node;
    this.tokens = tokens;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  getTerm() {
    const term = null;

    return term;
  }

  getFrame() {
    const frame = null;

    return frame;
  }

  getVariable() {
    const variable = null;

    return variable;
  }

  getReference() {
    const reference = null;

    return reference;
  }

  getStatement() {
    const statement = null;

    return statement;
  }

  getMetavariable() {
    const metavariableNode = null;

    return metavariableNode;
  }

  getSubstitution() {
    const substitution = null;

    return substitution;
  }

  isSimple() {
    const simple = true;

    return simple;
  }

  isComplex() {
    const simple = this.isSimple(),
          complex = !simple;

    return complex;
  }

  isTrivial() {
    const trivial = false;

    return trivial;
  }

  isEqualTo(substitution) {
    const substitutionString = substitution.getString(),
          equalTo = (substitutionString === this.string);

    return equalTo;
  }

  isTermEqualTo(term) {
    const termEqualTo = false;

    return termEqualTo;
  }

  isFrameEqualTo(frame) {
    const frameEqualTo = false;

    return frameEqualTo;
  }

  isVariableEqualTo(variable) {
    const variableEqualTo = false;

    return variableEqualTo;
  }

  isReferenceEqualTo(reference) {
    const referenceEqualTo = false;

    return referenceEqualTo;
  }

  isStatementEqualTo(statement) {
    const statementEqualTo = false;

    return statementEqualTo;
  }

  isMetavariableEqualTo(metavariable) {
    const metavariableEqualTo = false;

    return metavariableEqualTo;
  }

  isSubstitutionEqualTo(substitution) {
    const substitutionEqualTo = (substitution === null);

    return substitutionEqualTo;
  }

  resolve(substitutions, context) {
    const resolved = true;

    return resolved;
  }

  matchParameter(parameter) {
    const parameterMatches = false;

    return parameterMatches;
  }

  getReplacementNode() {
    const replacementNode = null;

    return replacementNode;
  }
}
