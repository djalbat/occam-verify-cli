"use strict";

import shim from "./shim";

class Substitution {
  constructor(string, node, tokens) {
    this.string = string;
    this.node = node;
    this.tokens = tokens;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
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

  getMetavariableNode() {
    const metavariableNode = null;

    return metavariableNode;
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

  resolve(substitutions, context) {
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

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = false;

    return metavariableNodeMatches;
  }

  matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
    const metavariableNodeAndSubstitutionNodeMatches = false;

    return metavariableNodeAndSubstitutionNodeMatches;
  }

  unifyWithEquivalence(equivalence, substitutions, generalContext, specificContext) {
    let unifiedWithEquivalence = false;

    return unifiedWithEquivalence;
  }

  unifyWithEquivalences(equivalences, substitutions, generalContext, specificContext) {
    const unifiedWithEquivalences = equivalences.some((equivalence) => {
      const substitutionUnifiedWithEquivalence = this.unifyWithEquivalence(equivalence, substitutions, generalContext, specificContext);

      if (substitutionUnifiedWithEquivalence) {
        return true;
      }
    });

    return unifiedWithEquivalences;
  }
}

Object.assign(shim, {
  Substitution
});

export default Substitution;
