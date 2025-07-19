"use strict";

import Node from "../../node";

export default class ContainedDeclarationNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(ContainedDeclarationNode, ruleName, childNodes, opacity); }
}
