"use strict";

import { first, second, third } from "../utilities/array";
import { METASTATEMENT_RULE_NAME } from "../ruleNames";
import { LEFT_BRACKET, RIGHT_BRACKET, BRACKETED_METASTATEMENT_CHILD_NODES_LENGTH } from "../constants";

export function matchBracketedMetastatementChildNode(childNodes, callback) {
  let bracketedMetastatementChildNodeMatches = false;

  const bracketedMetastatementChildNode = bracketedMetastatementChildNodeFromChildNodes(childNodes);

  if (bracketedMetastatementChildNode !== null) {
    bracketedMetastatementChildNodeMatches = callback(bracketedMetastatementChildNode);
  }

  return bracketedMetastatementChildNodeMatches;
}

export function matchTopmostMetaAssertionMetastatementNode(topmostMetaAssertionMetastatementNode, topmostMetastatementNode) {
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

export function bracketedMetastatementChildNodeFromChildNodes(childNodes) {
  let bracketedMetastatementChildNode = null;

  const childNodesLength = childNodes.length;

  if (childNodesLength === BRACKETED_METASTATEMENT_CHILD_NODES_LENGTH) {
    const firstChildNode = first(childNodes),
          thirdChildNode = third(childNodes),
          secondChildNode = second(childNodes),
          firstChildNodeTerminalNode = firstChildNode.isTerminalNode(),
          thirdChildNodeTerminalNode = thirdChildNode.isTerminalNode(),
          secondChildNodeNonTerminalNode = secondChildNode.isNonTerminalNode();

    if (firstChildNodeTerminalNode && secondChildNodeNonTerminalNode && thirdChildNodeTerminalNode) {
      const nonTerminalNode = secondChildNode,  ///
            firstTerminalNode = firstChildNode, ///
            secondTerminalNode = thirdChildNode,  ///
            nonTerminalNodeRuleName = nonTerminalNode.getRuleName(),
            firstTerminalNodeContent = firstTerminalNode.getContent(),
            secondTerminalNodeContent = secondTerminalNode.getContent(),
            firstTerminalNodeContentLeftBracket = (firstTerminalNodeContent === LEFT_BRACKET),
            secondTerminalNodeContentRightBracket = (secondTerminalNodeContent === RIGHT_BRACKET),
            nonTerminalNodeRuleNameMetastatementRuleName = (nonTerminalNodeRuleName === METASTATEMENT_RULE_NAME);

      if (firstTerminalNodeContentLeftBracket && nonTerminalNodeRuleNameMetastatementRuleName && secondTerminalNodeContentRightBracket) {
        bracketedMetastatementChildNode = nonTerminalNode;  ///
      }
    }
  }

  return bracketedMetastatementChildNode;
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
