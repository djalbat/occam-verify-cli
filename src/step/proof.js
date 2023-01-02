"use strict";

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

  static fromSubproofNode(subproofNode) {
    const statementNode = null,
          metaProofStep = new ProofStep(subproofNode, statementNode);

    return metaProofStep;
  }

  static fromStatementNode(statementNode) {
    const subproofNode = null,
          metaProofStep = new ProofStep(subproofNode, statementNode);

    return metaProofStep;
  }
}
