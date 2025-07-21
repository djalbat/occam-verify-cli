"use strict";

import Node from "../../node";

export default class ContainedAssertionNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(ContainedAssertionNode, ruleName, childNodes, opacity, precedence); }
}
