"use strict";

import { first, second, third } from "../utilities/array";
import { STATEMENT_RULE_NAME } from "../ruleNames";
import { LEFT_BRACKET, RIGHT_BRACKET, BRACKETED_STATEMENT_CHILD_NODES_LENGTH } from "../constants";

export function bracketedStatementChildNodeFromChildNodes(childNodes) {
  let bracketedStatementChildNode = null;

  const childNodesLength = childNodes.length;

  if (childNodesLength === BRACKETED_STATEMENT_CHILD_NODES_LENGTH) {
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
            nonTerminalNodeRuleNameStatementRuleName = (nonTerminalNodeRuleName === STATEMENT_RULE_NAME);

      if (firstTerminalNodeContentLeftBracket && nonTerminalNodeRuleNameStatementRuleName && secondTerminalNodeContentRightBracket) {
        bracketedStatementChildNode = nonTerminalNode;  ///
      }
    }
  }

  return bracketedStatementChildNode;
}

export function matchBracketedStatementChildNode(childNodes, callback) {
  let bracketedStatementChildNodeMatches = false;

  const bracketedStatementChildNode = bracketedStatementChildNodeFromChildNodes(childNodes);

  if (bracketedStatementChildNode !== null) {
    bracketedStatementChildNodeMatches = callback(bracketedStatementChildNode);
  }

  return bracketedStatementChildNodeMatches;
}
