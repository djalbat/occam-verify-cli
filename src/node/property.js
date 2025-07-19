"use strict";

import Node from "../node";

export default class PropertyNode extends Node {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(PropertyNode, ruleName, childNodes, opacity); }
}
