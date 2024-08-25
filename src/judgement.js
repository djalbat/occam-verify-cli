"use strict";

export default class Judgement {
  constructor(node, frame, metavariable) {
    this.node = node;
    this.frame = frame;
    this.metavariable = metavariable;
  }

  getNode() {
    return this.node;
  }

  getFrame() {
    return this.frame;
  }

  getMetavariable() {
    return this.metavariable;
  }

  static fromJudgementNodeFrameAndMetavariable(judgementNode, frame, metavariable) {
    const node = judgementNode,
          judgement = new Judgement(node, frame, metavariable);

    return judgement;
  }
}
