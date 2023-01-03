"use strict";

import { first, second, third } from "./array";
import { METASTATEMENT_RULE_NAME } from "../ruleNames";
import { BRACKETED_CHILD_NODES_LENGTH, LEFT_BRACKET, RIGHT_BRACKET } from "../constants";

export function matchNode(nodeA, nodeB) {
  let nodeMatches = false;

  const nodeATerminalNode = nodeA.isTerminalNode(),
        nodeBTerminalNode = nodeB.isTerminalNode();

  if (nodeATerminalNode === nodeBTerminalNode) {
    if (nodeATerminalNode) {
      const terminalNodeA = nodeA,  ///
            terminalNodeB = nodeB,  ///
            terminalNodeMatches = matchTerminalNode(terminalNodeA, terminalNodeB);

      nodeMatches = terminalNodeMatches;  ///
    } else {
      const nonTerminalNodeA = nodeA,  ///
            nonTerminalNodeB = nodeB, ///
            nonTerminalNodeMatches = matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB);

      nodeMatches = nonTerminalNodeMatches; ///
    }
  }

  return nodeMatches;
}

export function matchNodes(nodesA, nodesB) {
  let nodesMatch = false;

  const nodesALength = nodesA.length,
        nodesBLength = nodesB.length;

  if (nodesALength === nodesBLength) {
    nodesMatch = nodesA.every((nodeA, index) => {
      const nodeB = nodesB[index],
            nodeMatches = matchNode(nodeA, nodeB);

      if (nodeMatches) {
        return true;
      }
    })
  }

  return nodesMatch;
}

export function matchBracketedNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB) {
  let bracketedNodeMatches = false;

  if (!bracketedNodeMatches) {
    const nonTerminalNodeMatches = matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB);

    bracketedNodeMatches = nonTerminalNodeMatches;  ///
  }

  if (!bracketedNodeMatches) {
    const nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
          childNodesA = nonTerminalNodeAChildNodes, ///
          bracketedChildNodeA = bracketedChildNodeFromChildNodes(childNodesA);

    if (bracketedChildNodeA !== null) {
      const nodeA = bracketedChildNodeA,  ///
            nodeB = nonTerminalNodeB, ///
            nodeMatches = matchNode(nodeA, nodeB);

      bracketedNodeMatches = nodeMatches; ///
    }
  }

  if (!bracketedNodeMatches) {
    const nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
          childNodesB = nonTerminalNodeBChildNodes, ///
          bracketedChildNodeB = bracketedChildNodeFromChildNodes(childNodesB);

    if (bracketedChildNodeB !== null) {
      const nodeB = bracketedChildNodeB,  ///
            nodeA = nonTerminalNodeA, ///
            nodeMatches = matchNode(nodeA, nodeB);

      bracketedNodeMatches = nodeMatches; ///
    }
  }

  return bracketedNodeMatches;
}

export function bracketedChildNodeFromChildNodes(childNodes) {
  let bracketedChildNode = null;

  const childNodesLength = childNodes.length;

  if (childNodesLength === BRACKETED_CHILD_NODES_LENGTH) {
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
        bracketedChildNode = nonTerminalNode;  ///
      }
    }
  }

  return bracketedChildNode;
}

function matchTerminalNode(terminalNodeA, terminalNodeB) {
  const matches = terminalNodeA.match(terminalNodeB),
        terminalNodeMatches = matches;  ///

  return terminalNodeMatches;
}

function matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB) {
  let nonTerminalNodeMatches = false;

  const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), ///
        nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///

  if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
    const nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
          nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
          nodesA = nonTerminalNodeAChildNodes, ///
          nodesB = nonTerminalNodeBChildNodes, ///
          nodesMatch = matchNodes(nodesA, nodesB);

    nonTerminalNodeMatches = nodesMatch; ///
  }

  return nonTerminalNodeMatches;
}
