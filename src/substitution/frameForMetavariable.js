"use strict";

import shim from "../shim";
import Substitution from "../substitution";

import { nodeQuery } from "../utilities/query";

const substitutionNodeQuery = nodeQuery("/statement/substitution"),
      substitutionFrameNodeQuery = nodeQuery("/substitution/frame!"),
      frameMetavariableNodeQuery = nodeQuery("/frame/metavariable!"),
      substitutionMetavariableNodeQuery = nodeQuery("/substitution/metavariable!");

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

  transformed(substitutions) {
    let transformedSubstitution = null;

    const transformedFrameNode = transformFrameNode(this.frameNode, substitutions),
          transformedMetavariableNode = transformMetavariableNode(this.metavariableNode, substitutions);

    if ((transformedFrameNode !== null) && (transformedMetavariableNode !== null)) {
      const string = null,  ///
            frameNode = transformedFrameNode, ///
            metavariableNode = transformedMetavariableNode, ///
            substitutionNode = null,
            frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(string, frameNode, metavariableNode, substitutionNode);

      transformedSubstitution = frameForMetavariableSubstitution;  ///
    }

    return transformedSubstitution;
  }

  isEqualTo(substitution) {
    let equalTo = false;

    const frameNode = substitution.getFrameNode(),
          metavariableNode = substitution.getMetavariableNode();

    if ((frameNode !== null) && (metavariableNode !== null)) {
      const frameNodeMatches = this.matchFrameNode(frameNode),
            metavariableNodeMatches = this.matchMetavariableNode(metavariableNode);

      equalTo = (frameNodeMatches && metavariableNodeMatches);
    }

    return equalTo;
  }

  matchFrameNode(frameNode) {
    const frameNodeMatches = this.frameNode.match(frameNode);

    return frameNodeMatches;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.metavariableNode.match(metavariableNode);

    return metavariableNodeMatches;
  }

  matchSubstitutionNode(substitutionNode) {
    const substitutionNodeMatches = this.substitutionNode.match(substitutionNode);

    return substitutionNodeMatches;
  }

  matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
    const metavariableNodeMatches = this.matchMetavariableNode(metavariableNode),
          substitutionNodeMatches = this.matchSubstitutionNode(substitutionNode),
          metavariableNodeAndSubstitutionNodeMatches = (metavariableNodeMatches && substitutionNodeMatches);

    return metavariableNodeAndSubstitutionNodeMatches;
  }

  static fromStatementNode(statementNode, localContext) {
    let frameForMetavariableSubstitution = null;

    const substitutionNode = substitutionNodeQuery(statementNode);

    if (substitutionNode !== null) {
      let substitutionFrameNode = substitutionFrameNodeQuery(substitutionNode);

      if (substitutionFrameNode !== null) {
        const { Frame, Metavariable } = shim,
              substitutionMetavariableNode = substitutionMetavariableNodeQuery(substitutionNode),
              metavariableNode = substitutionMetavariableNode,  ///
              frameNode = substitutionFrameNode,  ///
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

function transformFrameNode(frameNode, substitutions) {
  let transformedFrameNode = null;

  const frameMetavariableNode = frameMetavariableNodeQuery(frameNode);

  if (frameMetavariableNode !== null) {
    const metavariableNode = frameMetavariableNode;  ///

    substitutions.someSubstitution((substitution) => {
      const metavariableNodeMatches = substitution.matchMetavariableNode(metavariableNode);

      if (metavariableNodeMatches) {
        const frameNode = substitution.getFrameNode();

        transformedFrameNode = frameNode; ////

        return true;
      }
    });
  }

  return transformedFrameNode;
}

function transformMetavariableNode(metavariableNode, substitutions) {
  let transformedMetavariableNode = null;

  substitutions.someSubstitution((substitution) => {
    const metavariableNodeMatches = substitution.matchMetavariableNode(metavariableNode);

    if (metavariableNodeMatches) {
      const frameNode = substitution.getFrameNode(),
            frameMetavariableNode = frameMetavariableNodeQuery(frameNode);

      if (frameMetavariableNode !== null) {
        transformedMetavariableNode = frameMetavariableNode;  ///

        return true;
      }
    }
  });

  return transformedMetavariableNode;
}

function stringFromFrameAndMetavariable(frame, metavariable, localContext) {
  const frameNode = frame.getNode(),
        frameString = localContext.nodeAsString(frameNode),
        metavariableString = metavariable.getString(),
        string = `[[${frameString}] for [${metavariableString}]]`;

  return string;
}
