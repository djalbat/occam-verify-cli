"use strict";

import Node from "../../node";

export default class MetavariableDeclarationNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(MetavariableDeclarationNode, ruleName, childNodes, opacity); }
}
