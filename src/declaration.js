"use strict";

export default class Declaration {
  constructor(metavariableNode, metastatementNode) {
    this.metavariableNode = metavariableNode;
    this.metastatementNode = metastatementNode;
  }

  getMetavariableNode() {
    return this.metavariableNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  static fromMetavariableNodeAndMetastatementNode(metavariableNode, metastatementNode) {
    const declaration = new Declaration(metavariableNode, metastatementNode);

    return declaration;
  }
}
