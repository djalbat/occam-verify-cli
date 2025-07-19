"use strict";

import Node from "../../node";

import { isNodePropertyNode } from "../../utilities/node";

export default class PropertyDeclarationNode extends Node {
  getTypeNode() {
    const typeNode = this.fromSecondLastChildNode((secondLastChildNode) => {
      const typeNode = secondLastChildNode;; ///

      return typeNode;
    });

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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(PropertyDeclarationNode, ruleName, childNodes, opacity); }
}
