"use strict";

export default class Judgement {
  constructor(frame, declaration) {
    this.frame = frame;
    this.declaration = declaration;
  }

  getFrame() {
    return this.frame;
  }

  getDeclaration() {
    return this.declaration;
  }

  getMetavariableNode() { return this.frame.getMetavariableNode(); }

  matchMetavariableName(metavariableName) { return this.frame.matchMetavariableName(metavariableName); }

  static fromJudgementNodeFrameAndDeclaration(judgementNode, frame, declaration) {
    const judgement = new Judgement(frame, declaration);

    return judgement;
  }
}
