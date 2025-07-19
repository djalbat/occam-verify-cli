"use strict";

import Node from "../node";

export default class ConclusionNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(ConclusionNode, ruleName, childNodes, opacity); }
}
