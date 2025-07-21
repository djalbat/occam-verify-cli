"use strict";

import Node from "../node";

export default class ConjectureNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(ConjectureNode, ruleName, childNodes, opacity, precedence); }
}
