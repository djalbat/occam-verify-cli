"use strict";

import { first, second, third } from "../utilities/array";
import { BRACKETED_CHILD_NODES_LENGTH, LEFT_BRACKET, RIGHT_BRACKET } from "../constants";

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

