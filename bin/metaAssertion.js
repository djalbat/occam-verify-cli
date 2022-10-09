"use strict";

const { nodeQuery } = require("./utilities/query");

const metastatementNodeQuery = nodeQuery("/*/metastatement!");

class MetaAssertion {
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

    if ((metastatementNode !== null) && (this.metastatementNode !== null)) {
      const nonTerminalNode = this.metastatementNode, ///
            metaAssertionNonTerminalNode = metastatementNode, ///
            metaAssertionNonTerminalNodeMatches = matchMetaAssertionNonTerminalNode(metaAssertionNonTerminalNode, nonTerminalNode);

      matches = metaAssertionNonTerminalNodeMatches;  ///
    }

    return matches;
  }

  static fromMetaSubproofNode(metaSubproofNode) {
    const metastatementNode = null,
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

module.exports = MetaAssertion;

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

function matchMetaAssertionChildNodes(metaAssertionChildNodes, childNodes) {
  let metaAssertionChildNodesMatches = false;

  const childNodesLength = childNodes.length,
      metaAssertionChildNodesLength = metaAssertionChildNodes.length;

  if (childNodesLength === metaAssertionChildNodesLength) {
    metaAssertionChildNodesMatches = childNodes.every((childNode, index) => {
      const metaAssertionChildNode = metaAssertionChildNodes[index],
            metaAssertionNode = metaAssertionChildNode, ///
            node = childNode, ///
            metaAssertionNodeMatches = matchMetaAssertionNode(metaAssertionNode, node);

      if (metaAssertionNodeMatches) {
        return true;
      }
    })
  }

  return metaAssertionChildNodesMatches;
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
          metaAssertionChildNodes = metaAssertionNonTerminalNode.getChildNodes(),
          metaAssertionChildNodesMatches = matchMetaAssertionChildNodes(metaAssertionChildNodes, childNodes);

    metaAssertionNonTerminalNodeMatches = metaAssertionChildNodesMatches; ///
  }

  return metaAssertionNonTerminalNodeMatches;
}
