"use strict";

import Node from "../node";

export default class ReferenceNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(ReferenceNode, ruleName, childNodes, opacity, precedence); }
}
