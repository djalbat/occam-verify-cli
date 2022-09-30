"use strict";

class MetaAntecedent {
  constructor(metastatementNodes) {
    this.metastatementNodes = metastatementNodes;
  }

  getMetastatementNodes() {
    return this.metastatementNodes;
  }

  static fromMetastatementNodes(metastatementNodes) {
    const metaAntecedent = new MetaAntecedent(metastatementNodes);

    return metaAntecedent;
  }
}

module.exports = MetaAntecedent;
