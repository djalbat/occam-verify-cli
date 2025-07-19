"use strict";

import Node from "../node";

export default class SuppositionNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(SuppositionNode, ruleName, childNodes, opacity); }
}
