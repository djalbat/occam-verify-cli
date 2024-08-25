"use strict";

export default class Frame {
  constructor(node, declarations) {
    this.node = node;
    this.declarations = declarations;
  }

  getNode() {
    return this.node;
  }

  getDeclarations() {
    return this.declarations;
  }

  addDeclarations(declarations) {
    push(this.declarations, declarations);
  }

  fromFrameNodeAndDeclarations(frameNode, declarations) {
    const node = frameNode, ///
          frame = new Frame(node, declarations);

    return frame;
  }
}