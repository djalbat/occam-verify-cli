"use strict";

import Substitution from "../substitution";

import { nodeQuery } from "../utilities/query";

const frameNodeQuery = nodeQuery("/substitution/frame!"),
      frameMetavariableNodeQuery = nodeQuery("/frame/metavariable!"),
      substitutionMetavariableNodeQuery = nodeQuery("/substitution/metavariable!");

export default class FrameForMetavariableSubstitution extends Substitution {
  constructor(frameNode, metavariableNode) {
    super();

    this.frameNode = frameNode;
    this.metavariableNode = metavariableNode;
  }

  getFrameNode() {
    return this.frameNode;
  }

  getMetavariableNode() {
    return this.metavariableNode;
  }

  getNode() {
    const node = this.frameNode;  ///

    return node;
  }

  transformed(substitutions) {
    let transformedSubstitution = null;

    const transformedFrameNode = transformFrameNode(this.frameNode, substitutions);

    if (transformedFrameNode !== null) {
      const frameNode = transformedFrameNode, ///
            metavariableNode = this.metavariableNode, ///
            frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(frameNode, metavariableNode);

      transformedSubstitution = frameForMetavariableSubstitution;  ///
    }

    return transformedSubstitution;
  }

  matchFrameNode(frameNode) {
    const frameNodeMatches = this.frameNode.match(frameNode);

    return frameNodeMatches;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.metavariableNode.match(metavariableNode);

    return metavariableNodeMatches;
  }

  asString(localContextA, localContextB) {
    const frameNodeB = this.frameNode,  ///
          frameStringB = localContextB.nodeAsString(frameNodeB),
          metavariableNodeA = this.metavariableNode,  ///
          metavariableStringA = localContextA.nodeAsString(metavariableNodeA),
          string = `[${frameStringB} for ${metavariableStringA}]`;

    return string;
  }

  static fromSubstitutionNode(substitutionNode) {
    let frameForMetavariableSubstitution = null;

    let frameNode = frameNodeQuery(substitutionNode);

    if (frameNode !== null) {
      const substitutionMetavariableNode = substitutionMetavariableNodeQuery(substitutionNode),
            metavariableNode = substitutionMetavariableNode;  ///

      frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(frameNode, metavariableNode);
    }

    return frameForMetavariableSubstitution;
  }

  static fromFrameNodeAndMetavariableNode(frameNode, metavariableNode) {
    const frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(frameNode, metavariableNode);

    return frameForMetavariableSubstitution;
  }
}

function transformFrameNode(frameNode, substitutions) {
  let transformedFrameNode = null;

  const frameMetavariableNode = frameMetavariableNodeQuery(frameNode);

  if (frameMetavariableNode !== null) {
    const metavariableNode = frameMetavariableNode;  ///

    substitutions.someSubstitution((substitution) => {
      const substitutionMatchesVariableNode = substitution.matchMetavariableNode(metavariableNode);

      if (substitutionMatchesVariableNode) {
        const frameNode = substitution.getFrameNode();

        transformedFrameNode = frameNode; ////

        return true;
      }
    });
  }

  return transformedFrameNode;
}
