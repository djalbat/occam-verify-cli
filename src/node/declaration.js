"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeStatementNode, isNodeMetavariableNode } from "../utilities/node";

export default class DeclarationNode extends NonTerminalNode {
  getStatementNode() {
    const statementNode = this.findChiildNode((childNode) => {
      const childNodeStatementNode = isNodeStatementNode(childNode);

      if (childNodeStatementNode) {
        return true;
      }
    }) || null;

    return statementNode;
  }

  getMetavariableNode() {
    const metavariableNode = this.findChildNode((childNode) => {
      const childNodeMetavariableNode = isNodeMetavariableNode(childNode);

      if (childNodeMetavariableNode) {
        return true;
      }
    }) || null;

    return metavariableNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(DeclarationNode, ruleName, childNodes, opacity, precedence); }
}
