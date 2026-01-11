"use strict";

import Substitution from "../substitution";

import { define } from "../../elements";
import { stripBracketsFromTerm } from "../../utilities/brackets";
import { instantiateTermSubstitution } from "../../process/instantiate";
import { termSubstitutionFromStatementNode, termSubstitutionFromTermSubstitutionNode } from "../../utilities/element";

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

  isTermEqualToTerm(term, context) {
    term = stripBracketsFromTerm(term, context); ///

    const termEqualToTerm = this.term.isEqualTo(term);

    return termEqualToTerm;
  }

  isTrivial() {
    let trivial = false;

    const termComparesToVaraible = this.term.compareVariable(this.variable);

    if (termComparesToVaraible) {
      trivial = true;
    }

    return trivial;
  }

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
    const statementNode = statement.getNode(),
          termSubstitution = termSubstitutionFromStatementNode(statementNode, context);

    return termSubstitution;
  }

  static fromTermAndMetavariable(term, metavariable, context) {
    const string = stringFromTermAndVariable(term, metavariable),
          termSubstitutionNode = instantiateTermSubstitution(string, context),
          termSubstitution = termSubstitutionFromTermSubstitutionNode(termSubstitutionNode, context);

    return termSubstitution;
  }
});

function stringFromTermAndVariable(term, variable) {
  const termString = term.getString(),
        variableString = variable.getString(),
        string = `[${termString} for ${variableString}]`;

  return string;
}
