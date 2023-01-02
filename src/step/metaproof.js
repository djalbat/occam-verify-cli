"use strict";

import { first, second } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";

import { matchTopmostMetaAssertionMetastatementNode } from "../utilities/metaAssertion";

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
      const topmostMetastatementNode = metastatementNode, ///
            topmostMetaAssertionMetastatementNode = this.metastatementNode,  ///
            topmostMetaAssertionMetastatementNodeMatches = matchTopmostMetaAssertionMetastatementNode(topmostMetaAssertionMetastatementNode, topmostMetastatementNode),
            metastatementNodeMatches = topmostMetaAssertionMetastatementNodeMatches;  ///

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

      const topmostMetastatementNode = firstMetaSubproofAssertionMetastatementNode,  ///
            topmostMetaAssertionMetastatementNode = firstQualifiedOrUnqualifiedMetastatementMetastatementNode, ///
            topmostMetaAssertionMetastatementNodeMatches = matchTopmostMetaAssertionMetastatementNode(topmostMetaAssertionMetastatementNode, topmostMetastatementNode);

      if (topmostMetaAssertionMetastatementNodeMatches) {
        const secondMetaSubproofAssertionMetastatementNode = second(metaSubproofAssertionMetastatementNodes),
              secondQualifiedOrUnqualifiedMetastatementMetastatementNode = second(qualifiedOrUnqualifiedMetastatementMetastatementNodes);

        const topmostMetastatementNode = secondMetaSubproofAssertionMetastatementNode, ///
              topmostMetaAssertionMetastatementNode = secondQualifiedOrUnqualifiedMetastatementMetastatementNode, ///
              topmostMetaAssertionMetastatementNodeMatches = matchTopmostMetaAssertionMetastatementNode(topmostMetaAssertionMetastatementNode, topmostMetastatementNode);

        metaSubproofAssertionMatches = topmostMetaAssertionMetastatementNodeMatches; ///
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
