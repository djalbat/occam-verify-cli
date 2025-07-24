"use strict";

import { NonTerminalNode } from "occam-parsers";

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

  getPropertyNames() {
    const propertyNames = this.reduceChildNode((propertyNames, childNode) => {
      const childNodePropertyNode = isNodePropertyNode(childNode);

      if (childNodePropertyNode) {
        const propertyNode = childNode, ///
              propertyName = propertyNode.getPropertyName();

        propertyNames.push(propertyName);
      }

      return propertyNames;
    }, []);

    return propertyNames;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PropertyDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
