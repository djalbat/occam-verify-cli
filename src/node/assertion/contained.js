"use strict";

import Node from "../../node";

export default class ContainedAssertionNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(ContainedAssertionNode, ruleName, childNodes, opacity); }
}
