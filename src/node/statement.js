"use strict";

import Node from "../node";

export default class StatementNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(StatementNode, ruleName, childNodes, opacity, precedence); }
}
