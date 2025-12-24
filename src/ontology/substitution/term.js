"use strict";

import ontology from "../../ontology";
import Substitution from "../substitution";
import TermSubstitutionPartialContext from "../../context/partial/substitution/term";

import { define } from "../../ontology";
import { stripBracketsFromTerm } from "../../utilities/brackets";
import { termVariableIdentifierFromTermNode } from "../../utilities/variable";


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

  matchParameter(parameter) { return this.variable.matchParameter(parameter); }

  verify(context) {
    let verifies = false;

    const termSubstitutionString = this.string;  ///

    context.trace(`Verifiying the '${termSubstitutionString}' term substitutin...`);

    const termSimple = this.term.isSimple();

    if (termSimple) {
      if (this.variable === null) {
        context.debug(`The specific term is not simple.`);
      } else {
        const variableIdentifier = this.variable.getIdentifier(),
              variablePresent = context.isVariablePresentByVariableIdentifier(variableIdentifier);

        if (variablePresent) {
          const termNode = this.term.getNode(),
                termVariableIdentifier = termVariableIdentifierFromTermNode(termNode),
                termVariablePresent = context.isVariablePresentByVariableIdentifier(termVariableIdentifier);

          if (termVariablePresent) {
            verifies = true;
          } else {
            const variableString = variable.getString();

            context.debug(`The '${variableString}' variable is not present.`);
          }
        } else {
          const variableString = this.variable.getString();

          context.debug(`The '${variableString}' variable is not present.`);
        }
      }
    } else {
      context.debug(`The general term is not simple.`);
    }

    if (verifies) {
      const substititoin = this;  ///

      context.addSubstitution(substititoin);

      context.debug(`...verified the '${termSubstitutionString}' term substitutin.`);
    }

    return verifies;
  }

  static name = "TermSubstitution";

  static fromStatement(statement, context) {
    let termSubstitution = null;

    const statementNode = statement.getNode(),
          termSubstitutionNode = statementNode.getTermSubstitutionNode();

    if (termSubstitutionNode !== null) {
      const { Term, Variable } = ontology,
            firstTermNode = termSubstitutionNode.getFirstTermNode(),
            lastVariableNode = termSubstitutionNode.getLastVariableNode(),
            termNode = firstTermNode, ///
            variableNode = lastVariableNode,  ///
            term = Term.fromTermNode(termNode, context),
            variable = Variable.fromVariableNode(variableNode, context),
            node = termSubstitutionNode,  ///
            tokens = context.nodeAsTokens(node),
            string = stringFromTermAndVariable(term, variable);

      termSubstitution = new TermSubstitution(context, string, node, tokens, term, variable);
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
