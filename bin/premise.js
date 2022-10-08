"use strict";

class Premise {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  static fromMetastatementNode(metastatementNode) {
    const premise = new Premise(metastatementNode);

    return premise;
  }
}

module.exports = Premise;
