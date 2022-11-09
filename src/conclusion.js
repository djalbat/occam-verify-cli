"use strict";

import { first } from "./utilities/array";
import { nodeAsString } from "./utilities/string";
import { metavariableNameFromMetavariableNode } from "./utilities/query";
import { METAVARIABLE_RULE_NAME, METASTATEMENT_RULE_NAME } from "./ruleNames";

export default class Conclusion {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchMetastatementNode(metastatementNode, metaSubstitutions) {
    const nonTerminalNode = metastatementNode,  ///
          conclusionNonTerminalNode = this.metastatementNode,  ///
          conclusionNonTerminalNodeMatches = matchConclusionNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, metaSubstitutions),
          metastatementNodeMatches = conclusionNonTerminalNodeMatches; ///

    return metastatementNodeMatches;
  }

  toJSON() {
    const metastatementString = nodeAsString(this.metastatementNode),
          metastatement = metastatementString,  ///
          json = {
            metastatement
          };

    return json;
  }

  static fromJSON(json, callback) {
    const { metastatement } = json,
          ruleName = METASTATEMENT_RULE_NAME,
          content = metastatement,  ///
          node = callback(content, ruleName),
          metastatementNode = node, ///
          conclusion = new Conclusion(metastatementNode);

    return conclusion;
  }

  static fromMetastatementNode(metastatementNode) {
    const conclusion = new Conclusion(metastatementNode);

    return conclusion;
  }
}

function matchConclusionNode(conclusionNode, node, metaSubstitutions) {
  let conclusionNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = conclusionNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            conclusionTerminalNode = conclusionNode,  ///
            conclusionTerminalNodeMatches = matchConclusionTerminalNode(conclusionTerminalNode, terminalNode, metaSubstitutions);

      conclusionNodeMatches = conclusionTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            conclusionNonTerminalNode = conclusionNode,  ///
            conclusionNonTerminalNodeMatches = matchConclusionNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, metaSubstitutions);

      conclusionNodeMatches = conclusionNonTerminalNodeMatches; ///
    }
  }

  return conclusionNodeMatches;
}

function matchConclusionNodes(conclusionNodes, nodes, metaSubstitutions) {
  let conclusionNodesMatches = false;

  const nodesLength = nodes.length,
        conclusionNodesLength = conclusionNodes.length;

  if (nodesLength === conclusionNodesLength) {
    conclusionNodesMatches = nodes.every((node, index) => {
      const conclusionNode = conclusionNodes[index],
            conclusionNodeMatches = matchConclusionNode(conclusionNode, node, metaSubstitutions);

      if (conclusionNodeMatches) {
        return true;
      }
    });
  }

  return conclusionNodesMatches;
}

function matchConclusionMetavariable(conclusionMetavariableNode, nodes, metaSubstitutions) {
  let conclusionMetavariableMatches = true;

  const conclusionMetavariableName = metavariableNameFromMetavariableNode(conclusionMetavariableNode),
        metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
          const metavariableName = metaSubstitution.getMetavariableName();

          if (metavariableName === conclusionMetavariableName) {
            return true;
          }
        }) || null;

  if (metaSubstitution !== null) {
    const metaSubstitutionNodesMatch = metaSubstitution.matchNodes(nodes);

    conclusionMetavariableMatches = metaSubstitutionNodesMatch;  ///
  }

  return conclusionMetavariableMatches;
}

function matchConclusionTerminalNode(conclusionTerminalNode, terminalNode, metaSubstitutions) {
  const matches = conclusionTerminalNode.match(terminalNode),
        conclusionTerminalNodeMatches = matches;  ///

  return conclusionTerminalNodeMatches;
}

function matchConclusionNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, metaSubstitutions) {
  let conclusionNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        conclusionRuleName = conclusionNonTerminalNode.getRuleName(); ///

  if (ruleName === conclusionRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          conclusionChildNodes = conclusionNonTerminalNode.getChildNodes(),
          nodes = childNodes, ///
          conclusionNodes = conclusionChildNodes, ///
          conclusionChildNodesMatches = matchConclusionNodes(conclusionNodes, nodes, metaSubstitutions);

    conclusionNonTerminalNodeMatches = conclusionChildNodesMatches; ///

    if (!conclusionNonTerminalNodeMatches) {
      const ruleNameMetastatementRuleName = (ruleName === METASTATEMENT_RULE_NAME);

      if (ruleNameMetastatementRuleName) {
        const metastatementNode = nonTerminalNode,  ///
              conclusionMetastatementNode = conclusionNonTerminalNode,  ///
              conclusionMetastatementNodeMatches = matchConclusionMetastatementNode(conclusionMetastatementNode, metastatementNode, metaSubstitutions);

        conclusionNonTerminalNodeMatches = conclusionMetastatementNodeMatches; ///
      }
    }
  }

  return conclusionNonTerminalNodeMatches;
}

function matchConclusionMetastatementNode(conclusionMetastatementNode, metastatementNode, metaSubstitutions) {
  let conclusionMetastatementNodeMatches = false;

  const conclusionNonTerminalNode = conclusionMetastatementNode,  ///
        conclusionChildNodes = conclusionNonTerminalNode.getChildNodes(),
        conclusionChildNodesLength = conclusionChildNodes.length;

  if (conclusionChildNodesLength === 1) {
    const firstConclusionChildNode = first(conclusionChildNodes),
          conclusionChildNode = firstConclusionChildNode,  ///
          conclusionChildNodeNonTerminalNode = conclusionChildNode.isNonTerminalNode();

    if (conclusionChildNodeNonTerminalNode) {
      const conclusionNonTerminalChildNode = conclusionChildNode,  ///
            conclusionNonTerminalChildNodeRuleName = conclusionNonTerminalChildNode.getRuleName(),
            conclusionNonTerminalChildNodeRuleNameMetavariableRuleName = (conclusionNonTerminalChildNodeRuleName === METAVARIABLE_RULE_NAME);

      if (conclusionNonTerminalChildNodeRuleNameMetavariableRuleName) {
        const conclusionMetavariableNode = conclusionNonTerminalChildNode,  ///
              nonTerminalNode = metastatementNode,  ///
              childNodes = nonTerminalNode.getChildNodes(),
              nodes = childNodes, ///
              conclusionMetaVariableMatches = matchConclusionMetavariable(conclusionMetavariableNode, nodes, metaSubstitutions);

        conclusionMetastatementNodeMatches = conclusionMetaVariableMatches; ///
      }
    }
  }

  return conclusionMetastatementNodeMatches;
}
