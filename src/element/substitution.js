"use strict";

import Element from "../element";

export default class Substitution extends Element {
  constructor(context, string, node) {
    super(context, string, node);
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

  compareParameter(parameter) {
    const comparesToParameter = false;

    return comparesToParameter;
  }

  matchSubstitutionNode(substitutionNode) { return this.node.match(substitutionNode); }

  resolve(substitutions, context) {
    const resolved = true;

    return resolved;
  }
}
