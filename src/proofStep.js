"use strict";

import unifyStatementWithStatementGivenEquivalences from "./unify/statementWithSttaemetnGivenEquivalences";

export default class ProofStep {
  constructor(subproofNode, statementNode) {
    this.subproofNode = subproofNode;
    this.statementNode = statementNode;
  }

  getSubproofNode() {
    return this.subproofNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  unifyStatement(statementNodeB, equivalences, localContextA, localContextB) {
    let statementUnified = false;

    if (this.statementNode !== null) {
      const statementNodeA = this.statementNode,  ///
            statementUnifiedWithStatement = unifyStatementWithStatementGivenEquivalences(statementNodeA, statementNodeB, equivalences, localContextA, localContextB);

      statementUnified = statementUnifiedWithStatement;  ///
    }

    return statementUnified;
  }

  static fromSubproofNode(subproofNode) {
    const statementNode = null,
          proofStep = new ProofStep(subproofNode, statementNode);

    return proofStep;
  }

  static fromStatementNode(statementNode) {
    const subproofNode = null,
          proofStep = new ProofStep(subproofNode, statementNode);

    return proofStep;
  }
}
