"use strict";

import { Element } from "occam-languages";
import { primitiveUtilities } from "occam-furtle";

const { primitiveFromNode } =primitiveUtilities;

export default class Substitution extends Element {
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

  getSubstitutionNode() {
    const node = this.getNode(),
          substitutionNode = node; ///

    return substitutionNode;
  }

  getNetavariableName() {
    const metavariableName = null;

    return metavariableName;
  }

  getVariableIdentifier() {
    const variableIdentifier = null;

    return variableIdentifier;
  }

  matchSubstitutionNode(substitutionNode) {
    const substitutionNodeA = substitutionNode; ///

    substitutionNode = this.getSubstitutionNode();

    const substitutionNodeB = substitutionNode, ///
          substitutionNodeAAMatchesSubstitutionBNodeB = substitutionNodeA.match(substitutionNodeB),
          equalTo = substitutionNodeAAMatchesSubstitutionBNodeB; ///

    return equalTo;
  }

  isValid(context) {
    const substitutionNode = this.getSubstitutionNode(),
          substitutionPresent = context.isSubstitutionPresentBySubstitutionNode(substitutionNode),
          valid = substitutionPresent;  ///

    return valid;
  }

  isEqualTo(substitution) {
    const substitutionNode = substitution.getNode(),
          substitutionNodeMatches = this.matchSubstitutionNode(substitutionNode),
          equalTo = substitutionNodeMatches;  ///

    return equalTo;
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

  compare(substitution) {
    const comparesToSubstitution = false;

    return comparesToSubstitution;
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

  compareMetavariable(metavariable) {
    const compaaresToMetavariable = false;

    return compaaresToMetavariable;
  }

  resolve(substitutions, generalContext, specificContext) {
    const resolved = true;

    return resolved;
  }
}
