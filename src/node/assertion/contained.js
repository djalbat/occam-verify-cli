"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeTermNode, isNodeFrameNode, isNodeStatementNode } from "../../utilities/node";

export default class ContainedAssertionNode extends NonTerminalNode {
  getTermNode() {
    const termNode = this.findChildNode((childNode) => {
      const childNodeTermNode = isNodeTermNode(childNode);

      if (childNodeTermNode) {
        return true;
      }
    }) || null;

    return termNode;
  }

  getFrameNode() {
    const frameNode = this.findChildNode((childNode) => {
      const childNodeFrameNode = isNodeFrameNode(childNode);

      if (childNodeFrameNode) {
        return true;
      }
    }) || null;

    return frameNode;
  }

  getStatementNode() {
    const statementNode = this.findChiildNode((childNode) => {
      const childNodeStatementNode = isNodeStatementNode(childNode);

      if (childNodeStatementNode) {
        return true;
      }
    }) || null;

    return statementNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ContainedAssertionNode, ruleName, childNodes, opacity, precedence); }
}
