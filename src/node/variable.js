"use strict";

import Node from "../node";

export default class VariableNode extends Node {
  getVariableName() {
    const variableName = this.fromFirstChildNode((firstChildNode) => {
      const nameTerminalNode = firstChildNode,  ///
            content = nameTerminalNode.getContent(),
            variableName = content; ///

      return variableName;
    });

    return variableName;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(VariableNode, ruleName, childNodes, opacity); }
}
