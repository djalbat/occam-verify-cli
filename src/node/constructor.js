"use strict";

import Node from "../node";

export default class ConstructorNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(ConstructorNode, ruleName, childNodes, opacity, precedence); }
}
