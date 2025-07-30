"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { isNodeFrameNode, isNodeDeclarationNode } from "../utilities/node";

export default class JudgementNode extends NonTerminalNode {
  getFrameNode() {
    const frameNode = this.findChildNode((childNode) => {
      const childNodeFrameNode = isNodeFrameNode(childNode);

      if (childNodeFrameNode) {
        return true;
      }
    }) || null;

    return frameNode;
  }

  getDeclarationNode() {
    const declarationNode = this.findChildNode((childNode) => {
      const childNodeDeclarationNode = isNodeDeclarationNode(childNode);

      if (childNodeDeclarationNode) {
        return true;
      }
    }) || null;

    return declarationNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(JudgementNode, ruleName, childNodes, opacity, precedence); }
}
