"use strict";

import { genericMatcher } from "../matcher/generic";
import { first, second, third } from "../utilities/array";
import { METASTATEMENT_RULE_NAME } from "../ruleNames";
import { BRACKETED_CHILD_NODES_LENGTH, LEFT_BRACKET, RIGHT_BRACKET } from "../constants";

export function matchBracketedNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB) {
  let bracketedNodeMatches = false;

  if (!bracketedNodeMatches) {
    const nonTerminalNodeMatches = genericMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB);

    bracketedNodeMatches = nonTerminalNodeMatches;  ///
  }

  if (!bracketedNodeMatches) {
    const nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
          childNodesA = nonTerminalNodeAChildNodes, ///
          bracketedNonTerminalChildNodeA = bracketedNonTerminalChildNodeFromChildNodes(childNodesA);

    if (bracketedNonTerminalChildNodeA !== null) {
      const nodeA = bracketedNonTerminalChildNodeA,  ///
            nodeB = nonTerminalNodeB, ///
            nodeMatches = genericMatcher.matchNode(nodeA, nodeB);

      bracketedNodeMatches = nodeMatches; ///
    }
  }

  if (!bracketedNodeMatches) {
    const nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
          childNodesB = nonTerminalNodeBChildNodes, ///
          bracketedNonTerminalChildNodeB = bracketedNonTerminalChildNodeFromChildNodes(childNodesB);

    if (bracketedNonTerminalChildNodeB !== null) {
      const nodeB = bracketedNonTerminalChildNodeB,  ///
            nodeA = nonTerminalNodeA, ///
            nodeMatches = matchNode(nodeA, nodeB);

      bracketedNodeMatches = nodeMatches; ///
    }
  }

  return bracketedNodeMatches;
}

export function bracketedNonTerminalChildNodeFromChildNodes(childNodes, ruleName = METASTATEMENT_RULE_NAME) {
  let bracketedNonTerminalChildNode = null;

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
            nonTerminalNodeRuleNameRuleName = (nonTerminalNodeRuleName === ruleName),
            firstTerminalNodeContentLeftBracket = (firstTerminalNodeContent === LEFT_BRACKET),
            secondTerminalNodeContentRightBracket = (secondTerminalNodeContent === RIGHT_BRACKET);

      if (nonTerminalNodeRuleNameRuleName && firstTerminalNodeContentLeftBracket && secondTerminalNodeContentRightBracket) {
        bracketedNonTerminalChildNode = nonTerminalNode;  ///
      }
    }
  }

  return bracketedNonTerminalChildNode;
}
