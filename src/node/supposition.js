"use strict";

import Node from "../node";

export default class SuppositionNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(SuppositionNode, ruleName, childNodes, opacity, precedence); }
}
