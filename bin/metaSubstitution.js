"use strict";

class MetaSubstitution {
  constructor(metavariableName, nodes) {
    this.metavariableName = metavariableName;
    this.nodes = nodes;
  }

  getMetavariableName() {
    return this.metavariableName;
  }

  getNodes() {
    return this.nodes;
  }

  matchNodes(nodes) {
    const metaSubstitutionNodes = this.nodes,  ///
          metaSubstitutionNonTerminalNodeMatches = matchMetaSubstitutionNodes(metaSubstitutionNodes, nodes),
          nonTerminalNodeMatches = metaSubstitutionNonTerminalNodeMatches;  ///

    return nonTerminalNodeMatches;
  }

  static fromMetavariableNameAndNodes(metavariableName, nodes) {
    const metaSubstitution = new MetaSubstitution(metavariableName, nodes);

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

function matchMetaSubstitutionNodes(metaSubstitutionNodes, nodes) {
  let metaSubstitutionNodesMatches = false;

  const nodesLength = nodes.length,
        metaSubstitutionNodesLength = metaSubstitutionNodes.length;

  if (nodesLength === metaSubstitutionNodesLength) {
    metaSubstitutionNodesMatches = nodes.every((node, index) => {
      const metaSubstitutionNode = metaSubstitutionNodes[index],
            metaSubstitutionNodeMatches = matchMetaSubstitutionNode(metaSubstitutionNode, node);

      if (metaSubstitutionNodeMatches) {
        return true;
      }
    })
  }

  return metaSubstitutionNodesMatches;
}

function matchMetaSubstitutionTerminalNode(metaSubstitutionTerminalNode, terminalNode) {
  const matches = metaSubstitutionTerminalNode.match(terminalNode),
        metaSubstitutionTerminalNodeMatches = matches;  ///

  return metaSubstitutionTerminalNodeMatches;
}

function matchMetaSubstitutionNonTerminalNode(metaSubstitutionNonTerminalNode, nonTerminalNode) {
  let metaSubstitutionNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        metaSubstitutionRuleName = metaSubstitutionNonTerminalNode.getRuleName(); ///

  if (ruleName === metaSubstitutionRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          metaSubstitutionChildNodes = metaSubstitutionNonTerminalNode.getChildNodes(),
          nodes = childNodes, ///
          metaSubstitutionNodes = metaSubstitutionChildNodes, ///
          metaSubstitutionNodesMatches = matchMetaSubstitutionNodes(metaSubstitutionNodes, nodes);

    metaSubstitutionNonTerminalNodeMatches = metaSubstitutionNodesMatches; ///
  }

  return metaSubstitutionNonTerminalNodeMatches;
}
