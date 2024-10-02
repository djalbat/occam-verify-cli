"use strict";

import Substitution from "../substitution";

import { nodeQuery } from "../utilities/query";
import { stripBracketsFromTerm } from "../utilities/brackets";

const termVariableNodeQuery = nodeQuery("/term/variable!"),
      substitutionTermmNodeQuery = nodeQuery("/substitution/term!"),
      substitutionsVariableNodeQuery = nodeQuery("/substitution/variable!");

export default class TermForVariableSubstitution extends Substitution {
  constructor(string, termNode, variableNode) {
    super(string);

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

  isEqualTo(substitution) {
    const termNode = substitution.getTermNode(),
          variableNode = substitution.getVariableNode(),
          termNodeMatches = this.matchTermNode(termNode),
          variableNodeMatches = this.matchVariableNode(variableNode),
          equalTo = (termNodeMatches && variableNodeMatches);

    return equalTo;
  }

  matchTermNode(termNode) {
    termNode = stripBracketsFromTerm(termNode); ///

    const termNodeMatches = this.termNode.match(termNode);

    return termNodeMatches;
  }

  matchVariableNode(variableNode) {
    const variableNodeMatches = this.variableNode.match(variableNode);

    return variableNodeMatches;
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

  static fromSubstitutionNode(substitutionNode) {
    let termForVariableSubstitution = null;

    let substitutionTermNode = substitutionTermmNodeQuery(substitutionNode);

    if (substitutionTermNode !== null) {
      let termNode = substitutionTermNode;  ///

      termNode = stripBracketsFromTerm(termNode); ///

      const substitutionVariableNode = substitutionsVariableNodeQuery(substitutionNode),
            variableNode = substitutionVariableNode;  ///

      termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);
    }

    return termForVariableSubstitution;
  }

  static fromTernNodeAndVariableNode(termNode, variableNode, localContextA, localContextB) {
    termNode = stripBracketsFromTerm(termNode); ///

    const string = stringFromTermNodeAndVariableNode(termNode, variableNode, localContextA, localContextB),
          termForVariableSubstitution = new TermForVariableSubstitution(string, termNode, variableNode);

    return termForVariableSubstitution;
  }
}

function transformTermNode(termNode, substitutions) {
  let transformedTermNode = null;

  const termVariableNode = termVariableNodeQuery(termNode);

  if (termVariableNode !== null) {
    const variableNode = termVariableNode;  ///

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

function transformVariableNode(variableNode, substitutions) {
  let transformedVariableNode = null;

  substitutions.someSubstitution((substitution) => {
    const variableNodeMatches = substitution.matchVariableNode(variableNode);

    if (variableNodeMatches) {
      const termNode = substitution.getTermNode(),
            termVariableNode = termVariableNodeQuery(termNode);

      if (termVariableNode !== null) {
        transformedVariableNode = termVariableNode;  ///

        return true;
      }
    }
  });

  return transformedVariableNode;
}

function stringFromTermNodeAndVariableNode(termNode, variableNode, localContextA, localContextB) {
  const termNodeB = termNode,  ///
        termStringB = localContextB.nodeAsString(termNodeB),
        variableNodeA = variableNode,  ///
        variableStringA = localContextA.nodeAsString(variableNodeA),
        string = `[${termStringB} for ${variableStringA}]`;

  return string;
}
