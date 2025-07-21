"use strict";

import Node from "../../node";

export default class DefinedAssertionNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(DefinedAssertionNode, ruleName, childNodes, opacity, precedence); }
}
