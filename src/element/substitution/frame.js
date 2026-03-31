"use strict";

import Substitution from "../substitution";

import { define } from "../../elements";
import { instantiateFrameSubstitution } from "../../process/instantiate";
import { frameSubstitutionFromFrameSubstitutionNode } from "../../utilities/element";
import { frameSubstitutionStringFromFrameAndMetavariable } from "../../utilities/string";
import { join, ablate, descend, attempt, serialise, unserialise, instantiate } from "../../utilities/context";

export default define(class FrameSubstitution extends Substitution {
  constructor(context, string, node, lineIndex, generalContext, targetFrame, replacementFrame) {
    super(context, string, node, lineIndex, generalContext);

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

  getMetavariableNode() { return this.targetFrame.getMetavariableNode(); }

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

  matchMetavariableNode(metavariableNode) { return this.targetFrame.matchMetavariableNode(metavariableNode); }

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

    let validates = false;

    const validSubstitution = this.findValidSubstitution(context);

    if (validSubstitution) {
      frameSubstitution = validSubstitution;  ///

      context.debug(`...the '${frameSubstitutionString}' frame substitution is already valid.`);
    } else {
      const context = this.getContext();

      join((context) => {
        attempt((context) => {
          const specificContext = context,  ///,
                targetFrameValidates = this.validateTargetFrame(generalContext, specificContext);

          if (targetFrameValidates) {
            const replacementFrameValidates = this.validateReplacementFrame(generalContext, specificContext);

            if (replacementFrameValidates) {
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

      frameSubstitution = substitution; ///

      context.addSubstitution(substitution);

      this.setGeneralContext(generalContext);

      context.debug(`...validated the '${frameSubstitutionString}' frame substitution.`);
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
        const tragetFrame = this.targetFrame.validate(context);

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

    const context = specificContext,  ///
          replacementFrameString = this.replacementFrame.getString(),
          frameSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${frameSubstitutionString}' frame substitution's '${replacementFrameString}' replacement frame...`);

    descend((context) => {
      const replacementFrame = this.replacementFrame.validate(context);

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

  toJSON() {
    const context = this.getContext();

    return serialise((context) => {
      const { name } = this.constructor,
            string = this.getString(),
            lineIndex = this.getLineIndex(),
            json = {
              name,
              context,
              string,
              lineIndex
            };

      return json;
    }, context);
  }

  static fromJSON(json, context) {
    let frameSubstitutionn = null;

    const { name } = json;

    if (this.name === name) {
      unserialise((json, context) => {
        instantiate((context) => {
          const { string, lineIndex } = json,
                frameSubstitutionNode = instantiateFrameSubstitution(string, context),
                node = frameSubstitutionNode, ///
                generalContext = generalContextFromFrameSubstitutionNode(frameSubstitutionNode, context),
                targetFrame = targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context),
                replacementFrame = replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context);

          frameSubstitutionn = new FrameSubstitution(context, string, node, lineIndex, generalContext, targetFrame, replacementFrame);
        }, context);
      }, json, context);
    }

    return frameSubstitutionn;
  }

  static fromStatement(statement, context) {
    let frameSubstitution = null;

    const frameSubstitutionNode = statement.getFrameSubstitutionNode();

    if (frameSubstitutionNode !== null) {
      ablate((context) => {
        frameSubstitution = frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, context);
      }, context);
    }

    return frameSubstitution;
  }

  static fromFrameAndMetavariable(frame, metavariable, context) {
    let frameSubstitution

    ablate((context) => {
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

function generalContextFromFrameSubstitutionNode(frameSubstitutionNode, context) {
  const generalContext = context; ///

  return generalContext;
}

