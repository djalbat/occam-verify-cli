"use strict";

import { nodeQuery } from "../utilities/query";

const leftTermNodeQuery = nodeQuery("/statement/term[0]"),
      rightTermNodeQuery = nodeQuery("/statement/term[1]");

export default class EqualityAssertion {
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
          equalityAssertion = new EqualityAssertion(leftTermNode, rightTermNode);

    return equalityAssertion;
  }
}
