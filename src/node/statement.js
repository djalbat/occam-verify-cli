"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeTypeAssertionNode, isNodeSubproofAssertionNode, isNodePropertyAssertionNode } from "../utilities/node";

export default class StatementNode extends NonTerminalNode {
  getTypeAssertionNode() {
    const typeyAssertionNode = this.findChildNode((childNode) => {
      const childNodeTypeAssertionNode = isNodeTypeAssertionNode(childNode);

      if (childNodeTypeAssertionNode) {
        return true;
      }
    }) || null;

    return typeyAssertionNode;
  }

  getSubproofAssertionNode() {
    const subproofAssertionNode = this.findChildNode((childNode) => {
      const childNodeSubproofAssertionNode = isNodeSubproofAssertionNode(childNode);

      if (childNodeSubproofAssertionNode) {
        return true;
      }
    }) || null;

    return subproofAssertionNode;
  }

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
