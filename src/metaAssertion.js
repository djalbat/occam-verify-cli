"use strict";

import { first, second } from "./utilities/array";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { matchBracketedMetastatementChildNode } from "./utilities/metastatement";

const metastatementNodeQuery = nodeQuery("/*/metastatement!"),
      metastatementNodesQuery = nodesQuery("/metaSubproofAssertion/metastatement"),
      metaSubproofAssertionNodeQuery = nodeQuery("/metastatement/metaSubproofAssertion"),
      qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery = nodesQuery("/metaSubproof/qualifiedMetastatement|unqualifiedMetastatement/metastatement!");

export default class MetaAssertion {
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

  match(metaAssertion) {
    let matches = false;

    const metastatementNode = metaAssertion.getMetastatementNode();

    if (metastatementNode !== null) {
      const metaSubproofAssertionNode = metaSubproofAssertionNodeQuery(metastatementNode);

      if (metaSubproofAssertionNode === null) {
        const metastatementNodeMatches = this.matchMetastatementNode(metastatementNode);

        matches = metastatementNodeMatches;  ///
      } else {
        const metaSubproofAssertionNodeMatches = this.matchMetaSubproofAssertionNode(metaSubproofAssertionNode);

        matches = metaSubproofAssertionNodeMatches; ///
      }
    }

    return matches;
  }

  matchMetastatementNode(metastatementNode) {
    let metastatementNodeMatches = false;

    if (this.metastatementNode !== null) {
      const topmostMetastatementNode = metastatementNode, ///
            topmostMetaAssertionMetastatementNode = this.metastatementNode,  ///
            topmostMetaAssertionMetastatementNodeMatches = matchTopmostMetaAssertionMetastatementNode(topmostMetaAssertionMetastatementNode, topmostMetastatementNode);

      metastatementNodeMatches = topmostMetaAssertionMetastatementNodeMatches;  ///
    }

    return metastatementNodeMatches;
  }

  matchMetaSubproofAssertionNode(metaSubproofAssertionNode) {
    let metaSubproofAssertionNodeMatches = false;

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

        metaSubproofAssertionNodeMatches = topmostMetaAssertionMetastatementNodeMatches; ///
      }
    }

    return metaSubproofAssertionNodeMatches;
  }

  static fromMetaSubproofNode(metaSubproofNode) {
    const metastatementNode = null,
          metaAssertion = new MetaAssertion(metaSubproofNode, metastatementNode);

    return metaAssertion;
  }

  static fromMetastatementNode(metastatementNode) {
    const metaSubproofNode = null,
          metaAssertion = new MetaAssertion(metaSubproofNode, metastatementNode);

    return metaAssertion;
  }

  static fromQualifiedMetastatementNode(qualifiedMetastatementNode) {
    const metaSubproofNode = null,
          metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
          metaAssertion = new MetaAssertion(metaSubproofNode, metastatementNode);

    return metaAssertion;
  }

  static fromUnqualifiedMetastatementNode(unqualifiedMetastatementNode) {
    const metaSubproofNode = null,
          metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
          metaAssertion = new MetaAssertion(metaSubproofNode, metastatementNode);

    return metaAssertion;
  }
}

function matchMetaAssertionNode(metaAssertionNode, node) {
  let metaAssertionNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = metaAssertionNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            metaAssertionTerminalNode = metaAssertionNode,  ///
            metaAssertionTerminalNodeMatches = matchMetaAssertionTerminalNode(metaAssertionTerminalNode, terminalNode);

      metaAssertionNodeMatches = metaAssertionTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            metaAssertionNonTerminalNode = metaAssertionNode,  ///
            metaAssertionNonTerminalNodeMatches = matchMetaAssertionNonTerminalNode(metaAssertionNonTerminalNode, nonTerminalNode);

      metaAssertionNodeMatches = metaAssertionNonTerminalNodeMatches; ///
    }
  }

  return metaAssertionNodeMatches;
}

function matchMetaAssertionNodes(metaAssertionNodes, nodes) {
  let metaAssertionNodesMatches = false;

  const nodesLength = nodes.length,
        metaAssertionNodesLength = metaAssertionNodes.length;

  if (nodesLength === metaAssertionNodesLength) {
    metaAssertionNodesMatches = nodes.every((node, index) => {
      const metaAssertionNode = metaAssertionNodes[index],
            metaAssertionNodeMatches = matchMetaAssertionNode(metaAssertionNode, node);

      if (metaAssertionNodeMatches) {
        return true;
      }
    });
  }

  return metaAssertionNodesMatches;
}

function matchMetaAssertionTerminalNode(metaAssertionTerminalNode, terminalNode) {
  let metaAssertionTerminalNodeMatches = false;

  const matches = metaAssertionTerminalNode.match(terminalNode);

  if (matches) {
    metaAssertionTerminalNodeMatches = true;
  }

  return metaAssertionTerminalNodeMatches;
}

function matchMetaAssertionNonTerminalNode(metaAssertionNonTerminalNode, nonTerminalNode) {
  let metaAssertionNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        metaAssertionRuleName = metaAssertionNonTerminalNode.getRuleName(); ///

  if (ruleName === metaAssertionRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          nodes = childNodes, ///
          metaAssertionChildNodes = metaAssertionNonTerminalNode.getChildNodes(),
          metaAssertionNodes = metaAssertionChildNodes, ///
          metaAssertionNodesMatches = matchMetaAssertionNodes(metaAssertionNodes, nodes);

    metaAssertionNonTerminalNodeMatches = metaAssertionNodesMatches;  ///
  }

  return metaAssertionNonTerminalNodeMatches;
}

function matchMetaAssertionMetastatementNode(metaAssertionMetastatementNode, metastatementNode) {
  const nonTerminalNode = metastatementNode,  ///
        metaAssertionNonTerminalNode = metaAssertionMetastatementNode,  ///
        metaAssertionNonTerminalNodeMatches = matchMetaAssertionNonTerminalNode(metaAssertionNonTerminalNode, nonTerminalNode),
        metaAssertionMetastatementNodeNatches = metaAssertionNonTerminalNodeMatches;  ///

  return metaAssertionMetastatementNodeNatches;
}

function matchTopmostMetaAssertionMetastatementNode(topmostMetaAssertionMetastatementNode, topmostMetastatementNode) {
  let metaAssertionMetastatementNodeMatches;

  const metastatementNode = topmostMetastatementNode, ///
        metaAssertionMetastatementNode = topmostMetaAssertionMetastatementNode;  ///

  metaAssertionMetastatementNodeMatches = matchMetaAssertionMetastatementNode(metaAssertionMetastatementNode, metastatementNode);

  if (!metaAssertionMetastatementNodeMatches) {
    const nonTerminalNode = metastatementNode,  ///
          childNodes = nonTerminalNode, ///
          bracketedMetastatementChildNodeMatches = matchBracketedMetastatementChildNode(childNodes, (bracketedMetastatementChildNode) => {
            const metastatementNode = bracketedMetastatementChildNode,  ///
                  metaAssertionMetastatementNodeMatches = matchMetaAssertionMetastatementNode(metaAssertionMetastatementNode, metastatementNode),
                  bracketedMetastatementChildNodeMatches = metaAssertionMetastatementNodeMatches;

            return bracketedMetastatementChildNodeMatches;
          });

    metaAssertionMetastatementNodeMatches = bracketedMetastatementChildNodeMatches;  ///
  }

  if (!metaAssertionMetastatementNodeMatches) {
    const metaAssertionNonTerminalNode = metaAssertionMetastatementNode,  ///
          metaAssertionChildNodes = metaAssertionNonTerminalNode.getChildNodes(),
          bracketedMetaAssertionMetastatementChildNodeMatches = matchBracketedMetastatementChildNode(metaAssertionChildNodes, (bracketedMetaAssertionMetastatementChildNode) => {
            const metaAssertionMetastatementNode = bracketedMetaAssertionMetastatementChildNode,  ///
                  metaAssertionMetastatementNodeMatches = matchMetaAssertionMetastatementNode(metaAssertionMetastatementNode, metastatementNode),
                  bracketedMetaAssertionMetastatementChildNodeMatches = metaAssertionMetastatementNodeMatches;

            return bracketedMetaAssertionMetastatementChildNodeMatches;
          });

    metaAssertionMetastatementNodeMatches = bracketedMetaAssertionMetastatementChildNodeMatches;  ///
  }

  const topmostMetaAssertionMetastatementNodeMatches = metaAssertionMetastatementNodeMatches;  ///

  return topmostMetaAssertionMetastatementNodeMatches;
}
