"use strict";

import { first, second } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { matchBracketedNonTerminalNode } from "../utilities/node";

const metastatementNodesQuery = nodesQuery("/metaSubproofAssertion/metastatement"),
      metaSubproofAssertionNodeQuery = nodeQuery("/metastatement/metaSubproofAssertion"),
      qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery = nodesQuery("/metaSubproof/qualifiedMetastatement|unqualifiedMetastatement/metastatement!");

export default class MetaproofStep {
  constructor(metaSubproofNode, metastatementNode) {
    this.metaSubproofNode = metaSubproofNode;
    this.metastatementNode = metastatementNode;
  }

  getMetaSubproofNode() {
    return this.metaSubproofNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchMetastatement(metastatementNode) {
    let metastatementMatches;

    const metaSubproofAssertionNode = metaSubproofAssertionNodeQuery(metastatementNode);

    if (metaSubproofAssertionNode !== null) {
      const metaSubproofAssertionMatches = this.matchMetaSubproofAssertion(metaSubproofAssertionNode);

      metastatementMatches = metaSubproofAssertionMatches;  ///
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

  matchMetaSubproofAssertion(metaSubproofAssertionNode) {
    let metaSubproofAssertionMatches = false;

    if (this.metaSubproofNode !== null) {
      const metaSubproofAssertionMetastatementNodes = metastatementNodesQuery(metaSubproofAssertionNode),
            firstMetaSubproofAssertionMetastatementNode = first(metaSubproofAssertionMetastatementNodes),
            qualifiedOrUnqualifiedMetastatementMetastatementNodes = qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery(this.metaSubproofNode),
            firstQualifiedOrUnqualifiedMetastatementMetastatementNode = first(qualifiedOrUnqualifiedMetastatementMetastatementNodes);

      const nonTerminalNodeA = firstMetaSubproofAssertionMetastatementNode,  ///
            nonTerminalNodeB = firstQualifiedOrUnqualifiedMetastatementMetastatementNode, ///
            bracketedNodeMatches = matchBracketedNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB);

      if (bracketedNodeMatches) {
        const secondMetaSubproofAssertionMetastatementNode = second(metaSubproofAssertionMetastatementNodes),
              secondQualifiedOrUnqualifiedMetastatementMetastatementNode = second(qualifiedOrUnqualifiedMetastatementMetastatementNodes);

        const nonTerminalNodeA = secondMetaSubproofAssertionMetastatementNode, ///
              nonTerminalNodeB = secondQualifiedOrUnqualifiedMetastatementMetastatementNode, ///
              bracketedNodeMatches = matchBracketedNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB);

        metaSubproofAssertionMatches = bracketedNodeMatches; ///
      }
    }

    return metaSubproofAssertionMatches;
  }

  static fromMetaSubproofNode(metaSubproofNode) {
    const metastatementNode = null,
          metaProofStep = new MetaproofStep(metaSubproofNode, metastatementNode);

    return metaProofStep;
  }

  static fromMetastatementNode(metastatementNode) {
    const metaSubproofNode = null,
          metaProofStep = new MetaproofStep(metaSubproofNode, metastatementNode);

    return metaProofStep;
  }
}