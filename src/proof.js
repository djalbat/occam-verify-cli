"use strict";

export default class Proof {
  constructor(node) {
    this.node = node;
  }

  getNode() {
    return this.node;
  }

  verify(substitutions, conclusion, localContext) {
    debugger
  }

  static fromProofNode(proofNode, fileContext) {
    let proof = null;

    if (proofNode !== null) {
      const node = proofNode;

      proof = new Proof(node);
    }

    return proof;
  }
}
