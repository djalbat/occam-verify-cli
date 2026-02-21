"use strict";

import Substitution from "../substitution";

import { define } from "../../elements";
import { literally } from "../../utilities/context";
import { instantiateFrameSubstitution } from "../../process/instantiate";
import { frameSubstitutionStringFromFrameAndMetavariable } from "../../utilities/string";
import { frameSubstitutionFromStatementNode, frameSubstitutionFromFrameSubstitutionNode } from "../../utilities/element";

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

  getFrameSubstitutionNode() {
    const node = this.getNode(),
          frameSubstitutionNode = node; ///

    return frameSubstitutionNode;
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

  compareMetavariableName(metavariableName) { return this.targetFrame.compareMetavariableName(metavariableName); }

  getMetavariableName() { return this.targetFrame.getMetavariableName(); }

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

  validate(generalContext, specificContext) {
    let frameSubstitution = null;

    const context = this.getContext();

    specificContext = context;  ///

    const frameSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${frameSubstitutionString}' frame substitution...`);

    const validSubstitution = this.findValidSubstiution(context);

    if (validSubstitution) {
      frameSubstitution = validSubstitution;  ///

      context.debug(`...the '${frameSubstitutionString}' frame substitution is already valid.`);
    } else {
      let validates = false;

      const targetFrameValidates = this.validateTargetFrame(generalContext, specificContext);

      if (targetFrameValidates) {
        const replacementFrameValidates = this.validateReplacementFrame(generalContext, specificContext);

        if (replacementFrameValidates) {
          validates = true;
        }
      }

      if (validates) {
        const substitution = this;  ///

        frameSubstitution = substitution; ///

        context.addSubstitution(substitution);

        context.debug(`...validated the '${frameSubstitutionString}' frame substitution.`);
      }
    }

    return frameSubstitution;
  }

  validateTargetFrame(generalContext, specificContext) {
    let targetFrameValidates = false;

    const context = generalContext,  ///
          targetFrameString = this.targetFrame.getString(),
          frameSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${frameSubstitutionString}' frame subtitution's '${targetFrameString}' target frame...`);

    const targetFrameSingular = this.targetFrame.isSingular();

    if (targetFrameSingular) {
      const stated = true,
            tragetFrame = this.targetFrame.validate(stated, context);

      if (tragetFrame !== null) {
        this.targetFrame = tragetFrame;

        targetFrameValidates = true;
      }
    } else {
      context.debug(`The '${frameSubstitutionString}' frame subtitution's '${targetFrameString}' target frame is not singular.`);
    }

    if (targetFrameValidates) {
      context.debug(`...validated the '${frameSubstitutionString}' frame subtitution's '${targetFrameString}' target frame...`);
    }

    return targetFrameValidates;
  }

  validateReplacementFrame(generalContext, specificContext) {
    let replacementFrameValidates;

    const context = specificContext, ///
          replacementFrameString = this.replacementFrame.getString(),
          frameSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${frameSubstitutionString}' frame subtitution's '${replacementFrameString}' replacement frame...`);

    const stated = true,
          replacementFrame = this.replacementFrame.validate(stated, context);

    if (replacementFrame !== null) {
      this.replacementFrame = replacementFrame;

      replacementFrameValidates = true;
    }

    if (replacementFrameValidates) {
      context.debug(`...validated the '${frameSubstitutionString}' frame subtitution's '${replacementFrameString}' replacement frame.`);
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

      return frameSubstitution;
    }, context);
  }
});
