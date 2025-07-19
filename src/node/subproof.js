"use strict";

import Node from "../node";

export default class SubproofNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(SubproofNode, ruleName, childNodes, opacity); }
}
