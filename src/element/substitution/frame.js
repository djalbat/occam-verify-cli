"use strict";

import Substitution from "../substitution";

import { define } from "../../elements";
import { instantiateFrameSubstitution } from "../../process/instantiate";
import { descend, simplify, instantiate } from "../../utilities/context";
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

    const context = specificContext,  ///
          frameSubstitutionString = this.getString();  ///

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

    context.trace(`Validating the '${frameSubstitutionString}' frame substitution's '${targetFrameString}' target frame...`);

    const targetFrameSingular = this.targetFrame.isSingular();

    if (targetFrameSingular) {
      descend((context) => {
        const stated = true,  ///
              tragetFrame = this.targetFrame.validate(stated, context);

        if (tragetFrame !== null) {
          this.targetFrame = tragetFrame;

          targetFrameValidates = true;
        }
      }, context);
    } else {
      context.debug(`The '${frameSubstitutionString}' frame substitution's '${targetFrameString}' target frame is not singular.`);
    }

    if (targetFrameValidates) {
      context.debug(`...validated the '${frameSubstitutionString}' frame substitution's '${targetFrameString}' target frame...`);
    }

    return targetFrameValidates;
  }

  validateReplacementFrame(generalContext, specificContext) {
    let replacementFrameValidates = false;

    const context = this.getContext(),
          replacementFrameString = this.replacementFrame.getString(),
          frameSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${frameSubstitutionString}' frame substitution's '${replacementFrameString}' replacement frame...`);

    descend((context) => {
      const stated = true,  ///
            replacementFrame = this.replacementFrame.validate(stated, context);

      if (replacementFrame !== null) {
        this.replacementFrame = replacementFrame;

        replacementFrameValidates = true;
      }
    }, context);

    if (replacementFrameValidates) {
      context.debug(`...validated the '${frameSubstitutionString}' frame substitution's '${replacementFrameString}' replacement frame.`);
    }

    return replacementFrameValidates;
  }

  static name = "FrameSubstitution";

  static fromJSON(json, context) {
    let frameSubstitutionn = null;

    const { name } = json;

    if (this.name === name) {
      instantiate((context) => {
        const { string } = json,
              frameSubstitutionNode = instantiateFrameSubstitution(string, context),
              node = frameSubstitutionNode,  ///
              targetFrame = targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context),
              replacementFrame = replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context);

        context = null;

        frameSubstitutionn = new FrameSubstitution(context, string, node, targetFrame, replacementFrame);
      }, context);
    }

    return frameSubstitutionn;
  }

  static fromStatement(statement, context) {
    const statementNode = statement.getNode(),
          frameSubstitution = frameSubstitutionFromStatementNode(statementNode, context);

    return frameSubstitution;
  }

  static fromFrameAndMetavariable(frame, metavariable, context) {
    let frameSubstitution

    simplify((context) => {
      instantiate((context) => {
        const frameSubstitutionString = frameSubstitutionStringFromFrameAndMetavariable(frame, metavariable),
              string = frameSubstitutionString,  ///
              frameSubstitutionNode = instantiateFrameSubstitution(string, context);

        frameSubstitution = frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, context);
      }, context);
    }, context);

    return frameSubstitution;
  }
});

function targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context) {
  const targetFrameNode = frameSubstitutionNode.getTargetFrameNode(),
        targetFrame = context.findFrameByFrameNode(targetFrameNode);

  return targetFrame;
}

function replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context) {
  const replacementFrameNode = frameSubstitutionNode.getReplacementFrameNode(),
        replacementFrame = context.findFrameByFrameNode(replacementFrameNode);

  return replacementFrame;
}
