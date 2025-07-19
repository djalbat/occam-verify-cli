"use strict";

import Node from "../node";

export default class TypeNode extends Node {
  getName() {
    const name = this.fromFirstChildNode((firstChildNode) => {
      const typeTerminalNode = firstChildNode,  ///
            content = typeTerminalNode.getContent(),
            name = content; ///

      return name;
    });

    return name;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(TypeNode, ruleName, childNodes, opacity); }
}
