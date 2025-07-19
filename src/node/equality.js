"use strict";

import Node from "../node";

export default class EqualityNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(EqualityNode, ruleName, childNodes, opacity); }
}
