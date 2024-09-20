"use strict";

export default class Judgement {
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
    const metavariableNodeMatches = this.metavariableNode.match(metavariableNode);

    return metavariableNodeMatches;
  }

  unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem) { return this.frame.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem); }

  static fromJudgementNodeFrameAndMetavariableNode(judgementNode, frame, metavariableNode) {
    const node = judgementNode,
          judgement = new Judgement(node, frame, metavariableNode);

    return judgement;
  }
}
