"use strict";

import { matchBracketedMetastatementChildNode, bracketedMetastatementChildNodeFromChildNodes } from "./utilities/metaAssertion";

export default class MetaSubstitution {
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
    let matches;

    const metaSubstitutionNodes = this.nodes,  ///
          metaSubstitutionNonTerminalNodeMatches = matchMetaSubstitutionNodes(metaSubstitutionNodes, nodes);

    matches = metaSubstitutionNonTerminalNodeMatches;  ///

    if (!matches) {
      const childNodes = nodes, ///
            bracketedMetastatementChildNodeMatches = matchBracketedMetastatementChildNode(childNodes, (bracketedMetastatementChildNode) => {
              const nonTerminalNode = bracketedMetastatementChildNode,  ///
                    childNodes = nonTerminalNode.getChildNodes(),
                    nodes = childNodes, ///
                    metaAssertionNonTerminalNodeMatches = matchMetaSubstitutionNodes(metaSubstitutionNodes, nodes),
                    bracketedMetastatementChildNodeMatches = metaAssertionNonTerminalNodeMatches; ///

              return bracketedMetastatementChildNodeMatches;
            });

      matches = bracketedMetastatementChildNodeMatches; ///
    }

    return matches;
  }

  static fromMetavariableNameAndNodes(metavariableName, nodes) {
    const bracketedMetastatementChildNode = bracketedMetastatementChildNodeFromChildNodes(nodes);

    if (bracketedMetastatementChildNode !== null) {
      const nonTerminalNode = bracketedMetastatementChildNode,  ///
            childNodes = nonTerminalNode.getChildNodes();

      nodes = childNodes; ///
    }

    const metaSubstitution = new MetaSubstitution(metavariableName, nodes);

    return metaSubstitution;
  }
}

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
