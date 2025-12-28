"use strict";

import ontology from "../../ontology";
import Substitution from "../substitution";

import { define } from "../../ontology";
import { stripBracketsFromTerm } from "../../utilities/brackets";
import { instantiateTermSubstitution } from "../../process/instantiate";

export default define(class TermSubstitution extends Substitution {
  constructor(context, string, node, term, variable) {
    super(context, string, node);

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
    let trivial = false;

    const termEqualToVariable = this.term.isEqualToVariable(this.variable);

    if (termEqualToVariable) {
      trivial = true;
    }

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

    context.trace(`Verifiying the '${termSubstitutionString}' term substitution...`);

    const termSingular = this.term.isSingular();

    if (termSingular) {
      if (this.variable !== null) {
        const variableIdentifier = this.variable.getIdentifier(),
              variablePresent = context.isVariablePresentByVariableIdentifier(variableIdentifier);

        if (variablePresent) {
          const termNode = this.term.getNode(),
                variableIdentifier = termNode.getVariableIdentifier(),
                termVariableIdentifier = variableIdentifier,  ///
                termVariablePresent = context.isVariablePresentByVariableIdentifier(termVariableIdentifier);

          if (termVariablePresent) {
            verifies = true;
          } else {
            context.debug(`The '${termSubstitutionString}' term substitution's general term's variable is not present.`);
          }
        } else {
          context.debug(`The '${termSubstitutionString}' term substitution's specific term's variable is not present.`);
        }
      } else {
        context.debug(`The '${termSubstitutionString}' term substitution's general term is not singular.`);
      }
    } else {
      context.debug(`The '${termSubstitutionString}' term substitution's specific term is not singular.`);
    }

    if (verifies) {
      const substititoin = this;  ///

      context.addSubstitution(substititoin);

      context.debug(`...verified the '${termSubstitutionString}' term substitution.`);
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
            string = stringFromTermAndVariable(term, variable);

      termSubstitution = new TermSubstitution(context, string, node, term, variable);
    }

    return termSubstitution;
  }

  static fromTernAndVariable(term, variable, context) {
    const string = stringFromTermAndVariable(term, variable),
          termSubstitutionNode = instantiateTermSubstitution(string, context),
          node = termSubstitutionNode,  ///
          termSubstitution = new TermSubstitution(context, string, node, term, variable);

    return termSubstitution;
  }
});

function stringFromTermAndVariable(term, variable) {
  const termString = term.getString(),
        variableString = variable.getString(),
        string = `[${termString} for ${variableString}]`;

  return string;
}
