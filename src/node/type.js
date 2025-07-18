"use strict";

import Node from "../node";

export default class TypeNode extends Node {
  getTypeName() {
    const typeName = this.fromFirstChildNode((firstChildNode) => {
      const typeTerminalNode = firstChildNode,  ///
            content = typeTerminalNode.getContent(),
            typeName = content; ///

      return typeName;
    });

    return typeName;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(TypeNode, ruleName, childNodes, opacity); }
}
