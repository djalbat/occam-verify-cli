"use strict";

class Configuration {
  constructor(childNodes, index) {
    this.childNodes = childNodes;
    this.index = index;
  }

  getNextChildNode() {
    let nextChildNode = null;

    const childNodesLength = this.childNodes.length;

    if (this.index < childNodesLength) {
      nextChildNode = this.childNodes[this.index++];
    }

    return nextChildNode;
  }

  getSavedIndex() {
    const savedIndex = this.index;  ///

    return savedIndex;
  }

  backtrack(savedIndex) {
    this.index = savedIndex;  ///
  }

  static fromNonTerminalNode(nonTerminalNode) {
    const childNodes = nonTerminalNode.getChildNodes(),
          index = 0,
          configuration = new Configuration(childNodes, index);

    return configuration;
  }
}

module.exports = Configuration;
