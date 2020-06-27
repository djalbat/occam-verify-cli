"use strict";

class NonTerminalNodeContext {
  constructor(fileContext, childNodes, index) {
    this.fileContext = fileContext;
    this.childNodes = childNodes;
    this.index = index;
  }

  getFileContext() {
    return this.fileContext;
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

  findRuleByRuleName(ruleName) { return this.fileContext.findRuleByRuleName(ruleName); }

  static fromFileContextAndNonTerminalNode(fileContext, nonTerminalNode) {
    const childNodes = nonTerminalNode.getChildNodes(),
          index = 0,
          nonTerminalNodeContext = new NonTerminalNodeContext(fileContext, childNodes, index);

    return nonTerminalNodeContext;
  }
}

module.exports = NonTerminalNodeContext;
