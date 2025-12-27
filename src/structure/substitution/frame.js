"use strict";

import structure from "../../structure";
import Substitution from "../substitution";
import FrameSubstitutionPartialContext from "../../context/partial/substitution/frame";

import { define } from "../../structure";

export default define(class FrameSubstitution extends Substitution {
  constructor(context, string, node, tokens, frame, metavariable) {
    super(context, string, node, tokens);

    this.frame = frame;
    this.metavariable = metavariable;
  }

  getFrame() {
    return this.frame;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getReplacementNode() {
    const frameNode = this.frame.getNode(),
          replacementNode = frameNode; ///

    return replacementNode;
  }

  isFrameEqualToFrame(frame) { return this.frame.isEqualTo(frame); }

  isMetavariableEqualToMetavariable(metavariable) { return this.metavariable.isEqualTo(metavariable); }

  matchParameter(parameter) { return this.metavariable.matchParameter(parameter); }

  verify(context) {
    let verifies = false;

    const frameSubstitutionString = this.string;  ///

    context.trace(`Verifiying the '${frameSubstitutionString}' frame substitution...`);

    const frameSingular = this.frame.isSingular();

    if (frameSingular) {
      if (this.metavariable !== null) {
        const metavariablePresent = context.isMetavariablePresent(this.metavariable);

        if (metavariablePresent) {
          const frameMetavariable = this.frame.getMetavariable(),
                frameMetavariablePresent = context.isMetavariablePresent(frameMetavariable);

          if (frameMetavariablePresent) {
            verifies = true;
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

    if (verifies) {
      const substititoin = this;  ///

      context.addSubstitution(substititoin);

      context.debug(`...verified the '${frameSubstitutionString}' frame substitution.`);
    }

    return verifies;
  }

  static name = "FrameSubstitution";

  static fromStatement(statement, context) {
    let frameSubstitution = null;

    const statementNode = statement.getNode(),
          frameSubstitutionNode = statementNode.getFrameSubstitutionNode();

    if (frameSubstitutionNode !== null) {
      const { Frame, Metavariable } = structure,
            firstFrameNode = frameSubstitutionNode.getFirstFrameNode(),
            lastMetavariableNode = frameSubstitutionNode.getLastMetavariableNode(),
            metavariableNode = lastMetavariableNode,  ///
            frameNode = firstFrameNode, ///
            node = frameSubstitutionNode,  ///
            tokens = context.nodeAsTokens(node),
            string = context.nodeAsString(node),
            frame = Frame.fromFrameNode(frameNode, context),
            metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);

      frameSubstitution = new FrameSubstitution(context, string, node, tokens, frame, metavariable);
    }

    return frameSubstitution;
  }

  static fromFrameAndMetavariable(frame, metavariable, context) {
    const string = stringFromFrameAndMetavariable(frame, metavariable),
          lexer = context.getLexer(),
          parser = context.getParser(),
          frameSubstitutionPartialContext = FrameSubstitutionPartialContext.fromStringLexerAndParser(string, lexer, parser),
          node = frameSubstitutionPartialContext.getNode(),
          tokens = frameSubstitutionPartialContext.getTokens(),
          frameSubstitution = new FrameSubstitution(context, string, node, tokens, frame, metavariable);

    return frameSubstitution;
  }
});

function stringFromFrameAndMetavariable(frame, metavariable) {
  const frameString = frame.getString(),
        metavariableString = metavariable.getString(),
        string = `[${frameString} for [${metavariableString}]]`;

  return string;
}
