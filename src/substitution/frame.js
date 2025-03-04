"use strict";

import dom from "../dom";
import Substitution from "../substitution";
import FrameSubstitutionPartialContext from "../context/partial/substitution/frame";

import { nodeQuery } from "../utilities/query";

const frameNodeQuery = nodeQuery("/frameSubstitution/frame[0]"),
      metavariableNodeQuery = nodeQuery("/frameSubstitution/frame[1]/metavariable!"),
      frameSubstitutionNodeQuery = nodeQuery("/statement/frameSubstitution");

export default class FrameSubstitution extends Substitution {
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

  isFrameEqualTo(frame) { return this.frame.isEqualTo(frame); }

  isMetavariableEqualTo(metavariable) { return this.metavariable.isEqualTo(metavariable); }

  matchName(name) { return this.metavariable.matchName(name); }

  getReplacementNode() {
    const frameNode = this.frame.getNode(),
          replacementNode = frameNode; ///

    return replacementNode;
  }

  static fromStatementNode(statementNode, context) {
    let frameSubstitution = null;

    const frameSubstitutionNode = frameSubstitutionNodeQuery(statementNode);

    if (frameSubstitutionNode !== null) {
      const frameNode = frameNodeQuery(frameSubstitutionNode),
            metavariableNode = metavariableNodeQuery(frameSubstitutionNode);

      if ((frameNode !== null) && (metavariableNode !== null)) {
        const { Frame, Metavariable } = dom,
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
}

function stringFromFrameAndMetavariable(frame, metavariable) {
  const frameString = frame.getString(),
        metavariableString = metavariable.getString(),
        string = `[${frameString} for [${metavariableString}]]`;

  return string;
}
