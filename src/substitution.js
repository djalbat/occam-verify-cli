"use strict";

export default class Substitution {
  constructor(string) {
    this.string = string;
  }

  getString() {
    return this.string;
  }

  getTerm() {
    const term = null;

    return term;
  }

  getFrame() {
    const frame = null;

    return frame;
  }

  getStatement() {
    const statement = null;

    return statement;
  }

  getSubstitutionNode() {
    const substitutionNode = null;

    return substitutionNode;
  }

  getMetavariableName() {
    const metavariableName = null;

    return metavariableName;
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

  matchStatementNode(statementNode) {
    const statementNodeMatches = false;

    return statementNodeMatches;
  }

  matchVariableName(variableName) {
    const variableNameMatches = false;

    return variableNameMatches;
  }

  matchMetavariableName(metavariableName) {
    const metavariableNameMatches = false;

    return metavariableNameMatches;
  }

  matchMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode) {
    const metavariableNameAndSubstitutionNodeMatches = false;

    return metavariableNameAndSubstitutionNodeMatches;
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
