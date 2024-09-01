"use strict";

export default class MetaproofStep {
  constructor(statementNode, ruleSubproofNode, metaSubproofNode, metastatementNode) {
    this.statementNode = statementNode;
    this.ruleSubproofNode = ruleSubproofNode;
    this.metaSubproofNode = metaSubproofNode;
    this.metastatementNode = metastatementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  getRuleSubproofNode() {
    return this.ruleSubproofNode;
  }

  getMetaSubproofNode() {
    return this.metaSubproofNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchMetastatementNode(metastatementNode) {
    let matchesMetastatementNode = false;

    if (this.metastatementNode !== null) {
      matchesMetastatementNode = this.metastatementNode.match(metastatementNode);
    }

    return matchesMetastatementNode;
  }

  static fromStatementNode(statementNode) {
    const ruleSubproofNode = null,
          metaSubproofNode = null,
          metastatementNode = null,
          metaproofStep = new MetaproofStep(statementNode, ruleSubproofNode, metaSubproofNode, metastatementNode);

    return metaproofStep;
  }

  static fromRuleSubproofNode(ruleSubproofNode) {
    const statementNode = null,
          metaSubproofNode = null,
          metastatementNode = null,
          metaproofStep = new MetaproofStep(statementNode, ruleSubproofNode, metaSubproofNode, metastatementNode);

    return metaproofStep;
  }

  static fromMetaSubproofNode(metaSubproofNode) {
    const statementNode = null,
          ruleSubproofNode = null,
          metastatementNode = null,
          metaproofStep = new MetaproofStep(statementNode, ruleSubproofNode, metaSubproofNode, metastatementNode);

    return metaproofStep;

  }

  static fromMetastatementNode(metastatementNode) {
    const statementNode = null,
          ruleSubproofNode = null,
          metaSubproofNode = null,
          metaproofStep = new MetaproofStep(statementNode, ruleSubproofNode, metaSubproofNode, metastatementNode);

    return metaproofStep;
  }
}
