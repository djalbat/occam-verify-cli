"use strict";

import { elements } from "occam-furtle";

import Substitution from "../substitution";

import { literally } from "../../utilities/context";
import { instantiateFrameSubstitution } from "../../process/instantiate";
import { frameSubstitutionStringFromFrameAndMetavariable } from "../../utilities/string";
import { frameSubstitutionFromStatementNode, frameSubstitutionFromFrameSubstitutionNode } from "../../utilities/element";

const { define } = elements;

export default define(class FrameSubstitution extends Substitution {
  constructor(context, string, node, targetFrame, replacementFrame) {
    super(context, string, node);

    this.targetFrame = targetFrame;
    this.replacementFrame = replacementFrame;
  }

  getTargetFrame() {
    return this.targetFrame;
  }

  getReplacementFrame() {
    return this.replacementFrame;
  }

  getTargetNode() {
    const targetFrameNode = this.targetFrame.getNode(),
          tergetNode = targetFrameNode; ///

    return tergetNode;
  }

  getReplacementNode() {
    const replacementFrameNode = this.replacementFrame.getNode(),
          replacementNode = replacementFrameNode; ///

    return replacementNode;
  }

  isTrivial() {
    const targetFrameEqualToReplacementFrame = this.targetFrame.isEqualTo(this.replacementFrame),
          trivial = targetFrameEqualToReplacementFrame; ///

    return trivial;
  }

  compareFrame(frame, context) {
    const frameEqualToReplacementFrame = this.replacementFrame.isEqualTo(frame),
          comparedToFrame = frameEqualToReplacementFrame; ///

    return comparedToFrame;
  }

  compareParameter(parameter) {
    const targetFrameComparesToParameter = this.targetFrame.compareParameter(parameter),
          comparesToParameter = targetFrameComparesToParameter;  ///

    return comparesToParameter;
  }

  validate(context) {
    let validates = false;

    const frameSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${frameSubstitutionString}' frame substitution...`);

    const targetFrameValidates = this.validateTargetFrame(context);

    if (targetFrameValidates) {
      const replacementFrameValidates = this.validateReplacementFrame(context);

      if (replacementFrameValidates) {
        validates = true;
      }
    }

    if (validates) {
      const substititoin = this;  ///

      context.addSubstitution(substititoin);

      context.debug(`...validated the '${frameSubstitutionString}' frame substitution.`);
    }

    return validates;
  }

  validateTargetFrame(context) {
    let targetFrameValidates = false;

    const targetFrameString = this.targetFrame.getString(),
          frameSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${frameSubstitutionString}' frame subtitution's '${targetFrameString}' target frame...`);

    const targetFrameSingular = this.targetFrame.isSingular();

    if (targetFrameSingular) {
      const stated = true,
            assignments = null;

      targetFrameValidates = this.targetFrame.validate(assignments, stated, context);
    } else {
      context.debug(`The '${frameSubstitutionString}' frame subtitution's '${targetFrameString}' target frame is not singular.`);
    }

    if (targetFrameValidates) {
      context.debug(`...validated the '${frameSubstitutionString}' frame subtitution's '${targetFrameString}' target frame...`);
    }

    return targetFrameValidates;
  }

  validateReplacementFrame(context) {
    let replacementFrameValidates;

    const replacementFrameString = this.replacementFrame.getString(),
          frameSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${frameSubstitutionString}' frame subtitution's '${replacementFrameString}' replacement frame...`);

    const stated = true,
          assignments = null;

    replacementFrameValidates = this.replacementFrame.validate(assignments, stated, context);

    if (replacementFrameValidates) {
      context.debug(`...validated the '${frameSubstitutionString}' frame subtitution's '${replacementFrameString}' replacement frame...`);
    }

    return replacementFrameValidates;
  }

  static name = "FrameSubstitution";

  static fromStatement(statement, context) {
    const statementNode = statement.getNode(),
          frameSubstitution = frameSubstitutionFromStatementNode(statementNode, context);

    return frameSubstitution;
  }

  static fromFrameAndMetavariable(frame, metavariable, context) {
    return literally((context) => {
      const frameSubstitutionString = frameSubstitutionStringFromFrameAndMetavariable(frame, metavariable),
            string = frameSubstitutionString,  ///
            frameSubstitutionNode = instantiateFrameSubstitution(string, context),
            frameSubstitution = frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, context);

      frameSubstitution.validate(context);

      return frameSubstitution;
    }, context);
  }
});
