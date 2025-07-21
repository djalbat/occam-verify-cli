"use strict";

import Node from "../../node";

export default class SubproofAssertionNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(SubproofAssertionNode, ruleName, childNodes, opacity, precedence); }
}
