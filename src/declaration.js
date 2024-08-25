"use strict";

export default class Declaration {
  constructor(metavariable, metastatementNode) {
    this.metavariable = metavariable;
    this.metastatementNode = metastatementNode;
  }

  getMetavariable() {
    return this.metavariable;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  static fromMetavariableAndMetastatementNode(metavariable, metastatementNode) {
    const declaration = new Declaration(metavariable, metastatementNode);

    return declaration;
  }
}
