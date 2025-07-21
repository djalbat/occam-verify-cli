"use strict";

import Node from "../node";

export default class TheoremNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(TheoremNode, ruleName, childNodes, opacity, precedence); }
}
