"use strict";

import Node from "../node";

export default class TopLevelAssertionNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(TopLevelAssertionNode, ruleName, childNodes, opacity, precedence); }
}
