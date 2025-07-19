"use strict";

import Node from "../node";

export default class PropertyNode extends Node {
  getPropertyName() {
    const propertyName = this.reduceChildNode((propertyName, firstChildNode) => {
      const nameTerminalNode = firstChildNode,  ///
            content = nameTerminalNode.getContent();

      propertyName = (propertyName !== null) ?
                       `${propertyName} ${content}` :
                          content;  ///

      return propertyName;
    }, null);

    return propertyName;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(PropertyNode, ruleName, childNodes, opacity); }
}
