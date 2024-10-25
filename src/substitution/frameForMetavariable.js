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
    let frameForMetavariableSubstitution = null;

    const substitutionNode = substitutionNodeQuery(statementNode);

    if (substitutionNode !== null) {
      const frameNode = frameNodeQuery(substitutionNode),
            metavariableNode = metavariableNodeQuery(substitutionNode);

      if ((frameNode !== null) && (metavariableNode !== null)) {
        const { Frame, Metavariable } = shim,
              frame = Frame.fromFrameNode(frameNode, context),
              metavariable = Metavariable.fromMetavariableNode(metavariableNode, context),
              node = substitutionNode,  ///
              tokens = context.nodeAsTokens(node),
              string = stringFromFrameAndMetavariable(frame, metavariable);

        frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, node, tokens, frame, metavariable);
      }
    }

    return frameForMetavariableSubstitution;
  }

  static fromFrameAndMetavariable(frame, metavariable, context) {
    const lexer = context.getLexer(),
          parser = context.getParser(),
          string = stringFromFrameAndMetavariable(frame, metavariable),
          substitutionString = string,  ///
          unqualifiedStatementString = unqualifiedStatementStringFromSubstitutionString(substitutionString),
          unqualifiedStatementTokens = unqualifiedStatementTokensFromUnqualifiedStatementString(unqualifiedStatementString, lexer),
          unqualifiedStatementNode = unqualifiedStatementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser),
          substitutionNode = substitutionNodeFromUnqualifiedStatementNode(unqualifiedStatementNode),
          substitutionTokens = substitutionTokensFromUnqualifiedStatementTokensAndSubstitutionNode(unqualifiedStatementTokens, substitutionNode),
          node = substitutionNode,  //
          tokens = substitutionTokens,  ///
          statementForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, node, tokens, frame, metavariable);

    return statementForMetavariableSubstitution;
  }
}

function stringFromFrameAndMetavariable(frame, metavariable) {
  const frameString = frame.getString(),
        metavariableString = metavariable.getString(),
        string = `[${frameString} for [${metavariableString}]]`;

  return string;
}
