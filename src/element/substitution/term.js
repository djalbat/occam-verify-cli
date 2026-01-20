"use strict";

import Substitution from "../substitution";

import { define } from "../../elements";
import { literally } from "../../utilities/context";
import { stripBracketsFromTerm } from "../../utilities/brackets";
import { instantiateTermSubstitution } from "../../process/instantiate";
import { termSubstitutionStringFromTermAndVariable } from "../../utilities/string";
import { termSubstitutionFromStatementNode, termSubstitutionFromTermSubstitutionNode } from "../../utilities/element";

export default define(class TermSubstitution extends Substitution {
  constructor(context, string, node, targetTerm, replacementTerm) {
    super(context, string, node);

    this.targetTerm = targetTerm;
    this.replacementTerm = replacementTerm;
  }

  getTargetTerm() {
    return this.targetTerm;
  }

  getReplacementTerm() {
    return this.replacementTerm;
  }

  getTargetNode() {
    const targetTermNode = this.targetTerm.getNode(),
          tergetNode = targetTermNode; ///

    return tergetNode;
  }

  getReplacementNode() {
    const replacementTermNode = this.replacementTerm.getNode(),
          replacementNode = replacementTermNode; ///

    return replacementNode;
  }

  isTrivial() {
    const targetTermEqualToReplacementTerm = this.targetTerm.isEqualTo(this.replacementTerm),
          trivial = targetTermEqualToReplacementTerm; ///

    return trivial;
  }

  compareTerm(term, context) {
    term = stripBracketsFromTerm(term, context); ///

    const termEqualToReplacementTerm = this.replacementTerm.isEqualTo(term),
          comparedToTerm = termEqualToReplacementTerm; ///

    return comparedToTerm;
  }

  compareParameter(parameter) {
    const targetTermComparesToParameter = this.targetTerm.compareParameter(parameter),
          comparesToParameter = targetTermComparesToParameter;  ///

    return comparesToParameter;
  }

  validate(context) {
    let validates = false;

    const termSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${termSubstitutionString}' term substitution...`);

    const targetTermValidates = this.validateTargetTerm(context);

    if (targetTermValidates) {
      const replacementTermValidates = this.validateReplacementTerm(context);

      if (replacementTermValidates) {
        validates = true;
      }
    }

    if (validates) {
      const substititoin = this;  ///

      context.addSubstitution(substititoin);

      context.debug(`...validated the '${termSubstitutionString}' term substitution.`);
    }

    return validates;
  }

  validateTargetTerm(context) {
    let targetTermValidates = false;

    const targetTermString = this.targetTerm.getString(),
          termSubstitutionString = this.getString();  ///

    context.trace(`Valiidating the '${termSubstitutionString}' term subtitution's '${targetTermString}' target term...`);

    const targetTermSingular = this.targetTerm.isSingular();

    if (targetTermSingular) {
      targetTermValidates = this.targetTerm.validate(context, () => {
        const verifiesAhead = true;

        return verifiesAhead;
      });
    } else {
      context.debug(`The '${termSubstitutionString}' term subtitution's '${targetTermString}' target term is not singular.`);
    }

    if (targetTermValidates) {
      context.debug(`...validated the '${termSubstitutionString}' term subtitution's '${targetTermString}' target term...`);
    }

    return targetTermValidates;
  }

  validateReplacementTerm(context) {
    let replacementTermValidates;

    const replacementTermString = this.replacementTerm.getString(),
          termSubstitutionString = this.getString();  ///

    context.trace(`Valiidating the '${termSubstitutionString}' term subtitution's '${replacementTermString}' replacement term...`);

    replacementTermValidates = this.replacementTerm.validate(context, () => {
      const validatesAhead = true;

      return validatesAhead;
    });

    if (replacementTermValidates) {
      context.debug(`...validated the '${termSubstitutionString}' term subtitution's '${replacementTermString}' replacement term...`);
    }

    return replacementTermValidates;
  }

  static name = "TermSubstitution";

  static fromStatement(statement, context) {
    const statementNode = statement.getNode(),
          termSubstitution = termSubstitutionFromStatementNode(statementNode, context);

    if (termSubstitution !== null) {
      termSubstitution.validate(context);
    }

    return termSubstitution;
  }

  static fromTermAndVariable(term, variable, context) {
    term = stripBracketsFromTerm(term, context); ///

    return literally((context) => {
      const termSubstitutionString = termSubstitutionStringFromTermAndVariable(term, variable),
            string = termSubstitutionString,  ///
            termSubstitutionNode = instantiateTermSubstitution(string, context),
            termSubstitution = termSubstitutionFromTermSubstitutionNode(termSubstitutionNode, context);

      termSubstitution.validate(context);

      return termSubstitution;
    }, context);
  }
});
