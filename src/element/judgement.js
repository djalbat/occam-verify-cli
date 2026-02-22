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

  findValidJudgement(context) {
    const judgementNode = this.getJudgementNode(),
          judgement = context.findJudgementByJudgementNode(judgementNode),
          validJudgemenet = judgement;  ///

    return validJudgemenet;
  }

  validate(stated, context) {
    let judgement = null;

    const judgementString = this.getString();  ///

    context.trace(`Validating the '${judgementString}' judgement...`);

    const validJudgement = this.findValidJudgement(context);

    if (validJudgement !== null) {
      judgement = validJudgement; ///

      context.debug(`...the '${judgementString}' judgement is already valid.`);
    } else {
      let validates = false;

      const frameValidates = this.validateFrame(stated, context);

      if (frameValidates) {
        const assumptionValidates = this.validateAssumption(stated, context);

        if (assumptionValidates) {
          let validatesWhenStated = false,
              validatesWhenDerived = false;

          if (stated) {
            validatesWhenStated = this.validateWhenStated(context);
          } else {
            validatesWhenDerived = this.validateWhenDerived(context);
          }

          if (validatesWhenStated || validatesWhenDerived) {
            validates = true;
          }
        }
      }

      if (validates) {
        judgement = this; ///

        context.addJudgement(judgement)

        context.debug(`...validated the '${judgementString}' judgement.`);
      }
    }

    return judgement;
  }

  validateFrame(stated, context) {
    let frameValidates = false;

    const frameString = this.frame.getString(),
          judgementString = this.getString(); ///

    context.trace(`Validating the '${judgementString}' judgement's '${frameString}' frame...`);

    const frame = this.frame.validate(stated, context);

    if (frame !== null) {
      this.frame = frame;

      frameValidates = true;
    }

    if (frameValidates) {
      context.trace(`...validated the '${judgementString}' judgement's '${frameString}' frame.`);
    }

    return frameValidates;
  }

  validateAssumption(stated, context) {
    let assumptionValidates = false;

    const assumptionString = this.assumption.getString(),
          judgementString = this.getString(); ///

    context.trace(`Validating the '${judgementString}' judgement's '${assumptionString}' assumption...`);

    const assumption = this.assumption.validate(stated, context);

    if (assumption !== null) {
      this.assumption = assumption;

      assumptionValidates = true;
    }

    if (assumptionValidates) {
      context.debug(`...validated the '${judgementString}' judgement's '${assumptionString}' assumption.`);
    }

    return assumptionValidates;
  }

  validateWhenStated(context) {
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

  assign(stated, context) {
    if (!stated) {
      return;
    }

    const judgement = this, ///
          judgementAssignment = judgementAssignmentFromJudgement(judgement, context),
          assignment = judgementAssignment; ///

    context.addAssignment(assignment);
  }

  static name = "Judgement";
});

function referenceFromMetavariable(metavariable, context) {
  const { Reference } = elements,
        metavariableNode = metavariable.getNode(),
        reference = Reference.fromMetavariableNode(metavariableNode, context);

  return reference;
}

