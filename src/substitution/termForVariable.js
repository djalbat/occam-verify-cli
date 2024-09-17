"use strict";

import Substitution from "../substitution";

import { nodeQuery } from "../utilities/query";
import { stripBracketsFromTerm } from "../utilities/brackets";

const termNodeQuery = nodeQuery("/*/term!"),
      variableNodeQuery = nodeQuery("/*/variable!");

export default class TermForVariableSubstitution extends Substitution {
  constructor(termNode, variableNode) {
    super();

    this.termNode = termNode;
    this.variableNode = variableNode;
  }

  getTermNode() {
    return this.termNode;
  }

  getVariableNode() {
    return this.variableNode;
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
            variableNode = transformedVariableNode, ///
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
            variableNode = this.variableNode, ///
            termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);

      transformedSubstitution = termForVariableSubstitution;  ///
    }

    return transformedSubstitution;
  }

  transformedVariableNode(substitutions) {
    let transformedSubstitution = null;

    const transformedVariableNode = transformVariableNode(this.variableNode, substitutions);

    if (transformedVariableNode !== null) {
      const termNode = this.termNode,
            variableNode = transformedVariableNode, ///
            termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);

      transformedSubstitution = termForVariableSubstitution;  ///
    }

    return transformedSubstitution;
  }

  match(substitution) {
    const termNode = substitution.getTermNode(),
          variableNode = substitution.getVariableNode(),
          matchesTermNode = this.matchTermNode(termNode),
          matchesVariableNode = this.matchVariableNode(variableNode),
          matches = (matchesTermNode && matchesVariableNode);

    return matches;
  }

  matchTermNode(termNode) {
    termNode = stripBracketsFromTerm(termNode); ///

    const matchesTermNode = this.termNode.match(termNode);

    return matchesTermNode;
  }

  matchVariableNode(variableNode) {
    const matchesVariableNode = this.variableNode.match(variableNode);

    return matchesVariableNode;
  }

  unifyWithEquivalence(equivalence, substitutions, localContextA, localContextB) {
    let unifiedWithEquivalence;

    const equivalenceMatchesTermNode = equivalence.matchTermNode(this.termNode);

    if (equivalenceMatchesTermNode) {
      const equivalenceMatchesVariableNode = equivalence.matchVariableNode(this.variableNode);

      if (equivalenceMatchesVariableNode) {
          unifiedWithEquivalence = true;
        }
    }

    return unifiedWithEquivalence;
  }

  asString(localContextA, localContextB) {
    const termNodeB = this.termNode,  ///
          termStringB = localContextB.nodeAsString(termNodeB),
          variableNodeA = this.variableNode,  ///
          variableStringA = localContextA.nodeAsString(variableNodeA);

    const string = `[${termStringB} for ${variableStringA}]`;

    return string;
  }

  static fromSubstitutionNode(substitutionNode) {
    let termNode = termNodeQuery(substitutionNode),
        variableNode = variableNodeQuery(substitutionNode);

    termNode = stripBracketsFromTerm(termNode); ///

    const termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);

    return termForVariableSubstitution;
  }

  static fromTernNodeAndVariableNode(termNode, variableNode) {
    termNode = stripBracketsFromTerm(termNode); ///

    const termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);

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
