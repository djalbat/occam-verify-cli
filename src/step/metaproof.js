"use strict";

import { first, second } from "../utilities/array";
import { matchMetastatement } from "../utilities/metaproof";
import { nodeQuery, nodesQuery } from "../utilities/query";

const metastatementNodesQuery = nodesQuery("/subproofAssertion/metastatement"),
      ruleSubproofAssertionNodeQuery = nodeQuery("/metastatement/subproofAssertion"),
      qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery = nodesQuery("/ruleSubproof/qualifiedMetastatement|unqualifiedMetastatement/metastatement!");

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

  match(metastatementNode) {
    let matches = false;

    if (!matches) {
      const ruleSubproofAssertionNode = ruleSubproofAssertionNodeQuery(metastatementNode);

      if (ruleSubproofAssertionNode !== null) {
        const ruleSubproofAssertionMatches = this.matchRuleSubproofAssertion(ruleSubproofAssertionNode);

        matches = ruleSubproofAssertionMatches;  ///
      }
    }

    if (!matches) {
      const metastatementMatches = this.matchMetastatement(metastatementNode);

      matches = metastatementMatches; ///
    }

    return matches;
  }

  matchMetastatement(metastatementNode) {
    let metastatementMatches = false;

    if (this.metastatementNode !== null) {
      const metastatementNodeA = metastatementNode, ///
            metastatementNodeB = this.metastatementNode;  ///

      metastatementMatches = matchMetastatement(metastatementNodeA, metastatementNodeB);
    }

    return metastatementMatches;
  }

  matchRuleSubproofAssertion(ruleSubproofAssertionNode) {
    let ruleSubproofAssertionMatches = false;

    if (this.ruleSubproofNode !== null) {
      const ruleSubproofAssertionMetastatementNodes = metastatementNodesQuery(ruleSubproofAssertionNode),
            firstRuleSubproofAssertionMetastatementNode = first(ruleSubproofAssertionMetastatementNodes),
            qualifiedOrUnqualifiedMetastatementMetastatementNodes = qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery(this.ruleSubproofNode),
            firstQualifiedOrUnqualifiedMetastatementMetastatementNode = first(qualifiedOrUnqualifiedMetastatementMetastatementNodes);

      const metastatementNodeA = firstRuleSubproofAssertionMetastatementNode,  ///
            metastatementNodeB = firstQualifiedOrUnqualifiedMetastatementMetastatementNode, ///
            metastatementMatches = matchMetastatement(metastatementNodeA, metastatementNodeB);

      if (metastatementMatches) {
        const secondRuleSubproofAssertionMetastatementNode = second(ruleSubproofAssertionMetastatementNodes),
              secondQualifiedOrUnqualifiedMetastatementMetastatementNode = second(qualifiedOrUnqualifiedMetastatementMetastatementNodes);

        const metastatementNodeA = secondRuleSubproofAssertionMetastatementNode, ///
              metastatementNodeB = secondQualifiedOrUnqualifiedMetastatementMetastatementNode, ///
              metastatementMatches = matchMetastatement(metastatementNodeA, metastatementNodeB);

        ruleSubproofAssertionMatches = metastatementMatches; ///
      }
    }

    return ruleSubproofAssertionMatches;
  }

  static fromStatementNode(statementNode) {
    const ruleSubproofNode = null,
          metaSubproofNode = null,
          metastatementNode = null,
          metaProofStep = new MetaproofStep(statementNode, ruleSubproofNode, metaSubproofNode, metastatementNode);

    return metaProofStep;
  }

  static fromRuleSubproofNode(ruleSubproofNode) {
    const statementNode = null,
          metaSubproofNode = null,
          metastatementNode = null,
          metaProofStep = new MetaproofStep(statementNode, ruleSubproofNode, metaSubproofNode, metastatementNode);

    return metaProofStep;
  }

  static fromMetaSubproofNode(metaSubproofNode) {
    const statementNode = null,
          ruleSubproofNode = null,
          metastatementNode = null,
          metaProofStep = new MetaproofStep(statementNode, ruleSubproofNode, metaSubproofNode, metastatementNode);

    return metaProofStep;

  }

  static fromMetastatementNode(metastatementNode) {
    const statementNode = null,
          ruleSubproofNode = null,
          metaSubproofNode = null,
          metaProofStep = new MetaproofStep(statementNode, ruleSubproofNode, metaSubproofNode, metastatementNode);

    return metaProofStep;
  }
}
