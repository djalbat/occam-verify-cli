"use strict";

import Node from "../node";

export default class ErrorNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(ErrorNode, ruleName, childNodes, opacity, precedence); }
}
