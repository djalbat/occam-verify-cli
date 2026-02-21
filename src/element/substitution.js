"use strict";

import { Element } from "occam-languages";
import { primitiveUtilities } from "occam-furtle";

const { primitiveFromNode } =primitiveUtilities;

export default class Substitution extends Element {
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

  matchSubstitutionNode(substitutionNode) {
    const substitutionNodeA = substitutionNode; ///

    substitutionNode = this.getSubstitutionNode();

    const substitutionNodeB = substitutionNode, ///
          substitutionNodeAAMatchesSubstitutionBNodeB = substitutionNodeA.match(substitutionNodeB),
          equalTo = substitutionNodeAAMatchesSubstitutionBNodeB; ///

    return equalTo;
  }

  findValidSubstiution(context) {
    const substitutionNode = this.getSubstitutionNode(),
          substitution = context.findSubstitutionBySubstitutionNode(substitutionNode),
          validSubstitution = substitution;  ///

    return validSubstitution;
  }

  isEqualTo(substitution) {
    const substitutionNode = substitution.getNode(),
          substitutionNodeMatches = this.matchSubstitutionNode(substitutionNode),
          equalTo = substitutionNodeMatches;  ///

    return equalTo;
  }

  isComplex() {
    const simple = this.isSimple(),
          complex = !simple;

    return complex;
  }

  isNonTrivial() {
    const trivial = this.isTrivial(),
          nonTrivlal = !trivial;

    return nonTrivlal;
  }

  getVariable() {
    const variable = null;

    return variable;
  }

  getSubstitution() {
    const substitution = null;

    return substitution;
  }

  getMetavariable() {
    const metavariable = null;

    return metavariable;
  }

  getMetavariableName() {
    const metavariableName = null;

    return metavariableName;
  }

  getVariableIdentifier() {
    const variableIdentifier = null;

    return variableIdentifier;
  }

  isSimple() {
    const simple = true;

    return simple;
  }

  isTermEqualToTerm(term) {
    const termEqualToTerm = false;

    return termEqualToTerm;
  }

  isFrameEqualToFrame(frame) {
    const frameEqualToFrame = false;

    return frameEqualToFrame;
  }

  isStatementEqualToStatement(statement) {
    const statementEqualToStatement = false;

    return statementEqualToStatement;
  }

  isReferenceEqualToReference(reference) {
    const referenceEqualToReference = false;

    return referenceEqualToReference;
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

  compareMetavariableName(metavariableName) {
    const comparesToMetavariableName = false;

    return comparesToMetavariableName;
  }

  compareVariableIdentifier(variableIdentifier) {
    const comparesToVariableIdentifier = false;

    return comparesToVariableIdentifier;
  }

  resolve(substitutions, generalContext, specificContext) {
    const resolved = true;

    return resolved;
  }
}
