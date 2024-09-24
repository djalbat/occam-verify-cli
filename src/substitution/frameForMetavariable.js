"use strict";

import Substitution from "../substitution";
import TermForVariableSubstitution from "../substitution/termForVariable";

import { nodeQuery } from "../utilities/query";

const frameNodeQuery = nodeQuery("/substitution/frame!"),
      frameMetavariableNodeQuery = nodeQuery("/frame/metavariable!"),
      substitutionMetavariableNodeQuery = nodeQuery("/substitution/metavariable!");

export default class FrameForMetavariableSubstitution extends Substitution {
  constructor(frameNode, metavariableNode, substitution) {
    super();

    this.frameNode = frameNode;
    this.metavariableNode = metavariableNode;
    this.substitution = substitution;
  }

  getFrameNode() {
    return this.frameNode;
  }

  getMetavariableNode() {
    return this.metavariableNode;
  }

  getSubstitution() {
    return this.substitution;
  }

  getNode() {
    const node = this.frameNode;  ///

    return node;
  }

  isSimple() {
    const simple = (this.substitution === null);

    return simple;
  }

  transformed(substitutions) {
    let transformedSubstitution = null;

    const transformedFrameNode = transformFrameNode(this.frameNode, substitutions);

    if (transformedFrameNode !== null) {
      const substitution = null,
            frameNode = transformedFrameNode, ///
            metavariableNode = this.metavariableNode, ///
            frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(frameNode, metavariableNode, substitution);

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

  matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
    const metavariableNodeAndSubstitutionNodeMatches = false;

    return metavariableNodeAndSubstitutionNodeMatches;
  }

  asString(localContextA, localContextB) {
    let string;

    const frameNodeB = this.frameNode,  ///
          frameStringB = localContextB.nodeAsString(frameNodeB),
          metavariableNodeA = this.metavariableNode,  ///
          metavariableStringA = localContextA.nodeAsString(metavariableNodeA);

    if (this.substitution === null) {
      string = `[${frameStringB} for ${metavariableStringA}]`;
    } else {
      const substitutionString = this.substitution.asString(localContextA, localContextA);

      string = `[${frameStringB} for ${metavariableStringA}${substitutionString}]`;
    }

    return string;
  }

  static fromSubstitutionNode(substitutionNode) {
    let frameForMetavariableSubstitution = null;

    let frameNode = frameNodeQuery(substitutionNode);

    if (frameNode !== null) {
      const substitutionMetavariableNode = substitutionMetavariableNodeQuery(substitutionNode),
            metavariableNode = substitutionMetavariableNode,  ///
            substitution = null;

      frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(frameNode, metavariableNode, substitution);
    }

    return frameForMetavariableSubstitution;
  }

  static fromFrameNodeAndMetavariableNode(frameNode, metavariableNode) {
    const substitution = null,
          frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(frameNode, metavariableNode, substitution);

    return frameForMetavariableSubstitution;
  }

  static fromFrameNodeMetavariableNodeAndSubstitutionNode(frameNode, metavariableNode, substitutionNode) {
    const substitution = substitutionFromSubstitutionNode(substitutionNode),
          frameForMetavariableSubstitution = new FrameForMetavariableSubstitution(frameNode, metavariableNode, substitution);

    return frameForMetavariableSubstitution;
  }
}

function substitutionFromSubstitutionNode(substitutionNode) {
  let substitution = null;

  if (substitution === null) {
    const termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionNode(substitutionNode);

    if (termForVariableSubstitution !== null) {
      substitution = termForVariableSubstitution; ///
    }
  }

  if (substitution === null) {
    const frameForMetavariableSubstitution = FrameForMetavariableSubstitution.fromSubstitutionNode(substitutionNode);

    if (frameForMetavariableSubstitution !== null) {
      substitution = frameForMetavariableSubstitution;  ///
    }
  }

  return substitution;
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
