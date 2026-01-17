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

  isFrameEqualToFrame(frame) {
    const frameEqualToFrame = false;

    return frameEqualToFrame;
  }

  isReferenceEqualToReference(reference) {
    const referenceEqualToReference = false;

    return referenceEqualToReference;
  }

  isMetavariableEqualToMetavariable(metavariable) {
    const metavariableEqualToMetavariable = false;

    return metavariableEqualToMetavariable;
  }

  compareTerm(term, context) {
    const comparesToTerm = false;

    return comparesToTerm;
  }

  compareStatement(statement, context) {
    const comparesToStatement = false;

    return comparesToStatement;
  }

  compareParameter(parameter) {
    const comparesToParameter = false;

    return comparesToParameter;
  }

  compareSubstitution(substitution) {
    const comparesToSubstitution = false;

    return comparesToSubstitution;
  }

  resolve(substitutions, context) {
    const resolved = true;

    return resolved;
  }
}
