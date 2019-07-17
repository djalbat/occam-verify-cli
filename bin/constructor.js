'use strict';

class Constructor {
  constructor(termNode, type) {
    this.termNode = termNode;
    this.type = type;
  }

  getTermNode() {
    return this.termNode;
  }

  getType() {
    return this.type;
  }

  static fromTermNode(termNode) {
    const type = undefined,
          constructor = new Constructor(termNode, type);

    return constructor;
  }
}

module.exports = Constructor;
