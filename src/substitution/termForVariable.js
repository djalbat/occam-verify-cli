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

  isTransformed(substitution) {
    const termNod = substitution.getTermNode(),
          variableNode = substitution.getVariableNode(),
          termNodeMatches = this.termNode.match(termNod),
          variableNodeMatches = this.variableNode.match(variableNode),
          transformed = ((!termNodeMatches) && (!variableNodeMatches));

    return transformed;
  }

  matchTermNode(termNode) {
    const matchesTermNode = this.termNode.match(termNode);

    return matchesTermNode;
  }

  matchVariableNode(variableNode) {
    const matchesVariableNode = this.variableNode.match(variableNode);

    return matchesVariableNode;
  }

  unifyAgainstEquivalence(equivalence, substitutions, localContext) {
    let unifiedAgainstEquivalence;

    const equivalenceMatchesVariableNode = equivalence.matchVariableNode(this.variableNode);

    if (equivalenceMatchesVariableNode) {
      const equivalenceMatchesTermNode = equivalence.matchTermNode(this.termNode);

      if (equivalenceMatchesTermNode) {
        unifiedAgainstEquivalence = true;
      }
    }

    return unifiedAgainstEquivalence;
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

  static fromSubstitutionAndSubstitutions(substitution, substitutions) {
    let termNode = substitution.getTermNode(),
        variableNode = substitution.getVariableNode();

    termNode = substituteTermNode(termNode, substitutions); ///

    variableNode = substituteVariableNode(variableNode, substitutions); ///

    const termForVariableSubstitution = new TermForVariableSubstitution(variableNode, termNode);

    return termForVariableSubstitution;
  }

  static fromSubstitutionNodeAndSubstitutions(substitutionNode, substitutions) {
    let termNode = termNodeQuery(substitutionNode),
        variableNode = variableNodeQuery(substitutionNode);

    termNode = substituteTermNode(termNode, substitutions); ///

    variableNode = substituteVariableNode(variableNode, substitutions); ///

    const termForVariableSubstitution = new TermForVariableSubstitution(variableNode, termNode);

    return termForVariableSubstitution;
  }
}

function substituteTermNode(termNode, substitutions) {
  const termVariableNode = variableNodeQuery(termNode);

  if (termVariableNode !== null) {
    substitutions.someSubstitution((substitution) => {
      const substitutionMatchesVariableNode = substitution.matchVariableNode(termVariableNode);

      if (substitutionMatchesVariableNode) {
        termNode = substitution.getTermNode();  ///

        return true;
      }
    });
  }

  return termNode;
}

function substituteVariableNode(variableNode, substitutions) {
  substitutions.someSubstitution((substitution) => {
    const substitutionMatchesVariableNode = substitution.matchVariableNode(variableNode);

    if (substitutionMatchesVariableNode) {
      const termNode = substitution.getTermNode(),
            termVariableNode = variableNodeQuery(termNode);

      if (termVariableNode !== null) {
        variableNode = termVariableNode;  ///

        return true;
      }
    }
  });

  return variableNode;
}
