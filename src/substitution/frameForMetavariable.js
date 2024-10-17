"use strict";

import shim from "../shim";
import Substitution from "../substitution";

import { nodeQuery } from "../utilities/query";
import { substitutionNodeFromUnqualifiedStatementNode,
         unqualifiedStatementStringFromSubstitutionString,
         unqualifiedStatementNodeFromUnqualifiedStatementTokens } from "../utilities/node";
import { unqualifiedStatementTokensFromUnqualifiedStatementString,
         substitutionTokensFromUnqualifiedStatementTokensAndSubstitutionNode } from "../utilities/tokens";

const frameNodeQuery = nodeQuery("/substitution/frame[0]"),
      metavariableNodeQuery = nodeQuery("/substitution/frame[1]/metavariable!"),
      substitutionNodeQuery = nodeQuery("/statement/substitution");

export default class FrameForMetavariableSubstitution extends Substitution {
  constructor(string, frame, metavariable, substitutionNode, substitutionTokens) {
    super(string);

    this.frame = frame;
    this.metavariable = metavariable;
    this.substitutionNode = substitutionNode;
    this.substitutionTokens = substitutionTokens;
  }

  getFrame() {
    return this.frame;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getSubstitutionNode() {
    return this.substitutionNode;
  }

  getSubstitutionTokens() {
    return this.substitutionTokens;
  }

  getMetavariableName() {
    const metavariableName = this.metavariable.getName();

    return metavariableName;
  }

  getSubstitutionString() {
    const frameString = this.frame.getString(),
          metavariableString = this.metavariable.getString(),
          substitutionString = `[[${frameString}] for [${metavariableString}]]`;

    return substitutionString;
  }

  setSubstitutionNodeAndTokens(localContext) {
    const lexer = localContext.getLexer(),
          parser = localContext.getParser(),
          substitutionString = this.getSubstitutionString(),
          unqualifiedStatementString = unqualifiedStatementStringFromSubstitutionString(substitutionString),
          unqualifiedStatementTokens = unqualifiedStatementTokensFromUnqualifiedStatementString(unqualifiedStatementString, lexer),
          unqualifiedStatementNode = unqualifiedStatementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser);

    this.substitutionNode = substitutionNodeFromUnqualifiedStatementNode(unqualifiedStatementNode);

    this.substitutionTokens = substitutionTokensFromUnqualifiedStatementTokensAndSubstitutionNode(unqualifiedStatementTokens, this.substitutionNode);
  }

  setSubstitutionTokens(localContext) {
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

  matchMetavariableName(metavariableName) {
    let metavariableNameMatches;

    const metavariableNameA = metavariableName; ///

    metavariableName = this.metavariable.getName();

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
              metavariable = Metavariable.fromMetavariableNode(metavariableNode, localContext),
              string = stringFromFrameAndMetavariable(frame, metavariable, localContext),
              substitutionTokens = localContext.nodeAsTokens(substitutionNode);

        frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, frame, metavariable, substitutionNode, substitutionTokens);
      }
    }

    return frameForMetavariableSubstitution;
  }

  static fromFrameAndMetavariable(frame, metavariable, localContext) {
    const string = stringFromFrameAndMetavariable(frame, metavariable, localContext),
          substitutionNode = null,
          substitutionTokens = null,
          statementForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, frame, metavariable, substitutionNode, substitutionTokens);

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
