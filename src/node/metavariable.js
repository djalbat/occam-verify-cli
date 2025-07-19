"use strict";

import Node from "../node";

export default class MetavariableNode extends Node {
  getMetavariableName() {
    const metavariableName = this.fromFirstChildNode((firstChildNode) => {
      const nameTerminalNode = firstChildNode,  ///
            content = nameTerminalNode.getContent(),
            metavariableName = content; ///

      return metavariableName;
    });

    return metavariableName;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(MetavariableNode, ruleName, childNodes, opacity); }
}
