"use strict";

import { nodeQuery } from "./utilities/query";

const leftTermNodeQuery = nodeQuery("/statement/term[0]"),
      rightTermNodeQuery = nodeQuery("/statement/term[1]");

export default class Equality {
  constructor(leftTermNode, rightTermNode) {
    this.leftTermNode = leftTermNode;
    this.rightTermNode = rightTermNode;
  }

  getLdftTermNode() {
    return this.leftTermNode;
  }

  getRightTermNode() {
    return this.rightTermNode;
  }

  assert(proofContext) {
    debugger
  }

  static fromStatementNode(statementNode) {
    const leftTermNode = leftTermNodeQuery(statementNode),
          rightTermNode = rightTermNodeQuery(statementNode),
          equality = new Equality(leftTermNode, rightTermNode);

    return equality;
  }
}
