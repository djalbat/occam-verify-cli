"use strict";

import { matcher } from "../matcher";
import { nodeQuery } from "./query";
import { first, second, third } from "./array";
import { META_ARGUMENT_RULE_NAME } from "../ruleNames";
import { LEFT_BRACKET, RIGHT_BRACKET, BRACKETED_CHILD_NODES_LENGTH } from "../constants";

const statementNodeQuery = nodeQuery('/metaArgument/statement!');

export function matchStatementModuloBrackets(statementNodeA, statementNodeB) {
  let statementMatchesModuloBrackets = false;

  if (!statementMatchesModuloBrackets) {
    const nonTerminalNodeA = statementNodeA,  ///
          nonTerminalNodeB = statementNodeB,  ///
          nonTerminalNodeMatches = matcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB);

    statementMatchesModuloBrackets = nonTerminalNodeMatches;  ///
  }

  if (!statementMatchesModuloBrackets) {
    const bracketedStatementNodeA = bracketedStatementNodeFromStatementNode(statementNodeA);

    if (bracketedStatementNodeA !== null) {
      const statementNodeA = bracketedStatementNodeA,
            nodeA = statementNodeA, ///
            nodeB = statementNodeB, ///
            nodeMatches = matcher.matchNode(nodeA, nodeB);

      statementMatchesModuloBrackets = nodeMatches; ///
    }
  }

  if (!statementMatchesModuloBrackets) {
    const bracketedStatementNodeB = bracketedStatementNodeFromStatementNode(statementNodeB);

    if (bracketedStatementNodeB !== null) {
      const statementNodeB = bracketedStatementNodeB, ///
            nodeA = statementNodeA, ///
            nodeB = statementNodeB, ///
            nodeMatches = matcher.matchNode(nodeA, nodeB);

      statementMatchesModuloBrackets = nodeMatches; ///
    }
  }

  return statementMatchesModuloBrackets;
}

export function bracketedStatementNodeFromStatementNode(statementNode) {
  let bracketedStatementNode = null;

  const nonTerminalNode = statementNode,  ///
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
            nonTerminalNodeRuleNameMetaArgumentRuleName = (nonTerminalNodeRuleName === META_ARGUMENT_RULE_NAME);

      if (nonTerminalNodeRuleNameMetaArgumentRuleName && firstTerminalNodeContentLeftBracket && secondTerminalNodeContentRightBracket) {
        const metaArgumentNode = nonTerminalNode, ///
              statementNode = statementNodeQuery(metaArgumentNode);

        if (statementNode !== null) {
          bracketedStatementNode = statementNode;  ///
        }
      }
    }
  }

  return bracketedStatementNode;
}
