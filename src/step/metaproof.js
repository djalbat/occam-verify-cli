"use strict";

import { first, second } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { matchBracketedNonTerminalNode } from "../utilities/node";

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

  matchMetastatement(metastatementNode) {
    let metastatementMatches;

    const ruleSubproofAssertionNode = ruleSubproofAssertionNodeQuery(metastatementNode);

    if (ruleSubproofAssertionNode !== null) {
      const ruleSubproofAssertionMatches = this.matchRuleSubproofAssertion(ruleSubproofAssertionNode);

      metastatementMatches = ruleSubproofAssertionMatches;  ///
    } else {
      const metastatementsMatch = this.matchMetastatements(metastatementNode);

      metastatementMatches = metastatementsMatch; //
    }

    return metastatementMatches;
  }

  matchMetastatements(metastatementNode) {
    let metastatementsMatch = false;

    if (this.metastatementNode !== null) {
      const nonTerminalNodeA = metastatementNode, ///
            nonTerminalNodeB = this.metastatementNode,  ///
            bracketedNodeMatches = matchBracketedNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB),
            metastatementNodeMatches = bracketedNodeMatches;  ///

      return metastatementNodeMatches;
    }

    return metastatementsMatch;
  }

  matchRuleSubproofAssertion(ruleSubproofAssertionNode) {
    let ruleSubproofAssertionMatches = false;

    if (this.ruleSubproofNode !== null) {
      const ruleSubproofAssertionMetastatementNodes = metastatementNodesQuery(ruleSubproofAssertionNode),
            firstRuleSubproofAssertionMetastatementNode = first(ruleSubproofAssertionMetastatementNodes),
            qualifiedOrUnqualifiedMetastatementMetastatementNodes = qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery(this.ruleSubproofNode),
            firstQualifiedOrUnqualifiedMetastatementMetastatementNode = first(qualifiedOrUnqualifiedMetastatementMetastatementNodes);

      const nonTerminalNodeA = firstRuleSubproofAssertionMetastatementNode,  ///
            nonTerminalNodeB = firstQualifiedOrUnqualifiedMetastatementMetastatementNode, ///
            bracketedNodeMatches = matchBracketedNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB);

      if (bracketedNodeMatches) {
        const secondRuleSubproofAssertionMetastatementNode = second(ruleSubproofAssertionMetastatementNodes),
              secondQualifiedOrUnqualifiedMetastatementMetastatementNode = second(qualifiedOrUnqualifiedMetastatementMetastatementNodes);

        const nonTerminalNodeA = secondRuleSubproofAssertionMetastatementNode, ///
              nonTerminalNodeB = secondQualifiedOrUnqualifiedMetastatementMetastatementNode, ///
              bracketedNodeMatches = matchBracketedNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB);

        ruleSubproofAssertionMatches = bracketedNodeMatches; ///
      }
    }

    return ruleSubproofAssertionMatches;
  }

  static fromRuleSubproofNode(ruleSubproofNode) {
    const metastatementNode = null,
          metaProofStep = new MetaproofStep(ruleSubproofNode, ruleSubproofNode, metastatementNode);

    return metaProofStep;
  }

  static fromMetastatementNode(metastatementNode) {
    const ruleSubproofNode = null,
          metaProofStep = new MetaproofStep(ruleSubproofNode, metastatementNode);

    return metaProofStep;
  }
}
