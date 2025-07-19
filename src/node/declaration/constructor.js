"use strict";

import Node from "../../node";

export default class ConstructorDeclarationNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(ConstructorDeclarationNode, ruleName, childNodes, opacity); }
}
