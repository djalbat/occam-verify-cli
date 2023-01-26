"use strict";

import { matcher } from "../matcher";
import { first, second, third } from "../utilities/array";
import { BRACKETED_CHILD_NODES_LENGTH, LEFT_BRACKET, RIGHT_BRACKET } from "../constants";

export function matchNonTerminalNodeModuloBrackets(nonTerminalNodeA, nonTerminalNodeB, ruleName) {
  let nonTerminalNodeMatchesModuloBrackets = false;

  if (!nonTerminalNodeMatchesModuloBrackets) {
    const nonTerminalNodeMatches = matcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB);

    nonTerminalNodeMatchesModuloBrackets = nonTerminalNodeMatches;  ///
  }

  if (!nonTerminalNodeMatchesModuloBrackets) {
    const bracketedNonTerminalNodeA = bracketedNonTerminalNodeFromNonTerminalNode(nonTerminalNodeA, ruleName);

    if (bracketedNonTerminalNodeA !== null) {
      const nodeA = bracketedNonTerminalNodeA,  ///
            nodeB = nonTerminalNodeB, ///
            nodeMatches = matcher.matchNode(nodeA, nodeB);

      nonTerminalNodeMatchesModuloBrackets = nodeMatches; ///
    }
  }

  if (!nonTerminalNodeMatchesModuloBrackets) {
    const bracketedNonTerminalNodeB = bracketedNonTerminalNodeFromNonTerminalNode(nonTerminalNodeB, ruleName);

    if (bracketedNonTerminalNodeB !== null) {
      const nodeB = bracketedNonTerminalNodeB,  ///
            nodeA = nonTerminalNodeA, ///
            nodeMatches = matcher.matchNode(nodeA, nodeB);

      nonTerminalNodeMatchesModuloBrackets = nodeMatches; ///
    }
  }

  return nonTerminalNodeMatchesModuloBrackets;
}


// ruleName = METASTATEMENT_RULE_NAME, META_ARGUMENT_RULE_NAME, STATEMENT_RULE_NAME

export function bracketedNonTerminalNodeFromNonTerminalNode(nonTerminalNode, ruleName) {
  let bracketedNonTerminalNode = null;

  const childNodes = nonTerminalNode.getChildNodes(),
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
            nonTerminalNodeRuleNameRuleName = (nonTerminalNodeRuleName === ruleName),
            firstTerminalNodeContentLeftBracket = (firstTerminalNodeContent === LEFT_BRACKET),
            secondTerminalNodeContentRightBracket = (secondTerminalNodeContent === RIGHT_BRACKET);

      if (nonTerminalNodeRuleNameRuleName && firstTerminalNodeContentLeftBracket && secondTerminalNodeContentRightBracket) {
        bracketedNonTerminalNode = nonTerminalNode;  ///
      }
    }
  }

  return bracketedNonTerminalNode;
}

