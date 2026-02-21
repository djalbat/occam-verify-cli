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

  getTermSubstitutionNode() {
    const node = this.getNode(),
          termSubstitutionNode = node;  ///

    return termSubstitutionNode;
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

  getVariableIdentifier() { return this.targetTerm.getVariableIdentifier(); }

  compareVariableIdentifier(variableIdentifier) { return this.targetTerm.compareVariableIdentifier(variableIdentifier); }

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

  validate(generalContext, specificContext) {
    let termSubstitution = null;

    const context = this.getContext();

    specificContext = context;  ///

    const termSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${termSubstitutionString}' term substitution...`);

    const validSubstitution = this.findValidSubstiution(context);

    if (validSubstitution) {
      termSubstitution = validSubstitution; ///

      context.debug(`...the '${termSubstitutionString}' term substitution is alrady valid.`);
    } else {
      let validates = false;

      const targetTermValidates = this.validateTargetTerm(generalContext, specificContext);

      if (targetTermValidates) {
        const replacementTermValidates = this.validateReplacementTerm(generalContext, specificContext);

        if (replacementTermValidates) {
          validates = true;
        }
      }

      if (validates) {
        const substitution = this;  ///

        termSubstitution = substitution;  ///

        context.addSubstitution(substitution);

        context.debug(`...validated the '${termSubstitutionString}' term substitution.`);
      }
    }

    return termSubstitution;
  }

  validateTargetTerm(generalContext, specificContext) {
    let targetTermValidates = false;

    const context = generalContext, ///
          targetTermString = this.targetTerm.getString(),
          termSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${termSubstitutionString}' term subtitution's '${targetTermString}' target term...`);

    const targetTermSingular = this.targetTerm.isSingular();

    if (targetTermSingular) {
      const targetTerm = this.targetTerm.validate(context, () => {
        const validatesForwards = true;

        return validatesForwards;
      });

      if (targetTerm !== null) {
        this.targetTerm = targetTerm;

        targetTermValidates = true;
      }
    } else {
      context.debug(`The '${termSubstitutionString}' term subtitution's '${targetTermString}' target term is not singular.`);
    }

    if (targetTermValidates) {
      context.debug(`...validated the '${termSubstitutionString}' term subtitution's '${targetTermString}' target term...`);
    }

    return targetTermValidates;
  }

  validateReplacementTerm(generalContext, specificContext) {
    let replacementTermValidates = false;

    const context = specificContext,  ///
          replacementTermString = this.replacementTerm.getString(),
          termSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${termSubstitutionString}' term subtitution's '${replacementTermString}' replacement term...`);

    const replacementTerm = this.replacementTerm.validate(context, () => {
      const validatesForwards = true;

      return validatesForwards;
    });

    if (replacementTerm !== null) {
      this.replacementTerm = replacementTerm;

      replacementTermValidates = true;
    }

    if (replacementTermValidates) {
      context.debug(`...validated the '${termSubstitutionString}' term subtitution's '${replacementTermString}' replacement term...`);
    }

    return replacementTermValidates;
  }

  static name = "TermSubstitution";

  static fromStatement(statement, context) {
    const statementNode = statement.getNode(),
          termSubstitution = termSubstitutionFromStatementNode(statementNode, context);

    return termSubstitution;
  }

  static fromTermAndVariable(term, variable, context) {
    term = stripBracketsFromTerm(term, context); ///

    return literally((context) => {
      const termSubstitutionString = termSubstitutionStringFromTermAndVariable(term, variable),
            string = termSubstitutionString,  ///
            termSubstitutionNode = instantiateTermSubstitution(string, context),
            termSubstitution = termSubstitutionFromTermSubstitutionNode(termSubstitutionNode, context);

      return termSubstitution;
    }, context);
  }
});
