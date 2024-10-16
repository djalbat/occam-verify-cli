"use strict";

import shim from "../shim";
import Substitution from "../substitution";

import { nodeQuery } from "../utilities/query";
import { metavariableNameFromMetavariableNode } from "../utilities/name";
import { substitutionNodeFromSubstitutionString } from "../utilities/node";

const frameNodeQuery = nodeQuery("/substitution/frame!"),
      substitutionNodeQuery = nodeQuery("/statement/substitution"),
      metavariableNodeQuery = nodeQuery("/substitution/frame[1]/metavariable!"),
      frameMetavariableNodeQuery = nodeQuery("/frame/metavariable");

export default class FrameForMetavariableSubstitution extends Substitution {
  constructor(string, frameNode, metavariableNode, substitutionNode) {
    super(string);

    this.frameNode = frameNode;
    this.metavariableNode = metavariableNode;
    this.substitutionNode = substitutionNode;
  }

  getFrameNode() {
    return this.frameNode;
  }

  getMetavariableNode() {
    return this.metavariableNode;
  }

  getSubstitutionNode() {
    return this.substitutionNode;
  }

  getMetavariableName() {
    const metavariableName = metavariableNameFromMetavariableNode(this.metavariableNode);

    return metavariableName;
  }

  setSubstitutionNode() {
    const frameMetavariableNode = frameMetavariableNodeQuery(this.frameNode),
          frameMetavariableName = metavariableNameFromMetavariableNode(frameMetavariableNode),
          metavariableName = metavariableNameFromMetavariableNode(this.metavariableNode),
          substitutionString = `[[${frameMetavariableName}] for [${metavariableName}]]`;

    this.substitutionNode = substitutionNodeFromSubstitutionString(substitutionString);
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

  matchFrameNode(frameNode) {
    const frameNodeMatches = this.frameNode.match(frameNode);

    return frameNodeMatches;
  }

  matchMetavariableName(metavariableName) {
    let metavariableNameMatches;

    const metavariableNameA = metavariableName; ///

    metavariableName = metavariableNameFromMetavariableNode(this.metavariableNode);

    const metavariableNameB = metavariableName; ///

    metavariableNameMatches = (metavariableNameA === metavariableNameB);

    return metavariableNameMatches;
  }

  matchSubstitutionNode(substitutionNode) {
    const substitutionNodeMatches = this.substitutionNode.match(substitutionNode);

    return substitutionNodeMatches;
  }

  matchMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode) {
    const metavariableNameMatches = this.matchMetavariableName(metavariableName),
          substitutionNodeMatches = this.matchSubstitutionNode(substitutionNode),
          metavariableNameAndSubstitutionNodeMatches = (metavariableNameMatches && substitutionNodeMatches);

    return metavariableNameAndSubstitutionNodeMatches;
  }

  static fromStatementNode(statementNode, localContext) {
    let frameForMetavariableSubstitution = null;

    const substitutionNode = substitutionNodeQuery(statementNode);

    if (substitutionNode !== null) {
      const frameNode = frameNodeQuery(substitutionNode),
            metavariableNode = metavariableNodeQuery(substitutionNode);

      if ((frameNode !== null) && (metavariableNode !== null)) {
        const { Frame, Metavariable } = shim,
              frame = Frame.fromTermNode(frameNode, localContext),
              variable = Metavariable.fromMetavariableNode(metavariableNode, localContext),
              string = stringFromFrameAndMetavariable(frame, variable, localContext);

        frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, frameNode, metavariableNode, substitutionNode);
      }
    }

    return frameForMetavariableSubstitution;
  }

  static fromFrameAndMetavariable(frame, metavariable, localContext) {
    const string = stringFromFrameAndMetavariable(frame, metavariable, localContext),
          frameNode = frame.getNode(),
          metavariableNode = metavariable.getNode(),
          substitutionNode = null,
          statementForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, frameNode, metavariableNode, substitutionNode);

    return statementForMetavariableSubstitution;
  }
}

function stringFromFrameAndMetavariable(frame, metavariable, localContext) {
  const frameNode = frame.getNode(),
        frameString = localContext.nodeAsString(frameNode),
        metavariableString = metavariable.getString(),
        string = `[[${frameString}] for [${metavariableString}]]`;

  return string;
}
