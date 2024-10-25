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

  matchSubstitutionNode(substitutionNode) {
    debugger

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
    let termForVariableSubstitution = null;

    const substitutionNode = substitutionNodeQuery(statementNode);

    if (substitutionNode !== null) {
      const termNode = termNodeQuery(substitutionNode),
            variableNode = variableNodeQuery(substitutionNode);

      if ((termNode !== null) && (variableNode !== null)) {
        const { Term, Variable } = shim,
              term = Term.fromTermNode(termNode, context),
              variable = Variable.fromVariableNode(variableNode, context),
              node = substitutionNode,  ///
              tokens = context.nodeAsTokens(node),
              string = stringFromTermAndVariable(term, variable);

        termForVariableSubstitution = new TermForVariableSubstitution(string, node, tokens, term, variable);
      }
    }

    return termForVariableSubstitution;
  }

  static fromTernAndVariable(term, variable, context) {
    let termNode = term.getNode();

    termNode = stripBracketsFromTermNode(termNode); ///

    const { Term } = shim;

    term = Term.fromTermNode(termNode, context);

    const lexer = context.getLexer(),
          parser = context.getParser(),
          string = stringFromTermAndVariable(term, variable),
          substitutionString = string,  ///
          unqualifiedStatementString = unqualifiedStatementStringFromSubstitutionString(substitutionString),
          unqualifiedStatementTokens = unqualifiedStatementTokensFromUnqualifiedStatementString(unqualifiedStatementString, lexer),
          unqualifiedStatementNode = unqualifiedStatementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser),
          substitutionNode = substitutionNodeFromUnqualifiedStatementNode(unqualifiedStatementNode),
          substitutionTokens = substitutionTokensFromUnqualifiedStatementTokensAndSubstitutionNode(unqualifiedStatementTokens, substitutionNode),
          node = substitutionNode,  //
          tokens = substitutionTokens,  ///
          termForVariableSubstitution = new TermForVariableSubstitution(string, node, tokens, term, variable);

    return termForVariableSubstitution;
  }
}

function stringFromTermAndVariable(term, variable) {
  const termString = term.getString(),
        variableString = variable.getString(),
        string = `[${termString} for ${variableString}]`;

  return string;
}
