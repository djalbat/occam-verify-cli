"use strict";

import Node from "../node";

export default class DeductionNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(DeductionNode, ruleName, childNodes, opacity, precedence); }
}
