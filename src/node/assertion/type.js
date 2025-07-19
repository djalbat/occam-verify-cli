"use strict";

import Node from "../../node";

export default class TypeAssertionNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(TypeAssertionNode, ruleName, childNodes, opacity); }
}
