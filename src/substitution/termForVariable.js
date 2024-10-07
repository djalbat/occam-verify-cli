"use strict";

import shim from "../shim";
import Substitution from "../substitution";

import { nodeQuery } from "../utilities/query";
import { stripBracketsFromTerm } from "../utilities/brackets";

const termVariableNodeQuery = nodeQuery("/term/variable!"),
      substitutionTermmNodeQuery = nodeQuery("/substitution/term!"),
      substitutionsVariableNodeQuery = nodeQuery("/substitution/variable!");

export default class TermForVariableSubstitution extends Substitution {
  constructor(string, term, variable) {
    super(string);

    this.term = term;
    this.variable = variable;
  }

  getTerm() {
    return this.term;
  }

  getVariable() {
    return this.variable;
  }

  transformed(substitutions) {
    let transformedSubstitution = null;

    debugger

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
    debugger

    const termNode = substitution.getTermNode(),
          variableNode = substitution.getVariableNode(),
          termNodeMatches = this.matchTermNode(termNode),
          variableNodeMatches = this.matchVariableNode(variableNode),
          equalTo = (termNodeMatches && variableNodeMatches);

    return equalTo;
  }

  matchTermNode(termNode) {
    debugger

    termNode = stripBracketsFromTerm(termNode); ///

    const termNodeMatches = this.termNode.match(termNode);

    return termNodeMatches;
  }

  matchVariableNode(variableNode) {
    debugger

    const variableNodeMatches = this.variableNode.match(variableNode);

    return variableNodeMatches;
  }

  unifyWithEquivalence(equivalence, substitutions, localContextA, localContextB) {
    debugger

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
    debugger

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

  static fromTernNodeAndVariableNode(term, variable, localContext) {
    let termNode = term.getNode();

    termNode = stripBracketsFromTerm(termNode); ///

    const { Term } = shim,
          type = term.getType();

    term = Term.fromTermNodeAndType(termNode, type, localContext)

    const string = stringFromTermAndVariable(term, variable),
          termForVariableSubstitution = new TermForVariableSubstitution(string, term, variable);

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

function stringFromTermAndVariable(term, variable) {
  const termString = term.getString(),
        variableString = variable.getString(),
        string = `[${termString} for ${variableString}]`;

  return string;
}
