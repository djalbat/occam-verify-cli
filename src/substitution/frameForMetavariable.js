"use strict";

import shim from "../shim";
import Substitution from "../substitution";

import { nodeQuery } from "../utilities/query";
import { metavariableNameFromMetavariableNode } from "../utilities/name";
import { substitutionNodeFromSubstitutionTokens } from "../utilities/node";
import { substitutionTokensFromSubstitutionString } from "../utilities/tokens";

const frameNodeQuery = nodeQuery("/substitution/frame[0]"),
      metavariableNodeQuery = nodeQuery("/substitution/frame[1]/metavariable!"),
      substitutionNodeQuery = nodeQuery("/statement/substitution"),
      frameMetavariableNodeQuery = nodeQuery("/frame/metavariable");

export default class FrameForMetavariableSubstitution extends Substitution {
  constructor(string, frameNode, metavariableNode, substitutionNode, substitutionTokens) {
    super(string);

    this.frameNode = frameNode;
    this.metavariableNode = metavariableNode;
    this.substitutionNode = substitutionNode;
    this.substitutionTokens = substitutionTokens;
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

  getSubstitutionTokens() {
    return this.substitutionTokens;
  }

  getMetavariableName() {
    const metavariableName = metavariableNameFromMetavariableNode(this.metavariableNode);

    return metavariableName;
  }

  setSubstitutionNode() {
    this.substitutionNode = substitutionNodeFromSubstitutionTokens(this.substitutionTokens);
  }

  setSubstitutionTokens() {
    const frameMetavariableNode = frameMetavariableNodeQuery(this.frameNode),
        frameMetavariableName = metavariableNameFromMetavariableNode(frameMetavariableNode),
        metavariableName = metavariableNameFromMetavariableNode(this.metavariableNode),
        substitutionString = `[[${frameMetavariableName}] for [${metavariableName}]]`;

    this.substitutionTokens = substitutionTokensFromSubstitutionString(substitutionString);
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
    let substitutionNodeMatches;

    if ((substitutionNode === null) && (this.substitutionNode === null)) {
      substitutionNodeMatches = true;
    } else if ((substitutionNode === null) && (this.substitutionNode !== null)) {
      substitutionNodeMatches = false;
    } else if ((substitutionNode !== null) && (this.substitutionNode === null)) {
      substitutionNodeMatches = false;
    } else {
      substitutionNodeMatches = this.substitutionNode.match(substitutionNode);
    }

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
              frame = Frame.fromFrameNode(frameNode, localContext),
              variable = Metavariable.fromMetavariableNode(metavariableNode, localContext),
              string = stringFromFrameAndMetavariable(frame, variable, localContext),
              substitutionTokens = localContext.nodeAsTokens(substitutionNode);

        frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, frameNode, metavariableNode, substitutionNode, substitutionTokens);
      }
    }

    return frameForMetavariableSubstitution;
  }

  static fromFrameAndMetavariable(frame, metavariable, localContext) {
    const string = stringFromFrameAndMetavariable(frame, metavariable, localContext),
          frameNode = frame.getNode(),
          metavariableNode = metavariable.getNode(),
          substitutionNode = null,
          substitutionTokens = null,
          statementForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, frameNode, metavariableNode, substitutionNode, substitutionTokens);

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
