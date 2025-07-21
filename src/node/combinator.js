"use strict";

import Node from "../node";

export default class CombinatorNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(CombinatorNode, ruleName, childNodes, opacity, precedence); }
}
