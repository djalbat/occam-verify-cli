"use strict";

const { first, third, second } = require("./utilities/array"),
      { METASTATEMENT_RULE_NAME } = require("./ruleNames"),
      { BRACKETED_METASTATEMENT_CHILD_NODES_LENGTH, LEFT_BRACKET, RIGHT_BRACKET} = require("./constants");

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
    let matches;

    const metaSubstitutionNodes = this.nodes,  ///
          metaSubstitutionNonTerminalNodeMatches = matchMetaSubstitutionNodes(metaSubstitutionNodes, nodes);

    matches = metaSubstitutionNonTerminalNodeMatches;  ///

    if (!matches) {
      const metaSubstitutionNodesLength = metaSubstitutionNodes.length;

      if (metaSubstitutionNodesLength === BRACKETED_METASTATEMENT_CHILD_NODES_LENGTH) {
        const firstMetaSubstitutionNode = first(metaSubstitutionNodes),
              thirdMetaSubstitutionNode = third(metaSubstitutionNodes),
              secondMetaSubstitutionNode = second(metaSubstitutionNodes),
              firstMetaSubstitutionNodeTerminalNode = firstMetaSubstitutionNode.isTerminalNode(),
              thirdMetaSubstitutionNodeTerminalNode = thirdMetaSubstitutionNode.isTerminalNode(),
              secondMetaSubstitutionNodeNonTerminalNode = secondMetaSubstitutionNode.isNonTerminalNode();

        if (firstMetaSubstitutionNodeTerminalNode && secondMetaSubstitutionNodeNonTerminalNode && thirdMetaSubstitutionNodeTerminalNode) {
          const nonTerminalNode = secondMetaSubstitutionNode,  ///
                ruleName = nonTerminalNode.getRuleName(),
                ruleNameMetastatementRuleName = (ruleName === METASTATEMENT_RULE_NAME);

          if (ruleNameMetastatementRuleName) {
            const metastatementNode = nonTerminalNode,  ///
                  firstTerminalNode = firstMetaSubstitutionNode, ///
                  secondTerminalNode = thirdMetaSubstitutionNode,  ///
                  firstTerminalNodeContent = firstTerminalNode.getContent(),
                  secondTerminalNodeContent = secondTerminalNode.getContent(),
                  firstTerminalNodeContentLeftBracket = (firstTerminalNodeContent === LEFT_BRACKET),
                  secondTerminalNodeContentRightBracket = (secondTerminalNodeContent === RIGHT_BRACKET);

            if (firstTerminalNodeContentLeftBracket && secondTerminalNodeContentRightBracket) {
              const nonTerminalNode = metastatementNode,  ///
                    childNodes = nonTerminalNode.getChildNodes(),
                    metaSubstitutionNodes = childNodes, ///
                    metaAssertionNonTerminalNodeMatches = matchMetaSubstitutionNodes(metaSubstitutionNodes, nodes);

              matches = metaAssertionNonTerminalNodeMatches;  ///
            }
          }
        }
      }
    }

    return matches;
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
