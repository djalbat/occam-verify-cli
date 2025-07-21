"use strict";

import Node from "../../node";

export default class SatisfiesAssertionNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(SatisfiesAssertionNode, ruleName, childNodes, opacity, precedence); }
}
