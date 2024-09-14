"use strict";

import Substitution from "../substitution";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/*/term!"),
      variableNodeQuery = nodeQuery("/*/variable!");

export default class TermForVariableSubstitution extends Substitution {
  constructor(variableNode, termNode) {
    super();

    this.variableNode = variableNode;
    this.termNode = termNode;
  }

  getVariableNode() {
    return this.variableNode;
  }

  getTermNode() {
    return this.termNode;
  }

  getNode() {
    const node = this.termNode; ///

    return node;
  }

  transformed(substitutions) {
    let transformedSubstitution = null;

    const transformedTermNode = transformTermNode(this.termNode, substitutions),
          transformedVariableNode = transformVariableNode(this.variableNode, substitutions);

    if ((transformedTermNode !== null) && (transformedVariableNode !== null)) {
      const termNode = transformedTermNode, ///
            variableNode = transformedVariableNode,
            termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);

      transformedSubstitution = termForVariableSubstitution;  ///
    }

    return transformedSubstitution;
  }

  transformedTermNode(substitutions) {
    let transformedSubstitution = null;

    const transformedTermNode = transformTermNode(this.termNode, substitutions);

    if (transformedTermNode !== null) {
      const termNode = transformedTermNode, ///
            termForVariableSubstitution = new TermForVariableSubstitution(termNode, this.variableNode);

      transformedSubstitution = termForVariableSubstitution;  ///
    }

    return transformedSubstitution;
  }

  transformedVariableNode(substitutions) {
    let transformedSubstitution = null;

    const transformedVariableNode = transformVariableNode(this.variableNode, substitutions);

    if (transformedVariableNode !== null) {
      const variableNode = transformedVariableNode,
            termForVariableSubstitution = new TermForVariableSubstitution(this.termNode, variableNode);

      transformedSubstitution = termForVariableSubstitution;  ///
    }

    return transformedSubstitution;
  }

  unifyTerm(termNode) {
    const matchesTermNode = this.matchTermNode(termNode),
          termUnified = matchesTermNode;  ///

    return termUnified;
  }

  matchTermNode(termNode) {
    const matchesTermNode = this.termNode.match(termNode);

    return matchesTermNode;
  }

  matchVariableNode(variableNode) {
    const matchesVariableNode = this.variableNode.match(variableNode);

    return matchesVariableNode;
  }

  unifyWithEquivalence(equivalence, substitutions, localContextA, localContextB) {
    let unifiedWithEquivalence;

    const equivalenceMatchesVariableNode = equivalence.matchVariableNode(this.variableNode);

    if (equivalenceMatchesVariableNode) {
      const equivalenceMatchesTermNode = equivalence.matchTermNode(this.termNode);

      if (equivalenceMatchesTermNode) {
        unifiedWithEquivalence = true;
      }
    }

    return unifiedWithEquivalence;
  }

  asString(localContextA, localContextB) {
    const termNodeB = this.termNode,  ///
          termStringB = localContextB.nodeAsString(termNodeB),
          variableNodeA = this.variableNode,  ///
          variableStringA = localContextA.nodeAsString(variableNodeA),
          string = `[${termStringB} for ${variableStringA}]`;

    return string;
  }

  static fromSubstitutionNode(substitutionNode) {
    const termNode = termNodeQuery(substitutionNode),
          variableNode = variableNodeQuery(substitutionNode),
          termForVariableSubstitution = new TermForVariableSubstitution(variableNode, termNode);

    return termForVariableSubstitution;
  }

  static fromVariableNodeAndTermNode(variableNode, termNode) {
    const termForVariableSubstitution = new TermForVariableSubstitution(variableNode, termNode);

    return termForVariableSubstitution;
  }
}

function transformTermNode(termNode, substitutions) {
  let transformedTermNode = null;

  const termVariableNode = variableNodeQuery(termNode);

  if (termVariableNode !== null) {
    substitutions.someSubstitution((substitution) => {
      const substitutionMatchesVariableNode = substitution.matchVariableNode(termVariableNode);

      if (substitutionMatchesVariableNode) {
        const termNode = substitution.getTermNode();

        transformedTermNode = termNode; ////

        return true;
      }
    });
  }

  return transformedTermNode;
}

function transformVariableNode(variableNode, substitutions) {
  let transformedVariableNode = null;

  substitutions.someSubstitution((substitution) => {
    const substitutionMatchesVariableNode = substitution.matchVariableNode(variableNode);

    if (substitutionMatchesVariableNode) {
      const termNode = substitution.getTermNode(),
            variableNode = variableNodeQuery(termNode);

      if (variableNode !== null) {
        transformedVariableNode = variableNode;  ///

        return true;
      }
    }
  });

  return transformedVariableNode;
}
