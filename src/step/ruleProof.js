"use strict";

import { first, second } from "../utilities/array";
import { matchMetastatement } from "../utilities/metaproof";
import { nodeQuery, nodesQuery } from "../utilities/query";

const metastatementNodesQuery = nodesQuery("/subproofAssertion/metastatement"),
      ruleSubproofAssertionNodeQuery = nodeQuery("/metastatement/subproofAssertion"),
      qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery = nodesQuery("/ruleSubproof/qualifiedMetastatement|unqualifiedMetastatement/metastatement!");

export default class RuleProofStep {
  constructor(ruleSubproofNode, metaSubproofNode, metastatementNode) {
    this.ruleSubproofNode = ruleSubproofNode;
    this.metaSubproofNode = metaSubproofNode;
    this.metastatementNode = metastatementNode;
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

  static fromRuleSubproofNode(ruleSubproofNode) {
    const metaSubproofNode = null,
          metastatementNode = null,
          ruleProofStep = new RuleProofStep(ruleSubproofNode, metaSubproofNode, metastatementNode);

    return ruleProofStep;
  }

  static fromMetaSubproofNode(metaSubproofNode) {
    const ruleSubproofNode = null,
          metastatementNode = null,
          ruleProofStep = new RuleProofStep(ruleSubproofNode, metaSubproofNode, metastatementNode);

    return ruleProofStep;

  }

  static fromMetastatementNode(metastatementNode) {
    const ruleSubproofNode = null,
          metaSubproofNode = null,
          ruleProofStep = new RuleProofStep(ruleSubproofNode, metaSubproofNode, metastatementNode);

    return ruleProofStep;
  }
}
