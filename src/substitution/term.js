"use strict";

import dom from "../dom";
import Substitution from "../substitution";
import TermSubstitutionPartialContext from "../context/partial/substitution/term";

import { nodeQuery } from "../utilities/query";
import { stripBracketsFromTerm } from "../utilities/brackets";
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

  isTermEqualTo(term, context) {
    term = stripBracketsFromTerm(term); ///

    const termEqualTo = this.term.isEqualTo(term);

    return termEqualTo;
  }

  isVariableEqualTo(variable) { return this.variable.isEqualTo(variable); }

  unifyWithEquivalence(equivalence) {
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
        const { Term, Variable } = dom,
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

    const { Term } = dom;

    term = Term.fromTermNode(termNode, context);

    const string = stringFromTermAndVariable(term, variable),
          lexer = context.getLexer(),
          parser = context.getParser(),
          termSubstitutionPartialContext = TermSubstitutionPartialContext.fromStringLexerAndParser(string, lexer, parser),
          node = termSubstitutionPartialContext.getNode(),
          tokens = termSubstitutionPartialContext.getTokens(),
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
