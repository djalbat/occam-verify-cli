"use strict";

import Substitution from "../substitution";

import { define } from "../../elements";
import { instantiateFrameSubstitution } from "../../process/instantiate";
import { frameSubstitutionFromFrameSubstitutionNode } from "../../utilities/element";
import { frameSubstitutionStringFromFrameAndMetavariable } from "../../utilities/string";
import { ablate, descend, attempt, instantiate, unserialises } from "../../utilities/context";

export default define(class FrameSubstitution extends Substitution {
  constructor(contexts, string, node, lineIndex, targetFrame, replacementFrame) {
    super(contexts, string, node, lineIndex);

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

  validate(context) {
    let frameSubstitution = null;

    const frameSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${frameSubstitutionString}' frame substitution...`);

    let validates = false;

    const validSubstitution = this.findValidSubstitution(context);

    if (validSubstitution) {
      frameSubstitution = validSubstitution;  ///

      context.debug(`...the '${frameSubstitutionString}' frame substitution is already valid.`);
    } else {
      const generalContext = this.getGeneralContext(),
            specificContext = this.getSpecificContext();

      attempt((specificContext) => {
        const targetFrameValidates = this.validateTargetFrame(generalContext, specificContext);

        if (targetFrameValidates) {
          const replacementFrameValidates = this.validateReplacementFrame(generalContext, specificContext);

          if (replacementFrameValidates) {
            validates = true;
          }
        }

        if (validates) {
          specificContext.commit(this);
        }
      }, specificContext);
    }

    if (validates) {
      const substitution = this;  ///

      frameSubstitution = substitution; ///

      context.addSubstitution(substitution);

      context.debug(`...validated the '${frameSubstitutionString}' frame substitution.`);
    }

    return frameSubstitution;
  }

  validateTargetFrame(generalContext, specificContext) {
    let targetFrameValidates = false;

    const context = generalContext,  ///
          frameSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${frameSubstitutionString}' frame substitution's target frame...`);

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
      const targetFrameString = this.targetFrame.getString();

      context.debug(`The '${targetFrameString}' target frame is not singular.`);
    }

    if (targetFrameValidates) {
      context.debug(`...validated the frame substitution's target frame...`);
    }

    return targetFrameValidates;
  }

  validateReplacementFrame(generalContext, specificContext) {
    let replacementFrameValidates = false;

    const context = specificContext,  ///
          frameSubstitutionString = this.getString();  ///

    context.trace(`Validating the '${frameSubstitutionString}' frame substitution's replacement frame...`);

    descend((context) => {
      const replacementFrame = this.replacementFrame.validate(context);

      if (replacementFrame !== null) {
        this.replacementFrame = replacementFrame;

        replacementFrameValidates = true;
      }
    }, context);

    if (replacementFrameValidates) {
      context.debug(`...validated the '${frameSubstitutionString}' frame substitution's replacement frame.`);
    }

    return replacementFrameValidates;
  }

  static name = "FrameSubstitution";

  static fromJSON(json, context) {
    let frameSubstitutionn = null;

    const { name } = json;

    if (this.name === name) {
      unserialises((json, generalContext, specificContext) => {
        const context = specificContext;  ///

        instantiate((context) => {
          const { string, lineIndex } = json,
                specificContext = context,  ///
                contexts = [
                  generalContext,
                  specificContext
                ],
                frameSubstitutionNode = instantiateFrameSubstitution(string, context),
                node = frameSubstitutionNode, ///
                targetFrame = targetFrameFromFrameSubstitutionNode(frameSubstitutionNode, context),
                replacementFrame = replacementFrameFromFrameSubstitutionNode(frameSubstitutionNode, context);

          frameSubstitutionn = new FrameSubstitution(contexts, string, node, lineIndex, targetFrame, replacementFrame);
        }, context);
      }, json, context);
    }

    return frameSubstitutionn;
  }

  static fromStatement(statement, generalContext, specificContext) {
    let frameSubstitution = null;

    const context = specificContext,  ///
          frameSubstitutionNode = statement.getFrameSubstitutionNode();

    if (frameSubstitutionNode !== null) {
      ablate((context) => {
        const specificContext = context;  ///

        frameSubstitution = frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, generalContext, specificContext);
      }, context);
    }

    return frameSubstitution;
  }

  static fromFrameAndMetavariable(frame, metavariable, generalContext, specificContext) {
    let frameSubstitution

    const context = specificContext;  ///

    ablate((context) => {
      instantiate((context) => {
        const specificContext = context,  ///
              frameSubstitutionString = frameSubstitutionStringFromFrameAndMetavariable(frame, metavariable),
              string = frameSubstitutionString,  ///
              frameSubstitutionNode = instantiateFrameSubstitution(string, context);

        frameSubstitution = frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, generalContext, specificContext);
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
