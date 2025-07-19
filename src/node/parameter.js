"use strict";

import Node from "../node";

export default class ParameterNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(ParameterNode, ruleName, childNodes, opacity); }
}
