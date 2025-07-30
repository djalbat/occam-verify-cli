"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { isNodeTermNode, isNodePropertyNode } from "../utilities/node";

export default class PropertyRelationNode extends NonTerminalNode {
  getTermNode() {
    const termNode = this.findChildNode((childNode) => {
      const childNodeTermNode = isNodeTermNode(childNode);

      if (childNodeTermNode) {
        return true;
      }
    }) || null;

    return termNode;
  }

  getPropertyNode() {
    const propertyNode = this.findChildNode((childNode) => {
      const childNodePropertyNode = isNodePropertyNode(childNode);

      if (childNodePropertyNode) {
        return true;
      }
    }) || null;

    return propertyNode;
  }

  getPropertyName() {
    const propertyNode = this.getPropertyNode(),
          propertyName = propertyNode.getPropertyName();

    return propertyName;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PropertyRelationNode, ruleName, childNodes, opacity, precedence); }
}
