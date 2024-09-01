"use strict";

export default class FrameAssertion {
  constructor(node, frame, metavariableNode) {
    this.node = node;
    this.frame = frame;
    this.metavariableNode = metavariableNode;
  }

  getNode() {
    return this.node;
  }

  getFrame() {
    return this.frame;
  }

  getMetavariableNode() {
    return this.metavariableNode;
  }

  getDeclarations() { return this.frame.getDeclarations(); }

  matchMetavariableNode(metavariableNode) {
    const matchesMetavariableNode = this.metavariableNode.match(metavariableNode);

    return matchesMetavariableNode;
  }

  matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem) { return this.frame.matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem); }

  static fromFrameAssertionNodeFrameAndMetavariableNode(frameAssertionNode, frame, metavariableNode) {
    const node = frameAssertionNode,
          frameAssertion = new FrameAssertion(node, frame, metavariableNode);

    return frameAssertion;
  }
}
