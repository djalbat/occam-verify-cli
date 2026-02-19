"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { judgementAssignmentFromJudgement } from "../process/assign";

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

  getJudgementNode() {
    const node = this.getNode(),
          judgementNode = node; ///

    return judgementNode;
  }

  isSingular() {
    const judgementNode = this.getJudgementNode(),
          singular = judgementNode.isSingular();

    return singular;
  }

  getMetavariable() { return this.frame.getMetavariable(); }

  compareMetavariableName(metavariableName) { return this.frame.compareMetavariableName(metavariableName); }

  matchJudgementNode(judgementNode) {
    const judgementNodeA = judgementNode; ///

    judgementNode = this.getJudgementNode();

    const judgementNodeB = judgementNode, ///
          judgementNodeAAMatchesJudgementBNodeB = judgementNodeA.match(judgementNodeB),
          judgementNodeMatches = judgementNodeAAMatchesJudgementBNodeB; ///

    return judgementNodeMatches;
  }

  isValid(context) {
    const judgementNode = this.getJudgementNode(),
          judgementPresent = context.isJudgementPresentByJudgementNode(judgementNode),
          valid = judgementPresent;  ///

    return valid;
  }

  validate(assignments, stated, context) {
    let validates = false;

    const judgementString = this.getString();  ///

    context.trace(`Validating the '${judgementString}' judgement...`);

    const valid = this.isValid(context);

    if (valid) {
      validates = true;

      context.debug(`...the '${judgementString}' judgement is already valid.`);
    } else {
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
        const judgement = this; ///

        context.addJudgement(judgement)

        context.debug(`...validated the '${judgementString}' judgement.`);
      }
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

  assign(assignments, stated, context) {
    if (assignments === null) {
      return;
    }

    if (!stated) {
      return;
    }

    const judgement = this, ///
          judgementAssignment = judgementAssignmentFromJudgement(judgement, context),
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

