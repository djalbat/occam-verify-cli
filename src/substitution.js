"use strict";

export default class Substitution {
  isStraightForward() {
    const straightforward = true;

    return straightforward;
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
