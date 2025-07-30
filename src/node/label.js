"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { isNodeMetavariableNode } from "../utilities/node";

export default class LabelNode extends NonTerminalNode {
  getMetavariableNode() {
    const metavariableNode = this.findChildNode((childNode) => {
      const childNodeMetavariableNode = isNodeMetavariableNode(childNode);

      if (childNodeMetavariableNode) {
        return true;
      }
    }) || null;

    return metavariableNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(LabelNode, ruleName, childNodes, opacity, precedence); }
}
