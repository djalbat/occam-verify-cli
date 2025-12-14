"use strict";

import ontology from "../../ontology";
import Substitution from "../substitution";
import TermSubstitutionPartialContext from "../../context/partial/substitution/term";

import { define } from "../../ontology";
import { nodeQuery } from "../../utilities/query";
import { stripBracketsFromTerm } from "../../utilities/brackets";

const termVariableNodeQuery = nodeQuery("/term/variable!");

export default define(class TermSubstitution extends Substitution {
  constructor(context, string, node, tokens, term, variable) {
    super(context, string, node, tokens);

    this.term = term;
    this.variable = variable;
  }

  getTerm() {
    return this.term;
  }

  getVariable() {
    return this.variable;
  }

  getReplacementNode() {
    const termNode = this.term.getNode(),
          replacementNode = termNode; ///

    return replacementNode;
  }

  isTrivial() {
    const termString = this.term.getString(),
          variableString = this.variable.getString(),
          trivial = (termString === variableString);

    return trivial;
  }

  isTermEqualToTerm(term, context) {
    term = stripBracketsFromTerm(term, context); ///

    const termEqualToTerm = this.term.isEqualTo(term);

    return termEqualToTerm;
  }

  isTermVariableEqualToTerm(termVariable, context) {
    let termVariableEqualToTerm = false;

    const termNode = this.term.getNode();

    let termVariableNode;

    termVariableNode = termVariableNodeQuery(termNode);

    if (termVariableNode !== null) {
      const termVariableNodeA = termVariableNode; ///

      termVariableNode = termVariable.getNode();

      const termVariableNodeB = termVariableNode, ///
            termVariableNodeAMatchesTermVariableNodeB = termVariableNodeA.match(termVariableNodeB);

      if (termVariableNodeAMatchesTermVariableNodeB) {
        termVariableEqualToTerm = true;
      }
    }

    return termVariableEqualToTerm;
  }

  matchParameter(parameter) { return this.variable.matchParameter(parameter); }

  static fromStatementNode(statementNode, context) {
    let termSubstitution = null;

    const termSubstitutionNode = statementNode.getTermSubstitutionNode();

    if (termSubstitutionNode !== null) {
      const lastTermNode = termSubstitutionNode.getLastTermNode(),
            firstTermNode = termSubstitutionNode.getFirstTermNode(),
            singularVariableNode = lastTermNode.getSingularVariableNode(lastTermNode);

      if (singularVariableNode !== null) {
        const { Term, Variable } = ontology,
              termNode = firstTermNode, ///
              variableNode = singularVariableNode,  ///
              term = Term.fromTermNode(termNode, context),
              variable = Variable.fromVariableNode(variableNode, context),
              node = termSubstitutionNode,  ///
              tokens = context.nodeAsTokens(node),
              string = stringFromTermAndVariable(term, variable);

        termSubstitution = new TermSubstitution(context, string, node, tokens, term, variable);
      }
    }

    return termSubstitution;
  }

  static fromTernAndVariable(term, variable, context) {
    const lexer = context.getLexer(),
          parser = context.getParser(),
          string = stringFromTermAndVariable(term, variable),
          termSubstitutionPartialContext = TermSubstitutionPartialContext.fromStringLexerAndParser(string, lexer, parser),
          node = termSubstitutionPartialContext.getNode(),
          tokens = termSubstitutionPartialContext.getTokens();

    const termSubstitution = new TermSubstitution(context, string, node, tokens, term, variable);

    return termSubstitution;
  }
});

function stringFromTermAndVariable(term, variable) {
  const termString = term.getString(),
        variableString = variable.getString(),
        string = `[${termString} for ${variableString}]`;

  return string;
}
