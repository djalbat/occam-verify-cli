"use strict";

import { first, second } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { matchMetastatementNodeModuloBrackets } from "../utilities/metaproof";

const metastatementNodesQuery = nodesQuery("/ruleSubproofAssertion/metastatement"),
      ruleSubproofAssertionNodeQuery = nodeQuery("/metastatement/ruleSubproofAssertion"),
      qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery = nodesQuery("/ruleSubproof/qualifiedMetastatement|unqualifiedMetastatement/metastatement!");

export default class MetaproofStep {
  constructor(ruleSubproofNode, metastatementNode) {
    this.ruleSubproofNode = ruleSubproofNode;
    this.metastatementNode = metastatementNode;
  }

  getRuleSubproofNode() {
    return this.ruleSubproofNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  match(metastatementNode) {
    let matches = false;

    if (!matches) {
      const ruleSubproofAssertionNode = ruleSubproofAssertionNodeQuery(metastatementNode);

      if (ruleSubproofAssertionNode !== null) {
        const matchesRuleSubproofAssertion = this.matchRuleSubproofAssertion(ruleSubproofAssertionNode);

        matches = matchesRuleSubproofAssertion;  ///
      }
    }

    if (!matches) {
      const matchesStatement = this.matchMetastatement(metastatementNode);

      matches = matchesStatement; //
    }

    return matches;
  }

  matchMetastatement(metastatementNode) {
    let matchesStatement = false;

    if (this.metastatementNode !== null) {
      const nonTerminalNodeA = metastatementNode, ///
            nonTerminalNodeB = this.metastatementNode,  ///
            nonTerminalNodeMatchesModuloBrackets = matchMetastatementNodeModuloBrackets(nonTerminalNodeA, nonTerminalNodeB),
            metastatementNodeMatches = nonTerminalNodeMatchesModuloBrackets;  ///

      return metastatementNodeMatches;
    }

    return matchesStatement;
  }

  matchRuleSubproofAssertion(ruleSubproofAssertionNode) {
    let matchesRuleSubproofAssertion = false;

    if (this.ruleSubproofNode !== null) {
      const ruleSubproofAssertionMetastatementNodes = metastatementNodesQuery(ruleSubproofAssertionNode),
            firstRuleSubproofAssertionMetastatementNode = first(ruleSubproofAssertionMetastatementNodes),
            qualifiedOrUnqualifiedMetastatementMetastatementNodes = qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery(this.ruleSubproofNode),
            firstQualifiedOrUnqualifiedMetastatementMetastatementNode = first(qualifiedOrUnqualifiedMetastatementMetastatementNodes);

      const metastatementNodeA = firstRuleSubproofAssertionMetastatementNode,  ///
            metastatementNodeB = firstQualifiedOrUnqualifiedMetastatementMetastatementNode, ///
            nonTerminalNodeMatchesModuloBrackets = matchMetastatementNodeModuloBrackets(metastatementNodeA, metastatementNodeB);

      if (nonTerminalNodeMatchesModuloBrackets) {
        const secondRuleSubproofAssertionMetastatementNode = second(ruleSubproofAssertionMetastatementNodes),
              secondQualifiedOrUnqualifiedMetastatementMetastatementNode = second(qualifiedOrUnqualifiedMetastatementMetastatementNodes);

        const metastatementNodeA = secondRuleSubproofAssertionMetastatementNode, ///
              metastatementNodeB = secondQualifiedOrUnqualifiedMetastatementMetastatementNode, ///
              nonTerminalNodeMatchesModuloBrackets = matchMetastatementNodeModuloBrackets(metastatementNodeA, metastatementNodeB);

        matchesRuleSubproofAssertion = nonTerminalNodeMatchesModuloBrackets; ///
      }
    }

    return matchesRuleSubproofAssertion;
  }

  static fromRuleSubproofNode(ruleSubproofNode) {
    const metastatementNode = null,
          metaProofStep = new MetaproofStep(ruleSubproofNode, metastatementNode);

    return metaProofStep;
  }

  static fromMetastatementNode(metastatementNode) {
    const ruleSubproofNode = null,
          metaProofStep = new MetaproofStep(ruleSubproofNode, metastatementNode);

    return metaProofStep;
  }
}
