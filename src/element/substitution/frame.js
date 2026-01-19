"use strict";

import Substitution from "../substitution";

import { define } from "../../elements";
import { literally } from "../../utilities/context";
import { instantiateFrameSubstitution } from "../../process/instantiate";
import { frameSubstitutionStringFromFrameAndMetavariable } from "../../utilities/string";
import { frameSubstitutionFromStatementNode, frameSubstitutionFromFrameSubstitutionNode } from "../../utilities/element";

export default define(class FrameSubstitution extends Substitution {
  constructor(context, string, node, frame, metavariable) {
    super(context, string, node);

    this.frame = frame;
    this.metavariable = metavariable;
  }

  getFrame() {
    return this.frame;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getTargetNode() {
    const metavariableNode = this.metavariable.getNode(),
          targetNode = metavariableNode; ///

    return targetNode;
  }

  getReplacementNode() {
    const frameNode = this.frame.getNode(),
          replacementnode = frameNode; ///

    return replacementnode;
  }

  isFrameEqualToFrame(frame) { return this.frame.isEqualTo(frame); }

  isMetavariableEqualToMetavariable(metavariable) { return this.metavariable.isEqualTo(metavariable); }

  compareParameter(parameter) {
    const metavariableComparesToParameter = this.metavariable.compareParameter(parameter),
          comparesToParameter = metavariableComparesToParameter;  ///

    return comparesToParameter;
  }

  validate(context) {
    let validates = false;

    const frameSubstitutionString = this.getString();  ///

    context.trace(`Verifiying the '${frameSubstitutionString}' frame substitution...`);

    const frameSingular = this.frame.isSingular();

    if (frameSingular) {
      if (this.metavariable !== null) {
        const metavariablePresent = context.isMetavariablePresent(this.metavariable);

        if (metavariablePresent) {
          const frameMetavariable = this.frame.getMetavariable(),
                frameMetavariablePresent = context.isMetavariablePresent(frameMetavariable);

          if (frameMetavariablePresent) {
            validates = true;
          } else {
            context.debug(`The '${frameSubstitutionString}' frame substitution's general frame's metavariable is not present.`);
          }
        } else {
          context.debug(`The '${frameSubstitutionString}' frame substitution's specific frame's metavariable is not present.`);
        }
      } else {
        context.debug(`The '${frameSubstitutionString}' frame substitution's general frame is not singular.`);
      }
    } else {
      context.debug(`The '${frameSubstitutionString}' frame substitution's specific frame is not singular.`);
    }

    if (validates) {
      const substititoin = this;  ///

      context.addSubstitution(substititoin);

      context.debug(`...verified the '${frameSubstitutionString}' frame substitution.`);
    }

    return validates;
  }

  static name = "FrameSubstitution";

  static fromStatement(statement, context) {
    const statementNode = statement.getNode(),
          frameSubstitution = frameSubstitutionFromStatementNode(statementNode, context);

    return frameSubstitution;
  }

  static fromFrameAndMetavariable(frame, metavariable, context) {
    return literally((context) => {
      const frameAndMetavariableString = frameSubstitutionStringFromFrameAndMetavariable(frame, metavariable),
            string = frameAndMetavariableString,  ///
            frameSubstitutionNode = instantiateFrameSubstitution(string, context),
            frameSubstitution = frameSubstitutionFromFrameSubstitutionNode(frameSubstitutionNode, context);

      return frameSubstitution;
    }, context);
  }
});
