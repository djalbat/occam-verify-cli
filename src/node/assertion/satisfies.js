"use strict";

import Node from "../../node";

export default class SatisfiesAssertionNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(SatisfiesAssertionNode, ruleName, childNodes, opacity); }
}
