"use strict";

export default class Judgement {
  constructor(node, frame, declaration) {
    this.node = node;
    this.frame = frame;
    this.declaration = declaration;
  }

  getNode() {
    return this.node;
  }

  getFrame() {
    return this.frame;
  }

  getDeclaration() {
    return this.declaration;
  }

  getMetavariable() { return this.frame.getMetavariable(); }

  matchMetavariableName(metavariableName) { return this.frame.matchMetavariableName(metavariableName); }

  static fromJudgementNodeFrameAndDeclaration(judgementNode, frame, declaration) {
    const node = judgementNode, ///
          judgement = new Judgement(node, frame, declaration);

    return judgement;
  }
}
