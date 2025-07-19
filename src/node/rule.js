"use strict";

import Node from "../node";

export default class RuleNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(RuleNode, ruleName, childNodes, opacity); }
}
