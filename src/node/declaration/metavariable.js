"use strict";

import Node from "../../node";

export default class MetavariableDeclarationNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(MetavariableDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
