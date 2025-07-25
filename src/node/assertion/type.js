"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeTypeNode } from "../../utilities/node";

export default class TypeAssertionNode extends NonTerminalNode {
  getTypeNode() {
    const typeNode = this.findChildNode((childNode) => {
      const childNodeTypeNode = isNodeTypeNode(childNode);

      if (childNodeTypeNode) {
        return true;
      }
    }) || null;

    return typeNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TypeAssertionNode, ruleName, childNodes, opacity, precedence); }
}
