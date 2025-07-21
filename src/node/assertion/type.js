"use strict";

import Node from "../../node";

export default class TypeAssertionNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(TypeAssertionNode, ruleName, childNodes, opacity, precedence); }
}
