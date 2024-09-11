"use strict";

import metaLevelUnifier from "./unifier/metaLevel";

export default class Conclusion {
  constructor(statementNode) {
    this.statementNode = statementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  unifyStatement(statementNodeB, substitutions, localContextA, localContextB) {
    let statementUnified = false;

    if (this.statementNode !== null) {
      const nodeA = this.statementNode,  ///
            nodeB = statementNodeB,  ///
            unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

      statementUnified = unified; ///
    }

    return statementUnified;
  }

  static fromStatementNode(statementNode) {
    const conclusion = new Conclusion(statementNode);

    return conclusion;
  }
}
