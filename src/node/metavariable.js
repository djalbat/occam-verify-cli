"use strict";

import Node from "../node";

export default class MetavariableNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(MetavariableNode, ruleName, childNodes, opacity); }
}
