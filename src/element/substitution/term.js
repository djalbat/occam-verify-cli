"use strict";

import Substitution from "../substitution";

import { define } from "../../elements";
import { stripBracketsFromTerm } from "../../utilities/brackets";
import { instantiateTermSubstitution } from "../../process/instantiate";
import { termSubstitutionFromTermSubstitutionNode } from "../../utilities/element";
import { termSubstitutionStringFromTermAndVariable } from "../../utilities/string";
import { join, ablate, descend, attempt, instantiate } from "../../utilities/context";

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

  isTrivial() {
    const targetTermEqualToReplacementTerm = this.targetTerm.isEqualTo(this.replacementTerm),
          trivial = targetTermEqualToReplacementTerm; ///

    return trivial;
  }

  matchVariableNode(variableNode) { return this.targetTerm.matchVariableNode(variableNode); }

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

    const context = specificContext,  ///
          termSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${termSubstitutionString}' term substitution...`);

    let validates = false;

    const validSubstitution = this.findValidSubstitution(context);

    if (validSubstitution) {
      termSubstitution = validSubstitution; ///

      context.debug(`...the '${termSubstitutionString}' term substitution is already valid.`);
    } else {
      const context = this.getContext();

      join((context) => {
        attempt((context) => {
          const specificContext = context,  ///
                targetTermValidates = this.validateTargetTerm(generalContext, specificContext);

          if (targetTermValidates) {
            const replacementTermValidates = this.validateReplacementTerm(generalContext, specificContext);

            if (replacementTermValidates) {
              validates = true;
            }
          }

          if (validates) {
            context.commit(this);
          }
        }, context);
      }, specificContext, context);
    }

    if (validates) {
      const substitution = this;  ///

      termSubstitution = substitution;  ///

      context.addSubstitution(substitution);

      context.debug(`...validated the '${termSubstitutionString}' term substitution.`);
    }

    return termSubstitution;
  }

  validateTargetTerm(generalContext, specificContext) {
    let targetTermValidates = false;

    const context = generalContext, ///
          targetTermString = this.targetTerm.getString(),
          termSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${termSubstitutionString}' term substitution's '${targetTermString}' target term...`);

    const targetTermSingular = this.targetTerm.isSingular();

    if (targetTermSingular) {
      descend((context) => {
        const targetTerm = this.targetTerm.validate(context, (targetTerm) => {
          const validatesForwards = true;

          return validatesForwards;
        });

        if (targetTerm !== null) {
          this.targetTerm = targetTerm;

          targetTermValidates = true;
        }
      }, context);
    } else {
      context.debug(`The '${termSubstitutionString}' term substitution's '${targetTermString}' target term is not singular.`);
    }

    if (targetTermValidates) {
      context.debug(`...validated the '${termSubstitutionString}' term substitution's '${targetTermString}' target term...`);
    }

    return targetTermValidates;
  }

  validateReplacementTerm(generalContext, specificContext) {
    let replacementTermValidates = false;

    const context = specificContext,  ///
          replacementTermString = this.replacementTerm.getString(),
          termSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${termSubstitutionString}' term substitution's '${replacementTermString}' replacement term...`);

    descend((context) => {
      const replacementTerm = this.replacementTerm.validate(context, (replacementTerm) => {
        const validatesForwards = true;

        return validatesForwards;
      });

      if (replacementTerm !== null) {
        this.replacementTerm = replacementTerm;

        replacementTermValidates = true;
      }
    }, context);

    if (replacementTermValidates) {
      context.debug(`...validated the '${termSubstitutionString}' term substitution's '${replacementTermString}' replacement term...`);
    }

    return replacementTermValidates;
  }

  static name = "TermSubstitution";

  static fromJSON(json, context) {
    let termSubstitutionn = null;

    const { name } = json;

    if (this.name === name) {
      instantiate((context) => {
        const { string } = json,
              termSubstitutionNode = instantiateTermSubstitution(string, context),
              node = termSubstitutionNode,  ///
              targetTerm = targetTermFromTermSubstitutionNode(termSubstitutionNode, context),
              replacementTerm = replacementTermFromTermSubstitutionNode(termSubstitutionNode, context);

        termSubstitutionn = new TermSubstitution(context, string, node, targetTerm, replacementTerm);
      }, context);
    }

    return termSubstitutionn;
  }

  static fromStatement(statement, context) {
    let termSubstitution = null;

    const termSubstitutionNode = statement.getTermSubstitutionNode();

    if (termSubstitutionNode !== null) {
      ablate((context) => {
        termSubstitution = termSubstitutionFromTermSubstitutionNode(termSubstitutionNode, context);
      }, context);
    }

    return termSubstitution;
  }

  static fromTermAndVariable(term, variable, context) {
    term = stripBracketsFromTerm(term, context); ///

    let termSubstitution;

    ablate((context) => {
      instantiate((context) => {
        const termSubstitutionString = termSubstitutionStringFromTermAndVariable(term, variable),
              string = termSubstitutionString,  ///
              termSubstitutionNode = instantiateTermSubstitution(string, context);

        termSubstitution = termSubstitutionFromTermSubstitutionNode(termSubstitutionNode, context);
      }, context);
    }, context);

    return termSubstitution;
  }
});

function targetTermFromTermSubstitutionNode(termSubstitutionNode, context) {
  const targetTermNode = termSubstitutionNode.getTargetTermNode(),
        targetTerm = context.findTermByTermNode(targetTermNode);

  return targetTerm;
}

function replacementTermFromTermSubstitutionNode(termSubstitutionNode, context) {
  const replacementTermNode = termSubstitutionNode.getReplacementTermNode(),
        replacementTerm = context.findTermByTermNode(replacementTermNode);

  return replacementTerm;
}
