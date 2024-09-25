"use strict";

import Substitution from "../substitution";

import { nodeQuery } from "../utilities/query";
import { stripBracketsFromTerm } from "../utilities/brackets";

const termNodeQuery = nodeQuery("/substitution/term!"),
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

    const transformedTermNode = transformTermNode(this.termNode, substitutions);

    if (transformedTermNode !== null) {
      const termNode = transformedTermNode, ///
            variableNode = this.variableNode, ///
            termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);

      transformedSubstitution = termForVariableSubstitution;  ///
    }

    return transformedSubstitution;
  }

  match(substitution) {
    const termNode = substitution.getTermNode(),
          variableNode = substitution.getVariableNode(),
          termNodeMatches = this.matchTermNode(termNode),
          variableNodeMatches = this.matchVariableNode(variableNode),
          matches = (termNodeMatches && variableNodeMatches);

    return matches;
  }

  matchTermNode(termNode) {
    termNode = stripBracketsFromTerm(termNode); ///

    const termNodeMatches = this.termNode.match(termNode);

    return termNodeMatches;
  }

  matchVariableNode(variableNode) {
    const metavariableNodeMatches = this.variableNode.match(variableNode);

    return metavariableNodeMatches;
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
          variableStringA = localContextA.nodeAsString(variableNodeA),
          string = `[${termStringB} for ${variableStringA}]`;

    return string;
  }

  static fromSubstitutionNode(substitutionNode) {
    let termForVariableSubstitution = null;

    let termNode = termNodeQuery(substitutionNode),
        variableNode = variableNodeQuery(substitutionNode);

    if (termNode !== null) {
      termNode = stripBracketsFromTerm(termNode); ///

      termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);
    }

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

  const variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    substitutions.someSubstitution((substitution) => {
      const substitutionMatchesVariableNode = substitution.matchVariableNode(variableNode);

      if (substitutionMatchesVariableNode) {
        const termNode = substitution.getTermNode();

        transformedTermNode = termNode; ////

        return true;
      }
    });
  }

  return transformedTermNode;
}
