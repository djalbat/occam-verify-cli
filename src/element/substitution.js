"use strict";

export default class Substitution {
  constructor(context, string, node) {
    this.context = context;
    this.string = string;
    this.node = node;
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

  getReplacementNode() {
    const replacementNode = null;

    return replacementNode;
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
    const substitutionNode = substitution.getNode(),
          matches = this.node.match(substitutionNode),
          equalTo = matches;  ///

    return equalTo;
  }

  isTermEqualToTerm(term, context) {
    const termEqualToTerm = false;

    return termEqualToTerm;
  }

  isFrameEqualToFrame(frame) {
    const frameEqualToFrame = false;

    return frameEqualToFrame;
  }

  isReferenceEqualToReference(reference, context) {
    const referenceEqualToReference = false;

    return referenceEqualToReference;
  }

  isStatementEqualToStatement(statement, context) {
    const statementEqualToStatement = false;

    return statementEqualToStatement;
  }

  isMetavariableEqualToMetavariable(metavariable) {
    const metavariableEqualToMetavariable = false;

    return metavariableEqualToMetavariable;
  }

  isSubstitutionEqualToSubstitution(substitution) {
    const substitutionEqualToSubstitution = (substitution === null);

    return substitutionEqualToSubstitution;
  }

  matchParameter(parameter) {
    const parameterMatches = false;

    return parameterMatches;
  }

  matchSubstitutionNode(substitutionNode) { return this.node.match(substitutionNode); }

  resolve(substitutions, context) {
    const resolved = true;

    return resolved;
  }
}
