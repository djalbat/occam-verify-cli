"use strict";

import Node from "../node";

export default class VariableNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(VariableNode, ruleName, childNodes, opacity); }
}
