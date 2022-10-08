"use strict";

class MetaSubstitution {
  constructor(metavariableName, nonTerminalNode) {
    this.metavariableName = metavariableName;
    this.nonTerminalNode = nonTerminalNode;
  }

  getMetavariableName() {
    return this.metavariableName;
  }

  getNonTerminalNode() {
    return this.nonTerminalNode;
  }

  matchNonTerminalNode(nonTerminalNode) {
    const metaSubstitutionNonTerminalNode = this.nonTerminalNode,
          metaSubstitutionNonTerminalNodeMatches = matchMetaSubstitutionNonTerminalNode(metaSubstitutionNonTerminalNode, nonTerminalNode),
          nonTerminalNodeMatches = metaSubstitutionNonTerminalNodeMatches;  ///

    return nonTerminalNodeMatches;
  }

  static fromMetavariableNameAndNonTerminalNode(metavariableName, nonTerminalNode) {
    const metaSubstitution = new MetaSubstitution(metavariableName, nonTerminalNode);

    return metaSubstitution;
  }
}

module.exports = MetaSubstitution;

function matchMetaSubstitutionNode(metaSubstitutionNode, node) {
  let metaSubstitutionNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = metaSubstitutionNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            metaSubstitutionTerminalNode = metaSubstitutionNode,  ///
            metaSubstitutionTerminalNodeMatches = matchMetaSubstitutionTerminalNode(metaSubstitutionTerminalNode, terminalNode);

      metaSubstitutionNodeMatches = metaSubstitutionTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            metaSubstitutionNonTerminalNode = metaSubstitutionNode,  ///
            metaSubstitutionNonTerminalNodeMatches = matchMetaSubstitutionNonTerminalNode(metaSubstitutionNonTerminalNode, nonTerminalNode);

      metaSubstitutionNodeMatches = metaSubstitutionNonTerminalNodeMatches; ///
    }
  }

  return metaSubstitutionNodeMatches;
}

function matchMetaSubstitutionChildNodes(metaSubstitutionChildNodes, childNodes) {
  let metaSubstitutionChildNodesMatches = false;

  const childNodesLength = childNodes.length,
        metaSubstitutionChildNodesLength = metaSubstitutionChildNodes.length;

  if (childNodesLength === metaSubstitutionChildNodesLength) {
    metaSubstitutionChildNodesMatches = childNodes.every((childNode, index) => {
      const metaSubstitutionChildNode = metaSubstitutionChildNodes[index],
            metaSubstitutionNode = metaSubstitutionChildNode, ///
            node = childNode, ///
            metaSubstitutionNodeMatches = matchMetaSubstitutionNode(metaSubstitutionNode, node);

      if (metaSubstitutionNodeMatches) {
        return true;
      }
    })
  }

  return metaSubstitutionChildNodesMatches;
}

function matchMetaSubstitutionTerminalNode(metaSubstitutionTerminalNode, terminalNode) {
  let metaSubstitutionTerminalNodeMatches = false;

  const matches = metaSubstitutionTerminalNode.match(terminalNode);

  if (matches) {
    metaSubstitutionTerminalNodeMatches = true;
  }

  return metaSubstitutionTerminalNodeMatches;
}

function matchMetaSubstitutionNonTerminalNode(metaSubstitutionNonTerminalNode, nonTerminalNode) {
  let metaSubstitutionNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        metaSubstitutionRuleName = metaSubstitutionNonTerminalNode.getRuleName(); ///

  if (ruleName === metaSubstitutionRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          metaSubstitutionChildNodes = metaSubstitutionNonTerminalNode.getChildNodes(),
          metaSubstitutionChildNodesMatches = matchMetaSubstitutionChildNodes(metaSubstitutionChildNodes, childNodes);

    metaSubstitutionNonTerminalNodeMatches = metaSubstitutionChildNodesMatches; ///
  }

  return metaSubstitutionNonTerminalNodeMatches;
}
