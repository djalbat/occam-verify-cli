"use strict";

class MetaSubstitution {
  constructor(metavariableName, nonTerminalNode) {
    this.metavariableName = metavariableName;
    this.nonTerminalNode = nonTerminalNode;
  }

  getMetavariableName() {
    return this.metavariableName;
  }

  getNonTerminalNode() {
    return this.nonTerminalNode;
  }

  static fromMetavariableNameAndNonTerminalNode(metavariableName, nonTerminalNode) {
    const metaSubstitution = new MetaSubstitution(metavariableName, nonTerminalNode);

    return metaSubstitution;
  }
}

module.exports = MetaSubstitution;
