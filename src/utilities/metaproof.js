"use strict";

import { matcher } from "../matcher";
import { first, second, third } from "./array";
import { METASTATEMENT_RULE_NAME } from "../ruleNames";
import { LEFT_BRACKET, RIGHT_BRACKET, BRACKETED_CHILD_NODES_LENGTH } from "../constants";

export function matchMetastatementModuloBrackets(metastatementNodeA, metastatementNodeB) {
  let metastatementMatchesModuloBrackets = false;

  if (!metastatementMatchesModuloBrackets) {
    const nonTerminalNodeA = metastatementNodeA,  ///
          nonTerminalNodeB = metastatementNodeB,  ///
          nonTerminalNodeMatches = matcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB);

    metastatementMatchesModuloBrackets = nonTerminalNodeMatches;  ///
  }

  if (!metastatementMatchesModuloBrackets) {
    const bracketedNonTerminalNodeA = bracketedMetastatementNodeFromMetastatementNode(metastatementNodeA);

    if (bracketedNonTerminalNodeA !== null) {
      const nodeA = bracketedNonTerminalNodeA,  ///
            nodeB = nonTerminalNodeB, ///
            nodeMatches = matcher.matchNode(nodeA, nodeB);

      metastatementMatchesModuloBrackets = nodeMatches; ///
    }
  }

  if (!metastatementMatchesModuloBrackets) {
    const bracketedNonTerminalNodeB = bracketedMetastatementNodeFromMetastatementNode(metastatementNodeB);

    if (bracketedNonTerminalNodeB !== null) {
      const nodeB = bracketedNonTerminalNodeB,  ///
            nodeA = nonTerminalNodeA, ///
            nodeMatches = matcher.matchNode(nodeA, nodeB);

      metastatementMatchesModuloBrackets = nodeMatches; ///
    }
  }

  return metastatementMatchesModuloBrackets;
}

export function bracketedMetastatementNodeFromMetastatementNode(metastatementNode) {
  let bracketedMetastatementNode = null;

  const nonTerminalNode = metastatementNode,  ///
        childNodes = nonTerminalNode.getChildNodes(),
        childNodesLength = childNodes.length;

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

      if (nonTerminalNodeRuleNameMetastatementRuleName && firstTerminalNodeContentLeftBracket && secondTerminalNodeContentRightBracket) {
        bracketedMetastatementNode = nonTerminalNode;  ///
      }
    }
  }

  return bracketedMetastatementNode;
}
