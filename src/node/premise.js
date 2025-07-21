"use strict";

import Node from "../node";

export default class PremiseNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(PremiseNode, ruleName, childNodes, opacity, precedence); }
}
