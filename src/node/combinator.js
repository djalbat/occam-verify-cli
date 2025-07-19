"use strict";

import Node from "../node";

export default class CombinatorNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(CombinatorNode, ruleName, childNodes, opacity); }
}
