"use strict";

export default class Substitution {
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

  unifyAgainstEquivalences(equivalences, substitutions, localContextA, localContextB) {
    const unifiedAgainstEquivalences = equivalences.some((equivalence) => {
      const substitutionUnifiedAgainstEquivalence = this.unifyAgainstEquivalence(equivalence, substitutions, localContextA, localContextB);

      if (substitutionUnifiedAgainstEquivalence) {
        return true;
      }
    });

    return unifiedAgainstEquivalences;
  }
}
