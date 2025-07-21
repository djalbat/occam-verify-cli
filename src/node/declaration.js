"use strict";

import Node from "../node";

export default class DeclarationNode extends Node {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(DeclarationNode, ruleName, childNodes, opacity, precedence); }
}
