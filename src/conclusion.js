"use strict";

import { first } from "./utilities/array";
import { nodeAsString } from "./utilities/string";
import { metavariableNameFromMetavariableNode } from "./utilities/query";
import { metastatementNodeFromMetastatementString } from "./utilities/string";
import { STATEMENT_RULE_NAME, METASTATEMENT_RULE_NAME, METAVARIABLE_RULE_NAME } from "./ruleNames";

export default class Conclusion {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchStatementNode(statementNode, substitutions) {
    const nonTerminalNode = statementNode,  ///
          conclusionNonTerminalNode = this.metastatementNode,  ///
          conclusionNonTerminalNodeMatches = matchConclusionNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, substitutions),
          statementNodeMatches = conclusionNonTerminalNodeMatches; ///

    return statementNodeMatches;
  }

  matchMetastatementNode(metastatementNode, metaSubstitutions) {
    const nonTerminalNode = metastatementNode,  ///
          conclusionNonTerminalNode = this.metastatementNode,  ///
          conclusionNonTerminalNodeMatches = metaMatchConclusionNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, metaSubstitutions),
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

  static fromJSON(json, releaseContext) {
    const { metastatement } = json,
          metastatementString = metastatement,  ///
          metastatementNode = metastatementNodeFromMetastatementString(metastatementString, releaseContext),
          conclusion = new Conclusion(metastatementNode);

    return conclusion;
  }

  static fromMetastatementNode(metastatementNode) {
    const conclusion = new Conclusion(metastatementNode);

    return conclusion;
  }
}

function matchConclusionNode(conclusionNode, node, substitutions) {
  let conclusionNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = conclusionNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            conclusionTerminalNode = conclusionNode,  ///
            conclusionTerminalNodeMatches = matchConclusionTerminalNode(conclusionTerminalNode, terminalNode, substitutions);

      conclusionNodeMatches = conclusionTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            conclusionNonTerminalNode = conclusionNode,  ///
            conclusionNonTerminalNodeMatches = matchConclusionNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, substitutions);

      conclusionNodeMatches = conclusionNonTerminalNodeMatches; ///
    }
  }

  return conclusionNodeMatches;
}

function matchConclusionNodes(conclusionNodes, nodes, metaSubstitutions) {
  let conclusionNodesMatch = false;

  const nodesLength = nodes.length,
        conclusionNodesLength = conclusionNodes.length;

  if (nodesLength === conclusionNodesLength) {
    conclusionNodesMatch = nodes.every((node, index) => {
      const conclusionNode = conclusionNodes[index],
            conclusionNodeMatches = matchConclusionNode(conclusionNode, node, metaSubstitutions);

      if (conclusionNodeMatches) {
        return true;
      }
    });
  }

  return conclusionNodesMatch;
}

function matchConclusionTerminalNode(conclusionTerminalNode, terminalNode, substitutions) {
  const matches = conclusionTerminalNode.match(terminalNode),
        conclusionTerminalNodeMatches = matches;  ///

  return conclusionTerminalNodeMatches;
}

function matchConclusionNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, substitutions) {
  let conclusionNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        childNodes = nonTerminalNode.getChildNodes(),
        conclusionNonTerminalNodeRuleName = conclusionNonTerminalNode.getRuleName(),
        conclusionNonTerminalNodeChildNodes = conclusionNonTerminalNode.getChildNodes(),
        nodes = childNodes, ///
        conclusionNodes = conclusionNonTerminalNodeChildNodes, ///
        ruleNameStatementRuleName = (ruleName === STATEMENT_RULE_NAME),
        conclusionNonTerminalNodeRuleNameMetastatementRuleName = (conclusionNonTerminalNodeRuleName === METASTATEMENT_RULE_NAME);

  if (ruleNameStatementRuleName && conclusionNonTerminalNodeRuleNameMetastatementRuleName) {
    const statementNode = nonTerminalNode,  ///
          conclusionMetastatementNode = conclusionNonTerminalNode,  ///
          conclusionMetastatementNodeMatches = matchConclusionMetastatementNode(conclusionMetastatementNode, statementNode, substitutions);

    if (conclusionMetastatementNodeMatches) {
      conclusionNonTerminalNodeMatches = true; ///
    } else {
      const conclusionNonTerminalNodeChildNodesMatches = matchConclusionNodes(conclusionNodes, nodes, substitutions);

      conclusionNonTerminalNodeMatches = conclusionNonTerminalNodeChildNodesMatches; ///
    }
  } else if (ruleName === conclusionNonTerminalNodeRuleName) {
    const conclusionNonTerminalNodeChildNodesMatches = matchConclusionNodes(conclusionNodes, nodes, substitutions);

    conclusionNonTerminalNodeMatches = conclusionNonTerminalNodeChildNodesMatches; ///
  }

  return conclusionNonTerminalNodeMatches;
}

function matchConclusionMetavariableNode(conclusionMetavariableNode, statementNode, substitutions) {
  let conclusionMetavariableNodeMatches = true;

  const conclusionMetavariableName = metavariableNameFromMetavariableNode(conclusionMetavariableNode),
        substitution = substitutions.find((substitution) => {
          const metavariableName = substitution.getMetavariableName();

          if (metavariableName === conclusionMetavariableName) {
            return true;
          }
        }) || null;

  if (substitution !== null) {
    const substitutionNodesMatch = substitution.matchStatementNode(statementNode);

    conclusionMetavariableNodeMatches = substitutionNodesMatch;  ///
  }

  return conclusionMetavariableNodeMatches;
}

function matchConclusionMetastatementNode(conclusionMetastatementNode, statementNode, substitutions) {
  let conclusionMetastatementNodeMatches = false;

  const conclusionNonTerminalNode = conclusionMetastatementNode,  ///
        conclusionNonTerminalNodeChildNodes = conclusionNonTerminalNode.getChildNodes(),
        conclusionNonTerminalNodeChildNodesLength = conclusionNonTerminalNodeChildNodes.length;

  if (conclusionNonTerminalNodeChildNodesLength === 1) {
    const firstConclusionChildNode = first(conclusionNonTerminalNodeChildNodes),
          conclusionChildNode = firstConclusionChildNode,  ///
          conclusionChildNodeNonTerminalNode = conclusionChildNode.isNonTerminalNode();

    if (conclusionChildNodeNonTerminalNode) {
      const conclusionNonTerminalChildNode = conclusionChildNode,  ///
            conclusionNonTerminalChildNodeRuleName = conclusionNonTerminalChildNode.getRuleName(),
            conclusionNonTerminalChildNodeRuleNameMetavariableRuleName = (conclusionNonTerminalChildNodeRuleName === METAVARIABLE_RULE_NAME);

      if (conclusionNonTerminalChildNodeRuleNameMetavariableRuleName) {
        const conclusionMetavariableNode = conclusionNonTerminalChildNode,  ///
              conclusionMetavariableNodeMatches = matchConclusionMetavariableNode(conclusionMetavariableNode, statementNode, substitutions);

        conclusionMetastatementNodeMatches = conclusionMetavariableNodeMatches; ///
      }
    }
  }

  return conclusionMetastatementNodeMatches;
}

function metaMatchConclusionNode(conclusionNode, node, metaSubstitutions) {
  let conclusionNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = conclusionNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            conclusionTerminalNode = conclusionNode,  ///
            conclusionTerminalNodeMatches = metaMatchConclusionTerminalNode(conclusionTerminalNode, terminalNode, metaSubstitutions);

      conclusionNodeMatches = conclusionTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            conclusionNonTerminalNode = conclusionNode,  ///
            conclusionNonTerminalNodeMatches = metaMatchConclusionNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, metaSubstitutions);

      conclusionNodeMatches = conclusionNonTerminalNodeMatches; ///
    }
  }

  return conclusionNodeMatches;
}

function metaMatchConclusionNodes(conclusionNodes, nodes, metaSubstitutions) {
  let conclusionNodesMatch = false;

  const nodesLength = nodes.length,
        conclusionNodesLength = conclusionNodes.length;

  if (nodesLength === conclusionNodesLength) {
    conclusionNodesMatch = nodes.every((node, index) => {
      const conclusionNode = conclusionNodes[index],
            conclusionNodeMatches = metaMatchConclusionNode(conclusionNode, node, metaSubstitutions);

      if (conclusionNodeMatches) {
        return true;
      }
    });
  }

  return conclusionNodesMatch;
}

function metaMatchConclusionTerminalNode(conclusionTerminalNode, terminalNode, metaSubstitutions) {
  const matches = conclusionTerminalNode.match(terminalNode),
        conclusionTerminalNodeMatches = matches;  ///

  return conclusionTerminalNodeMatches;
}

function metaMatchConclusionNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, metaSubstitutions) {
  let conclusionNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        conclusionNonTerminalNodeRuleName = conclusionNonTerminalNode.getRuleName();

  if (ruleName === conclusionNonTerminalNodeRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          conclusionNonTerminalNodeChildNodes = conclusionNonTerminalNode.getChildNodes(),
          nodes = childNodes, ///
          conclusionNodes = conclusionNonTerminalNodeChildNodes, ///
          conclusionNonTerminalNodeChildNodesMatches = metaMatchConclusionNodes(conclusionNodes, nodes, metaSubstitutions);

    conclusionNonTerminalNodeMatches = conclusionNonTerminalNodeChildNodesMatches; ///

    if (!conclusionNonTerminalNodeMatches) {
      const ruleNameMetastatementRuleName = (ruleName === METASTATEMENT_RULE_NAME);

      if (ruleNameMetastatementRuleName) {
        const metastatementNode = nonTerminalNode,  ///
              conclusionMetastatementNode = conclusionNonTerminalNode,  ///
              conclusionMetastatementNodeMatches = metaMatchConclusionMetastatementNode(conclusionMetastatementNode, metastatementNode, metaSubstitutions);

        conclusionNonTerminalNodeMatches = conclusionMetastatementNodeMatches; ///
      }
    }
  }

  return conclusionNonTerminalNodeMatches;
}

function metaMatchConclusionMetavariableNode(conclusionMetavariableNode, metastatementNode, metaSubstitutions) {
  let conclusionMetavariableNodeMatches = true;

  const conclusionMetavariableName = metavariableNameFromMetavariableNode(conclusionMetavariableNode),
        metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
      const metavariableName = metaSubstitution.getMetavariableName();

      if (metavariableName === conclusionMetavariableName) {
        return true;
      }
    }) || null;

  if (metaSubstitution !== null) {
    const metaSubstitutionNodesMatch = metaSubstitution.matchMetastatementNode(metastatementNode);

    conclusionMetavariableNodeMatches = metaSubstitutionNodesMatch;  ///
  }

  return conclusionMetavariableNodeMatches;
}

function metaMatchConclusionMetastatementNode(conclusionMetastatementNode, metastatementNode, metaSubstitutions) {
  let conclusionMetastatementNodeMatches = false;

  const conclusionNonTerminalNode = conclusionMetastatementNode,  ///
        conclusionNonTerminalNodeChildNodes = conclusionNonTerminalNode.getChildNodes(),
        conclusionNonTerminalNodeChildNodesLength = conclusionNonTerminalNodeChildNodes.length;

  if (conclusionNonTerminalNodeChildNodesLength === 1) {
    const firstConclusionChildNode = first(conclusionNonTerminalNodeChildNodes),
          conclusionChildNode = firstConclusionChildNode,  ///
          conclusionChildNodeNonTerminalNode = conclusionChildNode.isNonTerminalNode();

    if (conclusionChildNodeNonTerminalNode) {
      const conclusionNonTerminalChildNode = conclusionChildNode,  ///
            conclusionNonTerminalChildNodeRuleName = conclusionNonTerminalChildNode.getRuleName(),
            conclusionNonTerminalChildNodeRuleNameMetavariableRuleName = (conclusionNonTerminalChildNodeRuleName === METAVARIABLE_RULE_NAME);

      if (conclusionNonTerminalChildNodeRuleNameMetavariableRuleName) {
        const conclusionMetavariableNode = conclusionNonTerminalChildNode,  ///
              conclusionMetavariableNodeMatches = metaMatchConclusionMetavariableNode(conclusionMetavariableNode, metastatementNode, metaSubstitutions);

        conclusionMetastatementNodeMatches = conclusionMetavariableNodeMatches; ///
      }
    }
  }

  return conclusionMetastatementNodeMatches;
}
