"use strict";

export default class Substitution {
  isSimple() {
    const simple = true;

    return simple;
  }

  isComplex() {
    const simple = this.isSimple(),
          complex = !simple;

    return complex;
  }

  isResolved() {
    const simple = this.isSimple(),
          resolved = simple; ///

    return resolved;
  }

  getMetavariableNode() {
    const metavariableNode = null;

    return metavariableNode;
  }

  matchTermNode(termNode) {
    const matchesTermNode = false;

    return matchesTermNode;
  }

  matchVariableNode(variableNode) {
    const matchesMetavariableNode = false;

    return matchesMetavariableNode;
  }

  matchStatementNode(statementNode) {
    const matchesStatementNode = false;

    return matchesStatementNode;
  }

  matchMetavariableNode(metavariableNode) {
    const matchesMetavariableNode = false;

    return matchesMetavariableNode;
  }

  matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
    const matchesMetavariableNodeAndSubstitutionNode = false;

    return matchesMetavariableNodeAndSubstitutionNode;
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
