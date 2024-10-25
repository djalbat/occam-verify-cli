"use strict";

import shim from "../shim";
import Substitution from "../substitution";
import FrameSubstitutionNodeAndTokens from "../nodeAndTokens/substitution/frame";

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

  getMetavariableName() {
    const metavariableName = this.metavariable.getName();

    return metavariableName;
  }

  getSubstitutionString() {
    const frameString = this.frame.getString(),
          metavariableString = this.metavariable.getString(),
          substitutionString = `[${frameString} for [${metavariableString}]]`;

    return substitutionString;
  }

  isEqualTo(substitution) {
    let equalTo = false;

    const frameNode = substitution.getFrameNode(),
          metavariableName = substitution.getMetavariableName();

    if ((frameNode !== null) && (metavariableName !== null)) {
      const frameNodeMatches = this.matchFrameNode(frameNode),
            metavariableNameMatches = this.matchMetavariableName(metavariableName);

      equalTo = (frameNodeMatches && metavariableNameMatches);
    }

    return equalTo;
  }

  matchFrameNode(frameNode) { return this.frame.matchFrameNode(frameNode); }

  matchMetavariableNode(metavariableNode) { return this.metavariable.matchMetavariableNode(metavariableNode); }

  matchMetavariableName(metavariableName) {
    let metavariableNameMatches;

    const generalMetavariableName = metavariableName; ///

    metavariableName = this.metavariable.getName();

    const specificMetavariableName = metavariableName; ///

    metavariableNameMatches = (generalMetavariableName === specificMetavariableName);

    return metavariableNameMatches;
  }

  matchMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode) {
    const metavariableNameMatches = this.matchMetavariableName(metavariableName),
          substitutionNodeMatches = this.matchSubstitutionNode(substitutionNode),
          metavariableNameAndSubstitutionNodeMatches = (metavariableNameMatches && substitutionNodeMatches);

    return metavariableNameAndSubstitutionNodeMatches;
  }

  static fromStatementNode(statementNode, context) {
    let frameSubstitution = null;

    const frameSubstitutionNode = frameSubstitutionNodeQuery(statementNode);

    if (frameSubstitutionNode !== null) {
      const frameNode = frameNodeQuery(frameSubstitutionNode),
            metavariableNode = metavariableNodeQuery(frameSubstitutionNode);

      if ((frameNode !== null) && (metavariableNode !== null)) {
        const { Frame, Metavariable } = shim,
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
          frameSubstitutionString = string,  ///
          frameSubstitutionNodeAndTokens = FrameSubstitutionNodeAndTokens.fromFrameSubstitutionString(frameSubstitutionString, context),
          node = frameSubstitutionNodeAndTokens.getNode(),
          tokens = frameSubstitutionNodeAndTokens.getTokens(),
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
