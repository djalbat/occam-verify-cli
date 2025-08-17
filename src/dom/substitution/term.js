"use strict";

import dom from "../../dom";
import Substitution from "../substitution";
import TermSubstitutionPartialContext from "../../context/partial/substitution/term";

import { domAssigned } from "../../dom";
import { stripBracketsFromTerm } from "../../utilities/brackets";
import { stripBracketsFromTermNode } from "../../utilities/brackets";

export default domAssigned(class TermSubstitution extends Substitution {
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

  isTrivial() {
    const termString = this.term.getString(),
          variableString = this.variable.getString(),
          trivial = (termString === variableString);

    return trivial;
  }

  isTermEqualTo(term, context) {
    term = stripBracketsFromTerm(term, context); ///

    const termEqualTo = this.term.isEqualTo(term);

    return termEqualTo;
  }

  isVariableEqualTo(variable) { return this.variable.isEqualTo(variable); }

  getReplacementNode() {
    const termNode = this.term.getNode(),
          replacementNode = termNode; ///

    return replacementNode;
  }

  matchName(name) { return this.variable.matchName(name); }

  static fromStatementNode(statementNode, context) {
    let termSubstitution = null;

    const termSubstitutionNode = statementNode.getTermSubstitutionNode();

    if (termSubstitutionNode !== null) {
      const lastTermNode = termSubstitutionNode.getLastTermNode(),
            firstTermNode = termSubstitutionNode.getFirstTermNode(),
            singularVariableNode = lastTermNode.getSingularVariableNode(lastTermNode);

      if (singularVariableNode !== null) {
        const { Term, Variable } = dom,
              termNode = firstTermNode, ///
              variableNode = singularVariableNode,  ///
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
});

function stringFromTermAndVariable(term, variable) {
  const termString = term.getString(),
        variableString = variable.getString(),
        string = `[${termString} for ${variableString}]`;

  return string;
}
