"use strict";

import Node from "../../node";

export default class VariableDeclarationNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(VariableDeclarationNode, ruleName, childNodes, opacity); }
}
