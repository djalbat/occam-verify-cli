"use strict";

class MetaConsequent {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  static fromStatementNode(metastatementNode) {
    const metaConsequent = new MetaConsequent(metastatementNode);

    return metaConsequent;
  }
}

module.exports = MetaConsequent;
