"use strict";

import Node from "../../node";

export default class SubproofAssertionNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(SubproofAssertionNode, ruleName, childNodes, opacity); }
}
