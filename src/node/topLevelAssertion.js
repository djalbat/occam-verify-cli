"use strict";

import Node from "../node";

export default class TopLevelAssertionNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(TopLevelAssertionNode, ruleName, childNodes, opacity); }
}
