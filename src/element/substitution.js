"use strict";

import { Element } from "occam-languages";
import { primitiveUtilities } from "occam-furtle";

const { primitiveFromNode } =primitiveUtilities;

export default class Substitution extends Element {
  constructor(context, string, node) {
    super(context, string, node);
  }

  getSubstitution() {
    const substitution = null;

    return substitution;
  }

  getPrimitive() {
    const context = this.getContext(),
          replacementNode = this.getReplacementNode(),
          node = replacementNode, ///
          primitive = primitiveFromNode(node, context);

    return primitive;
  }

  getMetavariable(context) {
    const metavariable = null;

    return metavariable;
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

  isNonTrivial() {
    const trivial = this.isTrivial(),
          nonTrivlal = !trivial;

    return nonTrivlal;
  }

  isFrameEqualToFrame(frame) {
    const frameEqualToFrame = false;

    return frameEqualToFrame;
  }

  isReferenceEqualToReference(reference) {
    const referenceEqualToReference = false;

    return referenceEqualToReference;
  }

  isEqualTo(substitution) {
    const substitutionA = this, ///
          substitutionB = substitution, ///
          substitutionANode = substitutionA.getNode(),
          substitutionBNode = substitutionB.getNode(),
          substitutionANodeMatchesSubstitutionBNode = substitutionANode.match(substitutionBNode),
          equalTo = substitutionANodeMatchesSubstitutionBNode; ///

    return equalTo;
  }

  compareTerm(term, context) {
    const comparesToTerm = false;

    return comparesToTerm;
  }

  compareStatement(statement) {
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

  compareMetavariable(metavariable) {
    const compaaresToMetavariable = false;

    return compaaresToMetavariable;
  }

  resolve(substitutions, generalContext, specificContext) {
    const resolved = true;

    return resolved;
  }
}
