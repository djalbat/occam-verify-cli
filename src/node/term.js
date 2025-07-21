"use strict";

import Node from "../node";

export default class TermNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(TermNode, ruleName, childNodes, opacity, precedence); }
}
