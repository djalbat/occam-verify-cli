"use strict";

import { Element, elements } from "occam-furtle";

import { judgementAssignmentFromJudgement } from "../process/assign";

const { define } = elements;

export default define(class Judgement extends Element {
  constructor(context, string, node, frame, assumption) {
    super(context, string, node);

    this.frame = frame;
    this.assumption = assumption;
  }

  getFrame() {
    return this.frame;
  }

  getDeclaration() {
    return this.assumption;
  }

  isSingular() {
    const node = this.getNode(),
          singular = node.isSingular();

    return singular;
  }

  getMetavariable() { return this.frame.getMetavariable(); }

  validate(assignments, stated, context) {
    let validates = false;

    const judgementString = this.getString();  ///

    context.trace(`Validating the '${judgementString}' judgement...`);

    const frameValidates = this.frame.validate(assignments, stated, context);

    if (frameValidates) {
      const assumptionValidates = this.assumption.validate(assignments, stated, context);

      if (assumptionValidates) {
        let validatesWhenStated = false,
            validatesWhenDerived = false;

        if (stated) {
          validatesWhenStated = this.validateWhenStated(assignments, context);
        } else {
          validatesWhenDerived = this.validateWhenDerived(context);
        }

        if (validatesWhenStated || validatesWhenDerived) {
          validates = true;
        }
      }
    }

    if (validates) {
      if (stated) {
        this.assign(assignments, context);
      }
    }

    if (validates) {
      context.debug(`...validated the '${judgementString}' judgement.`);
    }

    return validates;
  }

  validateWhenStated(assignments, context) {
    let validatesWhenStated;

    const judgementString = this.getString();  ///

    context.trace(`Validating the '${judgementString}' stated judgement...`);

    validatesWhenStated = true;

    if (validatesWhenStated) {
      context.debug(`...validated the '${judgementString}' stated judgement.`);
    }

    return validatesWhenStated;
  }

  validateWhenDerived(context) {
    let validatesWhenDerived = false;

    const judgementString = this.getString();  ///

    context.trace(`Validating the '${judgementString}' derived judgement...`);

    const metavariable = this.assumption.getMetavariable(),
          reference = referenceFromMetavariable(metavariable, context),
          topLevelMetaAssertion = context.findTopLevelMetaAssertionByReference(reference),
          substitutions = topLevelMetaAssertion.getSubstitutions(),
          frameComparesToSubstitutions = this.frame.compareSubstitutions(substitutions, context);

    if (frameComparesToSubstitutions) {
      validatesWhenDerived = true;
    }

    if (validatesWhenDerived) {
      context.debug(`...validated the '${judgementString}' derived judgement.`);
    }

    return validatesWhenDerived;
  }

  assign(assignments, context) {
    if (assignments === null) {
      return;
    }

    const judgement = this, ///
          judgementAssignment = judgementAssignmentFromJudgement(judgement),
          assignment = judgementAssignment; ///

    assignments.push(assignment);
  }

  static name = "Judgement";
});

function referenceFromMetavariable(metavariable, context) {
  const { Reference } = elements,
        metavariableNode = metavariable.getNode(),
        reference = Reference.fromMetavariableNode(metavariableNode, context);

  return reference;
}

