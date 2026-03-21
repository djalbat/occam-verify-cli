"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiateJudgement } from "../process/instantiate";
import { reconcile, instantiate } from "../utilities/context";
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

  matchJudgementNode(judgementNode) {
    const node = judgementNode, ///
          nodeMatches = this.matchNode(node),
          judgementNodeMatches = nodeMatches; ///

    return judgementNodeMatches;
  }

  compareMetavariableName(metavariableName) { return this.frame.compareMetavariableName(metavariableName); }

  findValidJudgement(context) {
    const judgementNode = this.getJudgementNode(),
          judgement = context.findJudgementByJudgementNode(judgementNode),
          validJudgemenet = judgement;  ///

    return validJudgemenet;
  }

  validate(context) {
    let judgement = null;

    const judgementString = this.getString();  ///

    context.trace(`Validating the '${judgementString}' judgement...`);

    const validJudgement = this.findValidJudgement(context);

    if (validJudgement !== null) {
      judgement = validJudgement; ///

      context.debug(`...the '${judgementString}' judgement is already valid.`);
    } else {
      let validates = false;

      reconcile((context) => {
        const frameValidates = this.validateFrame(context);

        if (frameValidates) {
          const assumptionValidates = this.validateAssumption(context);

          if (assumptionValidates) {
            const stated = context.isStated();

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
      }, context);

      if (validates) {
        judgement = this; ///

        this.assign(context);

        context.addJudgement(judgement);

        context.debug(`...validated the '${judgementString}' judgement.`);
      }
    }

    return judgement;
  }

  validateFrame(context) {
    let frameValidates = false;

    const frameString = this.frame.getString(),
          judgementString = this.getString(); ///

    context.trace(`Validating the '${judgementString}' judgement's '${frameString}' frame...`);

    const frame = this.frame.validate(context);

    if (frame !== null) {
      this.frame = frame;

      frameValidates = true;
    }

    if (frameValidates) {
      context.trace(`...validated the '${judgementString}' judgement's '${frameString}' frame.`);
    }

    return frameValidates;
  }

  validateAssumption(context) {
    let assumptionValidates = false;

    const assumptionString = this.assumption.getString(),
          judgementString = this.getString(); ///

    context.trace(`Validating the '${judgementString}' judgement's '${assumptionString}' assumption...`);

    const assumption = this.assumption.validate(context);

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

    const topLevelMetaAssertion = this.assumption.getTopLevelMetaAssertion(),
          metaLevelSubstitutions = topLevelMetaAssertion.getMetaLevelSubstitutions(),
          frameComparesToSubstitutions = this.frame.compareMetaLevelSubstitutions(metaLevelSubstitutions, context);

    if (frameComparesToSubstitutions) {
      validatesWhenDerived = true;
    }

    if (validatesWhenDerived) {
      context.debug(`...validated the '${judgementString}' derived judgement.`);
    }

    return validatesWhenDerived;
  }

  assign(context) {
    const stated = context.isStated();

    if (!stated) {
      return;
    }

    const judgement = this, ///
          judgementAssignment = judgementAssignmentFromJudgement(judgement, context);

    context.addAssignment(judgementAssignment);
  }

  toJSON() {
    const string = this.getString(),
          json = {
            string
          };

    return json;
  }

  static name = "Judgement";

  static fromJSON(json, context) {
    return instantiate((context) => {
      const { string } = json,
            judgementNode = instantiateJudgement(string, context),
            node = judgementNode,  ///
            frame = frameFromJudgementNode(judgementNode, context),
            assumption = assumptionFromJudgementNode(judgementNode, context);

      context = null;

      const judgement = new Judgement(context, string, node, frame, assumption);

      return judgement;
    }, context);
  }
});

function frameFromJudgementNode(judgementNode, context) {
  const frameNode = judgementNode.getFrameNode(),
        frame = context.findFrameByFrameNode(frameNode);

  return frame;
}

function assumptionFromJudgementNode(judgementNode, context) {
  const assumptionNode = judgementNode.getAssumptionNode(),
        assumption = context.findAssumptionByAssumptionNode(assumptionNode);

  return assumption;
}
