"use strict";

import ontology from "../../ontology";
import Substitution from "../substitution";
import FrameSubstitutionPartialContext from "../../context/partial/substitution/frame";

import { define } from "../../ontology";

export default define(class FrameSubstitution extends Substitution {
  constructor(string, node, tokens, frame, metavariable) {
    super(string, node, tokens);

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

  isFrameEqualTo(frame) { return this.frame.isEqualTo(frame); }

  isMetavariableEqualTo(metavariable) { return this.metavariable.isEqualTo(metavariable); }

  matchParameter(parameter) { return this.metavariable.matchParameter(parameter); }

  static fromStatementNode(statementNode, context) {
    let frameSubstitution = null;

    const frameSubstitutionNode = statementNode.getFrameSubstitutionNode();

    if (frameSubstitutionNode !== null) {
      const lastFrameNode = frameSubstitutionNode.getLastFrameNode(),
            firstFrameNode = frameSubstitutionNode.getFirstFrameNode(),
            singularMetavariableNode = lastFrameNode.getSingularMetavariableNode();

      if (singularMetavariableNode !== null) {
        const { Frame, Metavariable } = ontology,
              frameNode = firstFrameNode, ///
              metavariableNode = singularMetavariableNode,  ///
              frame = Frame.fromFrameNode(frameNode, context),
              metavariable = Metavariable.fromMetavariableNode(metavariableNode, context),
              node = frameSubstitutionNode,  ///
              tokens = context.nodeAsTokens(node),
              string = stringFromFrameAndMetavariable(frame, metavariable);

        frameSubstitution = new FrameSubstitution(string, node, tokens, frame, metavariable);
      }
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
          frameSubstitution = new FrameSubstitution(string, node, tokens, frame, metavariable);

    return frameSubstitution;
  }
});

function stringFromFrameAndMetavariable(frame, metavariable) {
  const frameString = frame.getString(),
        metavariableString = metavariable.getString(),
        string = `[${frameString} for [${metavariableString}]]`;

  return string;
}
