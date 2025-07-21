"use strict";

import Node from "../node";

export default class SubproofNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(SubproofNode, ruleName, childNodes, opacity, precedence); }
}
