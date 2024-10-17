"use strict";

import shim from "../shim";
import Substitution from "../substitution";

import { nodeQuery } from "../utilities/query";
import { stripBracketsFromTermNode } from "../utilities/brackets";
import { substitutionNodeFromUnqualifiedStatementNode,
         unqualifiedStatementStringFromSubstitutionString,
         unqualifiedStatementNodeFromUnqualifiedStatementTokens } from "../utilities/node";
import { unqualifiedStatementTokensFromUnqualifiedStatementString,
         substitutionTokensFromUnqualifiedStatementTokensAndSubstitutionNode } from "../utilities/tokens";

const termNodeQuery = nodeQuery("/substitution/term[0]"),
      variableNodeQuery = nodeQuery("/substitution/term[1]/variable!"),
      substitutionNodeQuery = nodeQuery("/statement/substitution");

export default class TermForVariableSubstitution extends Substitution {
  constructor(string, term, variable, substitutionNode, substitutionTokens) {
    super(string);

    this.term = term;
    this.variable = variable;
    this.substitutionNode = substitutionNode;
    this.substitutionTokens = substitutionTokens;
  }

  getTerm() {
    return this.term;
  }

  getVariable() {
    return this.variable;
  }

  getSubstitutionNode() {
    return this.substitutionNode;
  }

  getSubstitutionTokens() {
    return this.substitutionTokens;
  }

  getSubstitutionString() {
    const termString = this.term.getString(),
          variableString = this.variable.getString(),
          substitutionString = `[${termString} for ${variableString}]`;

    return substitutionString;
  }

  setSubstitutionNodeAndTokens(localContext) {
    const lexer = localContext.getLexer(),
          parser = localContext.getParser(),
          substitutionString = this.getSubstitutionString(),
          unqualifiedStatementString = unqualifiedStatementStringFromSubstitutionString(substitutionString),
          unqualifiedStatementTokens = unqualifiedStatementTokensFromUnqualifiedStatementString(unqualifiedStatementString, lexer),
          unqualifiedStatementNode = unqualifiedStatementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser);

    this.substitutionNode = substitutionNodeFromUnqualifiedStatementNode(unqualifiedStatementNode);

    this.substitutionTokens = substitutionTokensFromUnqualifiedStatementTokensAndSubstitutionNode(unqualifiedStatementTokens, this.substitutionNode);
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

  matchSubstitutionNode(substitutionNode) {
    let substitutionNodeMatches;

    if ((substitutionNode === null) && (this.substitutionNode === null)) {
      substitutionNodeMatches = true;
    } else if ((substitutionNode === null) && (this.substitutionNode !== null)) {
      substitutionNodeMatches = false;
    } else if ((substitutionNode !== null) && (this.substitutionNode === null)) {
      substitutionNodeMatches = false;
    } else {
      substitutionNodeMatches = this.substitutionNode.match(substitutionNode);
    }

    return substitutionNodeMatches;
  }

  unifyWithEquivalence(equivalence, substitutions, localContextA, localContextB) {
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

        termForVariableSubstitution = new TermForVariableSubstitution(string, term, variable, substitutionNode, substitutionTokens);
      }
    }

    return termForVariableSubstitution;
  }

  static fromTernAndVariable(term, variable, localContext) {
    let termNode = term.getNode();

    termNode = stripBracketsFromTermNode(termNode); ///

    const { Term } = shim;

    term = Term.fromTermNode(termNode, localContext);

    const string = stringFromTermAndVariable(term, variable, localContext),
          substitutionNode = null,
          substitutionTokens = null,
          termForVariableSubstitution = new TermForVariableSubstitution(string, term, variable, substitutionNode, substitutionTokens);

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
