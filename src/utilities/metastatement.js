"use strict";

import { first, second, third } from "../utilities/array";
import { METASTATEMENT_RULE_NAME } from "../ruleNames";
import { LEFT_BRACKET, RIGHT_BRACKET, BRACKETED_METASTATEMENT_CHILD_NODES_LENGTH } from "../constants";

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

export function matchBracketedMetastatementChildNode(childNodes, callback) {
  let bracketedMetastatementChildNodeMatches = false;

  const bracketedMetastatementChildNode = bracketedMetastatementChildNodeFromChildNodes(childNodes);

  if (bracketedMetastatementChildNode !== null) {
    bracketedMetastatementChildNodeMatches = callback(bracketedMetastatementChildNode);
  }

  return bracketedMetastatementChildNodeMatches;
}
