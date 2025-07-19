"use strict";

import Node from "../node";

export default class TopLevelMetaAssertionNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(TopLevelMetaAssertionNode, ruleName, childNodes, opacity); }
}
