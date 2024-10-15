"use strict";

import shim from "../shim";
import Substitution from "../substitution";

import { nodeQuery } from "../utilities/query";
import { stripBracketsFromTerm } from "../utilities/brackets";

const substitutionNodeQuery = nodeQuery("/statement/substitution"),
      termVariableNodeQuery = nodeQuery("/term/variable!"),
      substitutionTermNodeQuery = nodeQuery("/substitution/term!"),
      substitutionsVariableNodeQuery = nodeQuery("/substitution/variable!");

export default class TermForVariableSubstitution extends Substitution {
  constructor(string, termNode, variableNode, substitutionNode) {
    super(string);

    this.termNode = termNode;
    this.variableNode = variableNode;
    this.substitutionNode = substitutionNode;
  }

  getTermNode() {
    return this.termNode;
  }

  getVariableNode() {
    return this.variableNode;
  }

  getSubstitutionNode() {
    return this.substitutionNode;
  }

  transformed(substitutions) {
    let transformedSubstitution = null;

    const transformedTermNode = transformTermNode(this.termNode, substitutions),
          transformedVariableNode = transformVariableNode(this.variableNode, substitutions);

    if ((transformedTermNode !== null) && (transformedVariableNode !== null)) {
      const string = null,
            termNode = transformedTermNode, ///
            variableNode = transformedVariableNode, ///
            substitutionNode = null,
            termForVariableSubstitution = new TermForVariableSubstitution(string, termNode, variableNode, substitutionNode);

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

  static fromStatementNode(statementNode, localContext) {
    let termForVariableSubstitution = null;

    const substitutionNode = substitutionNodeQuery(statementNode);

    if (substitutionNode !== null) {
      let substitutionTermNode = substitutionTermNodeQuery(substitutionNode);

      if (substitutionTermNode !== null) {
        const { Term, Variable } = shim,
              substitutionVariableNode = substitutionsVariableNodeQuery(substitutionNode),
              variableNode = substitutionVariableNode,  ///
              termNode = substitutionTermNode,  ///
              term = Term.fromTermNode(termNode, localContext),
              variable = Variable.fromVariableNode(variableNode, localContext),
              string = stringFromTermAndVariable(term, variable, localContext);

        termForVariableSubstitution = new TermForVariableSubstitution(string, termNode, variableNode, substitutionNode);
      }
    }

    return termForVariableSubstitution;
  }

  static fromTernAndVariable(term, variable, localContext) {
    let termNode = term.getNode();

    termNode = stripBracketsFromTerm(termNode); ///

    const string = stringFromTermAndVariable(term, variable, localContext),
          variableNode = variable.getNode(),
          substitutionNode = null,
          termForVariableSubstitution = new TermForVariableSubstitution(string, termNode, variableNode, substitutionNode);

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

function stringFromTermAndVariable(term, variable, localContext) {
  const termNode = term.getNode(),
        termString = localContext.nodeAsString(termNode),
        variableString = variable.getString(),
        string = `[${termString} for ${variableString}]`;

  return string;
}
