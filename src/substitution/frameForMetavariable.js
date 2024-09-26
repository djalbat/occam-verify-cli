"use strict";

import Substitution from "../substitution";

import { nodeQuery } from "../utilities/query";

const substitutionFrameNodeQuery = nodeQuery("/substitution/frame!"),
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

    const transformedFrameNode = transformFrameNode(this.frameNode, substitutions),
          transformedMetavariableNode = transformMetavariableNode(this.metavariableNode, substitutions);

    if ((transformedFrameNode !== null) && (transformedMetavariableNode !== null)) {
      const frameNode = transformedFrameNode, ///
            metavariableNode = transformedMetavariableNode, ///
            frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(frameNode, metavariableNode);

      transformedSubstitution = frameForMetavariableSubstitution;  ///
    }

    return transformedSubstitution;
  }

  isEqualTo(substitution) {
    const frameNode = substitution.getFrameNode(),
          metavariableNode = substitution.getMetavariableNode(),
          frameNodeMatches = this.matchFrameNode(frameNode),
          metavariableNodeMatches = this.matchMetavariableNode(metavariableNode),
          equalTo = (frameNodeMatches && metavariableNodeMatches);

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

    const substitutionFrameNode = substitutionFrameNodeQuery(substitutionNode);

    if (substitutionFrameNode !== null) {
      const substitutionMetavariableNode = substitutionMetavariableNodeQuery(substitutionNode),
            metavariableNode = substitutionMetavariableNode,  ///
            frameNode = substitutionFrameNode;  ///

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
