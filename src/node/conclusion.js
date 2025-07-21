"use strict";

import Node from "../node";

export default class ConclusionNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(ConclusionNode, ruleName, childNodes, opacity, precedence); }
}
