"use strict";

import Node from "../../node";

export default class PropertyAssertionNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(PropertyAssertionNode, ruleName, childNodes, opacity, precedence); }
}
