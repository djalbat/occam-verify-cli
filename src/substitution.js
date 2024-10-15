"use strict";

export default class Substitution {
  constructor(string) {
    this.string = string;
  }

  getString() {
    return this.string;
  }

  getTermNode() {
    const termNode = null;

    return termNode;
  }

  getFrameNode() {
    const frameNode = null;

    return frameNode;
  }

  getStatementNode() {
    const statementNode = null;

    return statementNode;
  }

  getVariableNode() {
    const variableNode = null;

    return variableNode;
  }

  getMetavariableNode() {
    const metavariableNode = null;

    return metavariableNode;
  }

  getSubstitutionNode() {
    const substitutionNode = null;

    return substitutionNode;
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

  isEqualTo(substitution) {
    const equalTo = false;

    return equalTo;
  }

  resolve(substitutions, localContext) {
    const resolved = true;

    return resolved;
  }

  matchTermNode(termNode) {
    const termNodeMatches = false;

    return termNodeMatches;
  }

  matchFrameNode(frameNode) {
    const frameNodeMatches = false;

    return frameNodeMatches;
  }

  matchVariableNode(variableNode) {
    const variableNodeMatches = false;

    return variableNodeMatches;
  }

  matchStatementNode(statementNode) {
    const statementNodeMatches = false;

    return statementNodeMatches;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = false;

    return metavariableNodeMatches;
  }

  matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
    const metavariableNodeAndSubstitutionNodeMatches = false;

    return metavariableNodeAndSubstitutionNodeMatches;
  }

  unifyWithEquivalence(equivalence, substitutions, localContextA, localContextB) {
    let unifiedWithEquivalence = false;

    return unifiedWithEquivalence;
  }

  unifyWithEquivalences(equivalences, substitutions, localContextA, localContextB) {
    const unifiedWithEquivalences = equivalences.some((equivalence) => {
      const substitutionUnifiedWithEquivalence = this.unifyWithEquivalence(equivalence, substitutions, localContextA, localContextB);

      if (substitutionUnifiedWithEquivalence) {
        return true;
      }
    });

    return unifiedWithEquivalences;
  }
}
