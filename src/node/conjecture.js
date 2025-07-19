"use strict";

import Node from "../node";

export default class ConjectureNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(ConjectureNode, ruleName, childNodes, opacity); }
}
