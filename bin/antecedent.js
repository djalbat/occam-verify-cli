"use strict";

class Antecedent {
  constructor(statementNodes) {
    this.statementNodes = statementNodes;
  }

  getStatementNodes() {
    return this.statementNodes;
  }

  static fromStatementNodes(statementNodes) {
    const antecedent = new Antecedent(statementNodes);

    return antecedent;
  }
}

module.exports = Antecedent;
