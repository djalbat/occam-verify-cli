"use strict";

import shim from "../shim";
import Substitution from "../substitution";

import { nodeQuery } from "../utilities/query";
import { stripBracketsFromTerm } from "../utilities/brackets";
import { variableNameFromVariableNode } from "../utilities/name";
import { substitutionNodeFromSubstitutionTokens } from "../utilities/node";
import { substitutionTokensFromSubstitutionString } from "../utilities/tokens";

const termNodeQuery = nodeQuery("/substitution/term[0]"),
      variableNodeQuery = nodeQuery("/substitution/term[1]/variable!"),
      termVariableNodeQuery = nodeQuery("/term/variable"),
      substitutionNodeQuery = nodeQuery("/statement/substitution");

export default class TermForVariableSubstitution extends Substitution {
  constructor(string, termNode, variableNode, substitutionNode, substitutionTokens) {
    super(string);

    this.termNode = termNode;
    this.variableNode = variableNode;
    this.substitutionNode = substitutionNode;
    this.substitutionTokens = substitutionTokens;
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

  getSubstitutionTokens() {
    return this.substitutionTokens;
  }

  getVariableName() {
    const variableName = variableNameFromVariableNode(this.variableNode);

    return variableName;
  }

  setSubstitutionNode() {
    this.substitutionNode = substitutionNodeFromSubstitutionTokens(this.substitutionTokens);
  }

  setSubstitutionTokens() {
    const termVariableNode = termVariableNodeQuery(this.termNode),
          termVariableName = variableNameFromVariableNode(termVariableNode),
          variableName = variableNameFromVariableNode(this.variableNode),
          substitutionString = `[${termVariableName} for ${variableName}]`;

    this.substitutionTokens = substitutionTokensFromSubstitutionString(substitutionString);
  }

  isEqualTo(substitution) {
    let equalTo = false;

    const termNode = substitution.getTermNode(),
          variableNode = substitution.getVariableNode();

    if ((termNode !== null) && (variableNode !== null)) {
      const termNodeMatches = this.matchTermNode(termNode),
            variableNodeMatches = this.matchVariableNode(variableNode);

      equalTo = (termNodeMatches && variableNodeMatches);
    }

    return equalTo;
  }

  matchTermNode(termNode) {
    termNode = stripBracketsFromTerm(termNode); ///

    const termNodeMatches = this.termNode.match(termNode);

    return termNodeMatches;
  }

  matchVariableName(variableName) {
    let variableNameMatches;

    const variableNameA = variableName; ///

    variableName = variableNameFromVariableNode(this.variableNode);

    const variableNameB = variableName; ///

    variableNameMatches = (variableNameA === variableNameB);

    return variableNameMatches;
  }

  matchSubstitutionNode(substitutionNode) {
    const substitutionNodeMatches = this.substitutionNode.match(substitutionNode);

    return substitutionNodeMatches;
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
      const termNode = termNodeQuery(substitutionNode),
            variableNode = variableNodeQuery(substitutionNode);

      if ((termNode !== null) && (variableNode !== null)) {
        const { Term, Variable } = shim,
              term = Term.fromTermNode(termNode, localContext),
              variable = Variable.fromVariableNode(variableNode, localContext),
              string = stringFromTermAndVariable(term, variable, localContext),
              substitutionTokens = localContext.nodeAsTokens(substitutionNode);

        termForVariableSubstitution = new TermForVariableSubstitution(string, termNode, variableNode, substitutionNode, substitutionTokens);
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
          substitutionTokens = null,
          termForVariableSubstitution = new TermForVariableSubstitution(string, termNode, variableNode, substitutionNode, substitutionTokens);

    return termForVariableSubstitution;
  }
}

function stringFromTermAndVariable(term, variable, localContext) {
  const termNode = term.getNode(),
        termString = localContext.nodeAsString(termNode),
        variableString = variable.getString(),
        string = `[${termString} for ${variableString}]`;

  return string;
}
