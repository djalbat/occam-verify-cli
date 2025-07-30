"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { isNodeTermNode, isNodePropertyRelationNode } from "../../utilities/node";

export default class PropertyAssertionNode extends NonTerminalNode {
  getTermNode() {
    const termNode = this.findChildNode((childNode) => {
      const childNodeTermNode = isNodeTermNode(childNode);

      if (childNodeTermNode) {
        return true;
      }
    }) || null;

    return termNode;
  }

  getPropertyRelationNode() {
    const propertyRelationNode = this.findChildNode((childNode) => {
      const childNodePropertyRelationNode = isNodePropertyRelationNode(childNode);

      if (childNodePropertyRelationNode) {
        return true;
      }
    }) || null;

    return propertyRelationNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PropertyAssertionNode, ruleName, childNodes, opacity, precedence); }
}
