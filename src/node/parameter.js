"use strict";

import Node from "../node";

export default class ParameterNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(ParameterNode, ruleName, childNodes, opacity, precedence); }
}
