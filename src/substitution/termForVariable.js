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

  isIntrinsic(substitution) {
    const termNod = substitution.getTermNode(),
          variableNode = substitution.getVariableNode(),
          termNodeMatches = this.termNode.match(termNod),
          variableNodeMatches = this.variableNode.match(variableNode),
          intrinsic = ((!termNodeMatches) && (!variableNodeMatches));

    return intrinsic;
  }

  matchTermNode(termNode) {
    const termNodeMatches = this.termNode.match(termNode);

    return termNodeMatches;
  }

  matchVariableNode(variableNode) {
    const variableNodeMatches = this.variableNode.match(variableNode);

    return variableNodeMatches;
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
    substitutions.some((substitution) => {
      const variableNodeMatches = substitution.matchVariableNode(termVariableNode);

      if (variableNodeMatches) {
        termNode = substitution.getTermNode();  ///

        return true;
      }
    });
  }

  return termNode;
}

function substituteVariableNode(variableNode, substitutions) {
  substitutions.some((substitution) => {
    const variableNodeMatches = substitution.matchVariableNode(variableNode);

    if (variableNodeMatches) {
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
