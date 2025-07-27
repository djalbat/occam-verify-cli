"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeTermNode, isNodeFrameNode } from "../../utilities/node";

export default class DefinedAssertionNode extends NonTerminalNode {
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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(DefinedAssertionNode, ruleName, childNodes, opacity, precedence); }
}
