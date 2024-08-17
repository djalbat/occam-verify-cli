"use strict";

import { first, second } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { matchMetastatementModuloBrackets } from "../utilities/metaproof";

const metastatementNodesQuery = nodesQuery("/ruleSubproofAssertion/metastatement"),
      ruleSubproofAssertionNodeQuery = nodeQuery("/metastatement/ruleSubproofAssertion"),
      qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery = nodesQuery("/ruleSubproof/qualifiedMetastatement|unqualifiedMetastatement/metastatement!");

export default class MetaproofStep {
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
            metastatementNodeB = this.metastatementNode,  ///
            metastatementMatchesModuloBrackets = matchMetastatementModuloBrackets(metastatementNodeA, metastatementNodeB);

      metastatementMatches = metastatementMatchesModuloBrackets;  ///
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
            metastatementMatchesModuloBrackets = matchMetastatementModuloBrackets(metastatementNodeA, metastatementNodeB);

      if (metastatementMatchesModuloBrackets) {
        const secondRuleSubproofAssertionMetastatementNode = second(ruleSubproofAssertionMetastatementNodes),
              secondQualifiedOrUnqualifiedMetastatementMetastatementNode = second(qualifiedOrUnqualifiedMetastatementMetastatementNodes);

        const metastatementNodeA = secondRuleSubproofAssertionMetastatementNode, ///
              metastatementNodeB = secondQualifiedOrUnqualifiedMetastatementMetastatementNode, ///
              metastatementMatchesModuloBrackets = matchMetastatementModuloBrackets(metastatementNodeA, metastatementNodeB);

        ruleSubproofAssertionMatches = metastatementMatchesModuloBrackets; ///
      }
    }

    return ruleSubproofAssertionMatches;
  }

  static fromRuleSubproofNode(ruleSubproofNode) {
    const metaSubproofNode = null,
          metastatementNode = null,
          metaProofStep = new MetaproofStep(ruleSubproofNode, metaSubproofNode, metastatementNode);

    return metaProofStep;
  }

  static fromMetaSubproofNode(metaSubproofNode) {
    const ruleSubproofNode = null,
          metastatementNode = null,
          metaProofStep = new MetaproofStep(ruleSubproofNode, metaSubproofNode, metastatementNode);

    return metaProofStep;

  }

  static fromMetastatementNode(metastatementNode) {
    const ruleSubproofNode = null,
          metaSubproofNode = null,
          metaProofStep = new MetaproofStep(ruleSubproofNode, metaSubproofNode, metastatementNode);

    return metaProofStep;
  }
}
