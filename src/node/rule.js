"use strict";

import Node from "../node";

export default class RuleNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(RuleNode, ruleName, childNodes, opacity, precedence); }
}
