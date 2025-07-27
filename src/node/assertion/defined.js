"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeFrameNode } from "../../utilities/node";

export default class DefinedAssertionNode extends NonTerminalNode {
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
