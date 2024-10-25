"use strict";

import shim from "../shim";
import Substitution from "../substitution";
import TermSubstitutionNodeAndTokens from "../nodeAndTokens/substitution/term";

import { nodeQuery } from "../utilities/query";
import { stripBracketsFromTermNode } from "../utilities/brackets";

const termNodeQuery = nodeQuery("/termSubstitution/term[0]"),
      variableNodeQuery = nodeQuery("/termSubstitution/term[1]/variable!"),
      termSubstitutionNodeQuery = nodeQuery("/statement/termSubstitution");

export default class TermSubstitution extends Substitution {
  constructor(string, node, tokens, term, variable) {
    super(string, node, tokens);

    this.term = term;
    this.variable = variable;
  }

  getTerm() {
    return this.term;
  }

  getVariable() {
    return this.variable;
  }

  isEqualTo(substitution) {
    let equalTo = false;

    const term = substitution.getTerm(),
          variable = substitution.getVariable();

    if ((term !== null) && (variable !== null)) {
      const termNode = term.getNode(),
            variableNode = variable.getNode(),
            termNodeMatches = this.matchTermNode(termNode),
            variableNodeMatches = this.matchVariableNode(variableNode);

      equalTo = (termNodeMatches && variableNodeMatches);
    }

    return equalTo;
  }

  matchTermNode(termNode) {
    termNode = stripBracketsFromTermNode(termNode); ///

    const termNodeMatches = this.term.matchTermNode(termNode);

    return termNodeMatches;
  }

  matchVariableName(variableName) {
    let variableNameMatches;

    const variableNameA = variableName; ///

    variableName = this.variable.getName();

    const variableNameB = variableName; ///

    variableNameMatches = (variableNameA === variableNameB);

    return variableNameMatches;
  }

  unifyWithEquivalence(equivalence, substitutions, generalContext, specificContext) {
    let unifiedWithEquivalence;

    const termNode = this.term.getNode(),
          equivalenceMatchesTermNode = equivalence.matchTermNode(termNode);

    if (equivalenceMatchesTermNode) {
      const variableNode = this.variable.getNode(),
            equivalenceMatchesVariableNode = equivalence.matchVariableNode(variableNode);

      if (equivalenceMatchesVariableNode) {
          unifiedWithEquivalence = true;
        }
    }

    return unifiedWithEquivalence;
  }

  static fromStatementNode(statementNode, context) {
    let termSubstitution = null;

    const termSubstitutionNode = termSubstitutionNodeQuery(statementNode);

    if (termSubstitutionNode !== null) {
      const termNode = termNodeQuery(termSubstitutionNode),
            variableNode = variableNodeQuery(termSubstitutionNode);

      if ((termNode !== null) && (variableNode !== null)) {
        const { Term, Variable } = shim,
              term = Term.fromTermNode(termNode, context),
              variable = Variable.fromVariableNode(variableNode, context),
              node = termSubstitutionNode,  ///
              tokens = context.nodeAsTokens(node),
              string = stringFromTermAndVariable(term, variable);

        termSubstitution = new TermSubstitution(string, node, tokens, term, variable);
      }
    }

    return termSubstitution;
  }

  static fromTernAndVariable(term, variable, context) {
    let termNode = term.getNode();

    termNode = stripBracketsFromTermNode(termNode); ///

    const { Term } = shim;

    term = Term.fromTermNode(termNode, context);

    const string = stringFromTermAndVariable(term, variable),
          termSubstitutionString = string,  ///
          termSubstitutionNodeAndTokens = TermSubstitutionNodeAndTokens.fromTermSubstitutionString(termSubstitutionString, context),
          node = termSubstitutionNodeAndTokens.getNode(),
          tokens = termSubstitutionNodeAndTokens.getNode(),
          termSubstitution = new TermSubstitution(string, node, tokens, term, variable);

    return termSubstitution;
  }
}

function stringFromTermAndVariable(term, variable) {
  const termString = term.getString(),
        variableString = variable.getString(),
        string = `[${termString} for ${variableString}]`;

  return string;
}
