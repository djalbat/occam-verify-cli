"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { isNodeTypeNode, isNodePropertyNode } from "../../utilities/node";

export default class PropertyDeclarationNode extends NonTerminalNode {
  getTypeNode() {
    const typeNode = this.findChildNode((childNode) => {
      const childNodeTypeNode = isNodeTypeNode(childNode);

      if (childNodeTypeNode) {
        return true;
      }
    }) || null;

    return typeNode;
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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PropertyDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
