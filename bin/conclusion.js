"use strict";

const { METAVARIABLE_RULE_NAME } = require("./ruleNames"),
      { metavariableNameFromMetavariableNode } = require("./utilities/query");

class Conclusion {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchNonTerminalNode(metastatementNode, metaSubstitutions) {
    const nonTerminalNode = metastatementNode,  ///
          conclusionNonTerminalNode = this.metastatementNode,  ///
          conclusionNonTerminalNodeMatches = matchConclusionNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, metaSubstitutions),
          nonTerminalNodeMatches = conclusionNonTerminalNodeMatches; ///

    return nonTerminalNodeMatches;
  }

  static fromMetastatementNode(metastatementNode) {
    const conclusion = new Conclusion(metastatementNode);

    return conclusion;
  }
}

module.exports = Conclusion;

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

function matchConclusionChildNodes(conclusionChildNodes, childNodes, metaSubstitutions) {
  let conclusionChildNodesMatches = false;

  const childNodesLength = childNodes.length,
        conclusionChildNodesLength = conclusionChildNodes.length;

  if (childNodesLength === conclusionChildNodesLength) {
    conclusionChildNodesMatches = childNodes.every((childNode, index) => {
      const conclusionChildNode = conclusionChildNodes[index],
            conclusionNode = conclusionChildNode, ///
            node = childNode, ///
            conclusionNodeMatches = matchConclusionNode(conclusionNode, node, metaSubstitutions);

      if (conclusionNodeMatches) {
        return true;
      }
    })
  }

  return conclusionChildNodesMatches;
}

function matchConclusionMetavariable(conclusionMetavariableNode, nonTerminalNode, metaSubstitutions) {
  let conclusionMetavariableMatches = true;

  const conclusionMetavariableName = metavariableNameFromMetavariableNode(conclusionMetavariableNode),
        metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
          const metavariableName = metaSubstitution.getMetavariableName();

          if (metavariableName === conclusionMetavariableName) {
            return true;
          }
        }) || null;

  if (metaSubstitution !== null) {
    const metaSubstitutionNonTerminalNodeMatches = metaSubstitution.matchNonTerminalNode(nonTerminalNode);

    conclusionMetavariableMatches = metaSubstitutionNonTerminalNodeMatches;  ///
  }

  return conclusionMetavariableMatches;
}

function matchConclusionTerminalNode(conclusionTerminalNode, terminalNode, metaSubstitutions) {
  let conclusionTerminalNodeMatches = false;

  const matches = conclusionTerminalNode.match(terminalNode);

  if (matches) {
    conclusionTerminalNodeMatches = true;
  }

  return conclusionTerminalNodeMatches;
}

function matchConclusionNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, metaSubstitutions) {
  let conclusionNonTerminalNodeMatches = false;

  const conclusionRuleName = conclusionNonTerminalNode.getRuleName(); ///

  switch (conclusionRuleName) {
    case METAVARIABLE_RULE_NAME: {
      const conclusionMetavariableNode = conclusionNonTerminalNode, ///
            conclusionMetavariableMatches = matchConclusionMetavariable(conclusionMetavariableNode, nonTerminalNode, metaSubstitutions);

      conclusionNonTerminalNodeMatches = conclusionMetavariableMatches;

      break;
    }

    default: {
      const ruleName = nonTerminalNode.getRuleName();

      if (ruleName === conclusionRuleName) {
        const childNodes = nonTerminalNode.getChildNodes(),
              conclusionChildNodes = conclusionNonTerminalNode.getChildNodes(),
              conclusionChildNodesMatches = matchConclusionChildNodes(conclusionChildNodes, childNodes, metaSubstitutions);

        conclusionNonTerminalNodeMatches = conclusionChildNodesMatches; ///
      }
    }
  }

  return conclusionNonTerminalNodeMatches;
}
