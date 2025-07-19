"use strict";

import Node from "../node";

export default class DeclarationNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(DeclarationNode, ruleName, childNodes, opacity); }
}
