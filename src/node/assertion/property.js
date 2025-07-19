"use strict";

import Node from "../../node";

export default class PropertyAssertionNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(PropertyAssertionNode, ruleName, childNodes, opacity); }
}
