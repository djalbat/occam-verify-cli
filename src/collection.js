"use strict";

export default class Collection {
  constructor(type, termNodes) {
    this.type = type;
    this.termNodes = termNodes;
  }

  getType() {
    return this.type;
  }

  getTermNodes() {
    return this.termNodes;
  }

  setType(type) {
    this.type = type;
  }

  setTermNodes(termNodes) {
    this.termNodes = termNodes;
  }

  addTermNode(termNode) {
    this.termNodes.push(termNode);
  }

  static fromType(type) {
    const termNodes = [],
          collection = new Collection(type, termNodes);

    return collection;
  }
}
