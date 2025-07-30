"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { isNodeTermNode, isNodeMetavariableNode } from "../../utilities/node";

export default class SatisfiesAssertionNode extends NonTerminalNode {
  getTermNodes() {
    const termNodes = this.filterChildNode((childNode) => {
      const childNodeTermNode = isNodeTermNode(childNode);

      if (childNodeTermNode) {
        return true;
      }
    });

    return termNodes;
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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(SatisfiesAssertionNode, ruleName, childNodes, opacity, precedence); }
}
