"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class PropertyNode extends NonTerminalNode {
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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PropertyNode, ruleName, childNodes, opacity, precedence); }
}
