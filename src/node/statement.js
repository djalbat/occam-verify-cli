"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodePropertyAssertionNode } from "../utilities/node";

export default class StatementNode extends NonTerminalNode {
  getPropertyAssertionNode() {
    const propertyAssertionNode = this.findChildNode((childNode) => {
      const childNodePropertyAssertionNode = isNodePropertyAssertionNode(childNode);

      if (childNodePropertyAssertionNode) {
        return true;
      }
    }) || null;

    return propertyAssertionNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(StatementNode, ruleName, childNodes, opacity, precedence); }
}
