"use strict";

class Premise {
  constructor(metastatementNodes) {
    this.metastatementNodes = metastatementNodes;
  }

  getMetastatementNodes() {
    return this.metastatementNodes;
  }

  static fromMetastatementNodes(metastatementNodes) {
    const premise = new Premise(metastatementNodes);

    return premise;
  }
}

module.exports = Premise;
