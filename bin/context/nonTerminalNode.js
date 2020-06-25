"use strict";

class NonTerminalNodeContext {
  constructor(childNodes, index) {
    this.childNodes = childNodes;
    this.index = index;
  }

  getNextChildNode() {
    let nextChildNode = undefined;

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
          nonTerminalNodeContext = new NonTerminalNodeContext(childNodes, index);

    return nonTerminalNodeContext;
  }
}

module.exports = NonTerminalNodeContext;
