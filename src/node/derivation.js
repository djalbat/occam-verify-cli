"use strict";

import Node from "../node";

export default class DerivationNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(DerivationNode, ruleName, childNodes, opacity, precedence); }
}
